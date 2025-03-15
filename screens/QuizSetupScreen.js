import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";

const categories = ["과학", "지리", "일반상식", "역사", "예술", "스포츠"];
const difficulties = ["쉬움", "보통", "어려움", "천재"];

export default function QuizSetupScreen() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleStartQuiz = () => {
    if (!selectedCategory || !selectedDifficulty) {
      alert("카테고리와 난이도를 선택해주세요.");
      return;
    }
    navigation.navigate("QuizScreen", {
      category: selectedCategory,
      difficulty: selectedDifficulty,
    });
  };

  const handleTestQuiz = () => {
    navigation.navigate("Quiz");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>퀴즈 설정</Text>

      {/* 카테고리 선택 - 가로 스크롤 */}
      <Text style={styles.label}>카테고리 선택</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedButton,
            ]}
            onPress={
              () =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                ) // 다시 클릭하면 해제
            }
          >
            <Text style={styles.optionText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 난이도 선택 */}
      <Text style={styles.label}>난이도 선택</Text>
      {difficulties.map((difficulty) => (
        <TouchableOpacity
          key={difficulty}
          style={[
            styles.optionButton,
            selectedDifficulty === difficulty && styles.selectedButton,
          ]}
          onPress={
            () =>
              setSelectedDifficulty(
                selectedDifficulty === difficulty ? null : difficulty
              ) // 다시 클릭하면 해제
          }
        >
          <Text style={styles.optionText}>{difficulty}</Text>
        </TouchableOpacity>
      ))}

      {/* 시작 버튼 */}
      <TouchableOpacity style={styles.startButton} onPress={handleStartQuiz}>
        <Text style={styles.startButtonText}>시작하기</Text>
      </TouchableOpacity>

      {/* 테스트 버튼 추가 */}
      <TouchableOpacity style={styles.testButton} onPress={handleTestQuiz}>
        <Text style={styles.testButtonText}>테스트</Text>
      </TouchableOpacity>
    </View>
  );
}
