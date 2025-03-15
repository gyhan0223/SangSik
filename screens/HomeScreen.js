import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [points, setPoints] = useState(100); // 예시 포인트 값
  const [ranking, setRanking] = useState(5); // 예시 사용자 랭킹

  // 카테고리 목록
  const categories = ["과학", "역사", "스포츠", "음악", "영화", "기술", "문학"];

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>홈</Text>
        <Text style={styles.headerPoints}>내 포인트: {points}점</Text>
      </View>

      {/* 🔥 리더보드 & 내 랭킹 */}
      <View style={styles.rankingContainer}>
        <Text style={styles.rankingText}>📊 내 랭킹: {ranking}위</Text>
        <TouchableOpacity
          style={styles.leaderboardButton}
          onPress={() => navigation.navigate("리더보드")}
        >
          <Text style={styles.leaderboardText}>전체 순위 보기</Text>
        </TouchableOpacity>
      </View>

      {/* 🔥 일일 도전 과제 */}
      <View style={styles.missionContainer}>
        <Text style={styles.missionTitle}>🎯 오늘의 도전 과제</Text>
        <Text style={styles.missionText}>
          퀴즈 5문제 맞히기 (완료 시 +10 포인트)
        </Text>
        <TouchableOpacity style={styles.missionButton}>
          <Text style={styles.missionButtonText}>진행하기</Text>
        </TouchableOpacity>
      </View>

      {/* 🔥 카테고리 선택 */}
      <Text style={styles.categoryTitle}>카테고리 선택</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() => navigation.navigate("퀴즈", { category })}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 🔥 포인트 사용 - 응모 기능 */}
      <View style={styles.rewardsContainer}>
        <Text style={styles.rewardsText}>🎁 포인트로 이벤트에 응모하세요!</Text>
        <TouchableOpacity
          style={styles.rewardsButton}
          onPress={() => navigation.navigate("응모")}
        >
          <Text style={styles.rewardsButtonText}>응모하기</Text>
        </TouchableOpacity>
      </View>

      {/* 🔥 오답 노트 */}
      <View style={styles.noteContainer}>
        <TouchableOpacity
          style={styles.noteButton}
          onPress={() => navigation.navigate("오답노트")}
        >
          <Text style={styles.noteText}>오답 복습하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
