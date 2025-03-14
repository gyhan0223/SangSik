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

  // 카테고리 목록
  const categories = ["과학", "역사", "스포츠", "음악", "영화", "기술", "문학"];

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>홈</Text>
        <Text style={styles.headerPoints}>내 포인트: {points}점</Text>
      </View>

      {/* 카테고리 선택 */}
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
    paddingVertical: 8, // 줄여서 버튼 크기 조정
    paddingHorizontal: 15, // 좌우 공간 적절히 유지
    borderRadius: 15, // 둥근 정도 조정
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
