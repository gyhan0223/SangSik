import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#4CAF50",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  headerPoints: {
    fontSize: 16,
    color: "#fff",
  },
  rankingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  rankingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  leaderboardButton: {
    backgroundColor: "#4CAF50",
    padding: 8,
    borderRadius: 5,
  },
  leaderboardText: {
    color: "#fff",
    fontSize: 14,
  },
  missionContainer: {
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#ffeb3b",
    borderRadius: 10,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  missionText: {
    fontSize: 14,
    marginTop: 5,
  },
  missionButton: {
    marginTop: 10,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  missionButtonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  categoryScroll: {
    marginTop: 10,
    paddingHorizontal: 10,
    flexGrow: 0, // 👈 스크롤뷰가 불필요하게 커지는 걸 방지
  },
  categoryButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  rewardsContainer: {
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#ffc107",
    borderRadius: 10,
  },
  rewardsText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rewardsButton: {
    marginTop: 10,
    backgroundColor: "#ff5722",
    padding: 10,
    borderRadius: 5,
  },
  rewardsButtonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  noteContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  noteButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  noteText: {
    color: "#fff",
    fontSize: 14,
  },
});
