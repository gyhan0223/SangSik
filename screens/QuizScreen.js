import { useEffect } from "react";
import React, { useState } from "react";
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
]; // quizData는 DB 연결, (정답률 = 정답자 수 / 전체 풀이자 수)

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
}; // 배열 랜덤 섞기 함수

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [point, setPoint] = useState(0); // 초기값은 추후에 개인정보 DB에서 보유 포인트로 대체

  useEffect(() => {
    // 선택지 랜덤 섞기
    setOptions(shuffleArray([...quizData[currentQuestion].options]));
  }, [currentQuestion]);

  const handleAnswerPress = (selectedOption) => {
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);

      setPoint((prevPoint) => {
        const rate = quizData[currentQuestion].correctRate;

        if (rate >= 40) {
          return prevPoint + 1;
        } else if (rate >= 31 && rate < 40) {
          return prevPoint + 2;
        } else if (rate >= 21 && rate < 30) {
          return prevPoint + 3;
        } else if (rate >= 11 && rate < 20) {
          return prevPoint + 4;
        } else {
          return prevPoint + 5;
        }
      });
      Alert.alert("정답!", "잘했어요! 🎉");
    } else {
      Alert.alert("오답!", `정답은 "${correctAnswer}" 입니다.`);
    }

    // 마지막 문제인지 확인 후 종료 or 다음 문제로 이동
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      Alert.alert("퀴즈 완료!", `총 점수: ${score + 1}점`);
      setCurrentQuestion(0); // 처음부터 다시 시작
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
        <Text style={styles.questionText}>
          {quizData[currentQuestion].question}
        </Text>
        <Text style={styles.questionCorrectRate}>
          정답률 : {quizData[currentQuestion].correctRate}%
        </Text>
      </View>
      {/* 선택지 버튼 4개 */}
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
      );
    </View>
  );
}
