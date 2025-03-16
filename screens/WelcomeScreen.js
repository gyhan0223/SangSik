import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>상식앱은 처음이신가요?</Text>
      <Text style={styles.subtitle}>계정 만드는 것부터 도와드릴게요!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText}>시작하기</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>이미 계정이 있으신가요?</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    marginTop: 12,
    fontSize: 14,
    color: "#888",
  },
});

export default WelcomeScreen;
