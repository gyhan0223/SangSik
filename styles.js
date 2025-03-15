import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa", // 밝은 배경색
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#4CAF50",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
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
  timerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    position: "absolute",
    right: 10, // questionContainer 안에서 우측 정렬
    top: 10, // questionContainer 안에서 상단 정렬
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  selectedButton: {
    backgroundColor: "#4CAF50",
  },
  startButton: {
    backgroundColor: "#008CBA",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  startButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
