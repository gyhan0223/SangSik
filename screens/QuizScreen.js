import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import styles from "../styles";

const quizData = [
  {
    category: "과학",
    question: "지구에서 가장 큰 바다는?",
    options: ["대서양", "인도양", "태평양", "남극해"],
    answer: "태평양",
    correctRate: 7,
  },
  {
    category: "지리",
    question: "세계에서 가장 높은 산은?",
    options: ["에베레스트", "K2", "안나푸르나", "마터호른"],
    answer: "에베레스트",
    correctRate: 24,
  },
  {
    category: "일반상식",
    question: "한국의 수도는?",
    options: ["서울", "부산", "대구", "인천"],
    answer: "서울",
    correctRate: 80,
  },
];

// 정답률에 따른 난이도 설정 함수
const getDifficultyLevel = (correctRate) => {
  if (correctRate >= 70) return { label: "쉬움", color: "#4caf50" };
  if (correctRate >= 40) return { label: "보통", color: "#ffcc00" };
  if (correctRate >= 20) return { label: "어려움", color: "#ff9900" };
  return { label: "천재", color: "#ff4d4d" };
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export default function QuizScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    setOptions(shuffleArray([...quizData[currentQuestion].options]));
    setTimeLeft(15);
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
    goToNextQuestion();
  };

  const handleAnswerPress = (selectedOption) => {
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
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
        { text: "확인", onPress: goToSetupScreen },
      ]);
    }
  };

  const goToSetupScreen = () => {
    navigation.goBack("QuizSetup");
  };

  // 현재 문제 정보
  const questionData = quizData[currentQuestion];
  const difficultyInfo = getDifficultyLevel(questionData.correctRate);

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔙 뒤로 가기 버튼 */}
      <TouchableOpacity style={styles.backButton} onPress={goToSetupScreen}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* 문제 영역 */}
      <View style={styles.questionContainer}>
        <Text style={styles.timerText}>⏳ {timeLeft}초</Text>

        <Text style={styles.questionText}>{questionData.question}</Text>

        {/* 난이도 표시 */}
        <View
          style={[
            styles.difficultyBadge,
            { backgroundColor: difficultyInfo.color },
          ]}
        >
          <Text style={styles.difficultyText}>{difficultyInfo.label}</Text>
        </View>

        <Text
          style={
            (styles.questionCorrectRate,
            { backgroundColor: difficultyInfo.color })
          }
        >
          정답률 : {questionData.correctRate}%
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
    </SafeAreaView>
  );
}
