import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // 🔥 추가

export default function ProfileScreen() {
  const navigation = useNavigation(); // 🔥 네비게이션 객체 가져오기

  const [nickname, setNickname] = useState("사용자123");
  const [email, setEmail] = useState("user@example.com");
  const [points, setPoints] = useState(150);
  const [achievements, setAchievements] = useState(["퀴즈 마스터", "상식왕"]);

  const handleLogout = () => {
    Alert.alert("로그아웃", "정말 로그아웃 하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "확인",
        onPress: () => {
          console.log("로그아웃");
          navigation.replace("Login"); // 🔥 로그인 화면으로 이동 (뒤로가기 불가능)
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* 🔥 프로필 섹션 */}
      <View style={styles.profileSection}>
        <Image style={styles.avatar} />
        <Text style={styles.nickname}>{nickname}</Text>
        <Text style={styles.email}>{email}</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>프로필 수정</Text>
        </TouchableOpacity>
      </View>

      {/* 🔥 포인트 & 업적 */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>🏆 보유 포인트: {points}점</Text>
        <Text style={styles.infoText}>
          🎖️ 획득 업적: {achievements.join(", ")}
        </Text>
      </View>

      {/* 🔥 내 퀴즈 통계 */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>📊 내 퀴즈 통계</Text>
        <Text style={styles.statsText}>✔️ 평균 정답률: 85%</Text>
        <Text style={styles.statsText}>✔️ 푼 문제 수: 120개</Text>
      </View>

      {/* 🔥 로그아웃 버튼 */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  profileSection: { alignItems: "center", marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  nickname: { fontSize: 20, fontWeight: "bold" },
  email: { fontSize: 14, color: "gray" },
  editButton: {
    marginTop: 10,
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  editButtonText: { color: "#fff", fontSize: 14 },
  infoContainer: {
    width: "100%",
    padding: 15,
    backgroundColor: "#ffeb3b",
    borderRadius: 10,
    marginBottom: 15,
  },
  infoText: { fontSize: 16, fontWeight: "bold" },
  statsContainer: {
    width: "100%",
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  statsTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  statsText: { fontSize: 14, marginBottom: 5 },
  logoutButton: {
    backgroundColor: "#d32f2f",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  logoutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
