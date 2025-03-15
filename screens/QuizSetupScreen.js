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

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>퀴즈 설정</Text>

      {/* 카테고리 선택 - 가로 스크롤 */}
      <Text style={styles.label}>카테고리 선택</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {categories.map((category) => (
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
