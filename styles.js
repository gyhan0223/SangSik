import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa", // 밝은 배경색
  },
  header: {
    height: 100,
    justifyContent: "flex-end", // 아래쪽 정렬
    alignItems: "center",
    backgroundColor: "#4CAF50", // 초록색 헤더
    paddingBottom: 10, // 텍스트를 살짝 위로 올림
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  myPoints: {
    position: "absolute", // 절대 위치 설정
    bottom: 20, // 아래쪽 여백
    right: 20, // 오른쪽 여백
    paddingHorizontal: 20, // 가로 패딩 추가
    borderRadius: 10,
    alignItems: "flex-end",
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  questionText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  questionCorrectRate: {
    position: "absolute", // 절대 위치 설정
    bottom: 20, // 아래쪽 여백
    right: 20, // 오른쪽 여백
    paddingVertical: 15,
    paddingHorizontal: 20, // 가로 패딩 추가
    borderRadius: 10,
    alignItems: "center",
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  optionButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  optionText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
