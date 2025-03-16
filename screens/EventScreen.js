import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function EventScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>이벤트 응모</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>응모하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
