import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "../styles";

const quizData = [
  {
    category: "과학",
    difficulty: "쉬움",
    question: "지구에서 가장 큰 바다는?",
    options: ["대서양", "인도양", "태평양", "남극해"],
    answer: "태평양",
    correctRate: 7,
  },
  {
    category: "지리",
    difficulty: "보통",
    question: "세계에서 가장 높은 산은?",
    options: ["에베레스트", "K2", "안나푸르나", "마터호른"],
    answer: "에베레스트",
    correctRate: 24,
  },
  {
    category: "일반상식",
    difficulty: "어려움",
    question: "한국의 수도는?",
    options: ["서울", "부산", "대구", "인천"],
    answer: "서울",
    correctRate: 80,
  },
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [point, setPoint] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  useEffect(() => {
    if (quizStarted) {
      setOptions(shuffleArray([...quizData[currentQuestion].options]));
      setTimeLeft(15);
    }
  }, [currentQuestion, quizStarted]);

  useEffect(() => {
    if (!quizStarted || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizStarted]);

  const handleStartQuiz = () => {
    if (!selectedCategory || !selectedDifficulty) {
      Alert.alert("선택 필요", "카테고리와 난이도를 선택해주세요.");
      return;
    }

    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(15);
  };

  const handleTimeout = () => {
    Alert.alert("시간 초과!", "다음 문제로 넘어갑니다.");
    goToNextQuestion();
  };

  const handleAnswerPress = (selectedOption) => {
    const correctAnswer = quizData[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
      setPoint((prevPoint) => {
        const rate = quizData[currentQuestion].correctRate;
        if (rate >= 40) return prevPoint + 1;
        if (rate >= 31) return prevPoint + 2;
        if (rate >= 21) return prevPoint + 3;
        if (rate >= 11) return prevPoint + 4;
        return prevPoint + 5;
      });
      Alert.alert("정답!", "잘했어요! 🎉");
    } else {
      Alert.alert("오답!", `정답은 "${correctAnswer}" 입니다.`);
    }

    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(15);
    } else {
      Alert.alert("퀴즈 완료!", `총 점수: ${score}점`, [
        { text: "확인", onPress: resetQuiz },
      ]);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setSelectedCategory(null);
    setSelectedDifficulty(null);
  };

  if (!quizStarted) {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>퀴즈 설정</Text>

        {/* 카테고리 선택 */}
        <Text style={styles.label}>카테고리 선택</Text>
        {["과학", "지리", "일반상식"].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.optionButton,
              selectedCategory === category && styles.selectedButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.optionText}>{category}</Text>
          </TouchableOpacity>
        ))}

        {/* 난이도 선택 */}
        <Text style={styles.label}>난이도 선택</Text>
        {["쉬움", "보통", "어려움"].map((difficulty) => (
          <TouchableOpacity
            key={difficulty}
            style={[
              styles.optionButton,
              selectedDifficulty === difficulty && styles.selectedButton,
            ]}
            onPress={() => setSelectedDifficulty(difficulty)}
          >
            <Text style={styles.optionText}>{difficulty}</Text>
          </TouchableOpacity>
        ))}

        {/* 시작 버튼 */}
        <TouchableOpacity style={styles.startButton} onPress={handleStartQuiz}>
          <Text style={styles.startButtonText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* 문제 영역 */}
      <View style={styles.questionContainer}>
        <Text style={styles.timerText}>⏳ {timeLeft}초</Text>
        <Text style={styles.questionText}>
          {quizData[currentQuestion].question}
        </Text>
        <Text style={styles.questionCorrectRate}>
          정답률 : {quizData[currentQuestion].correctRate}%
        </Text>
      </View>

      {/* 선택지 */}
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswerPress(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
