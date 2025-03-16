import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen() {
  const navigation = useNavigation();
  const [nickname, setNickname] = useState("사용자123");
  const [email, setEmail] = useState("user@example.com");

  const handleSave = () => {
    // TODO: 저장 로직 추가
    navigation.goBack(); // ✅ 프로필 화면으로 돌아가기
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>프로필 수정</Text>
      <TextInput
        style={styles.input}
        value={nickname}
        onChangeText={setNickname}
        placeholder="닉네임"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="이메일"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>저장</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
