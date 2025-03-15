import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "../styles";

const quizData = [
  {
    question: "지구에서 가장 큰 바다는?",
    options: ["대서양", "인도양", "태평양", "남극해"],
    answer: "태평양",
    correctRate: 7,
  },
  {
    question: "세계에서 가장 높은 산은?",
    options: ["에베레스트", "K2", "안나푸르나", "마터호른"],
    answer: "에베레스트",
    correctRate: 24,
  },
  {
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
  const [timeLeft, setTimeLeft] = useState(15); // 타이머 초기값 15초

  useEffect(() => {
    setOptions(shuffleArray([...quizData[currentQuestion].options]));
    setTimeLeft(15); // 문제 변경 시 타이머 리셋
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleTimeout = () => {
    Alert.alert("시간 초과!", "다음 문제로 넘어갑니다.");
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      Alert.alert("퀴즈 완료!", `총 점수: ${score}점`);
      setCurrentQuestion(0);
      setScore(0);
    }
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

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      Alert.alert("퀴즈 완료!", `총 점수: ${score + 1}점`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>상식</Text>
        <Text style={styles.myPoints}>현재 포인트 : {point}</Text>
      </View>

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

      {/* 선택지 버튼 */}
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
