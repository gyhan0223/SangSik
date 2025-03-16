import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Welcome"); // 1.5~2초 후 Welcome 화면으로 이동
    }, 1800);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>당신의 상식을 채워보세요</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    position: "absolute",
    top: "40%", // 화면 중간보다 약간 위
  },
});

export default SplashScreen;
