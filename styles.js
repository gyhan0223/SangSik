import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // 밝은 배경색
    paddingTop: StatusBar.currentHeight || 20, // ✅ StatusBar 침범 방지
    paddingHorizontal: 20,
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
    flexGrow: 0, // 👈 스크롤뷰가 불필요하게 커지는 걸 방지
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
    right: 10, // 문제 컨테이너 내부 우측 상단
    top: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  selectedButton: {
    backgroundColor: "#388E3C", // 선택된 버튼 더 진한 초록색
    borderWidth: 2,
    borderColor: "#1B5E20", // 테두리 추가
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
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
  testButton: {
    backgroundColor: "#FF9800", // 주황색 버튼
    padding: 15,
    borderRadius: 5,
    marginTop: 10, // 시작 버튼과 간격 추가
    alignItems: "center",
  },

  testButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    color: "black",
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50, // ✅ 동적 조정
    left: 15,
    zIndex: 10, // 모든 요소 위에 배치
    padding: 10,
    borderRadius: 5,
  },

  backButtonText: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
  difficultyBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  difficultyText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  formContainer: {
    width: "100%",
  },
  stepContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  pickerContainer: {
    width: 90, // ✅ 통신사 드롭다운 크기 조정
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  pickerButton: {
    width: 90, // ✅ 통신사 선택 영역을 버튼 크기에 맞춤
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  picker: {
    width: "100%",
    height: 150, // 드롭다운 높이 조정
    position: "absolute",
    top: 50, // 버튼 아래에 위치
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  pickerText: {
    fontSize: 16,
    color: "#333",
  },
  phoneInput: {
    flex: 1, // ✅ 전화번호 입력란이 가득 차도록 설정
    marginLeft: 10,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30, // ✅ 여백 추가
    marginLeft: 10, // ✅ 왼쪽 여백 추가
  },
  content: {
    flex: 1,
    justifyContent: "center", // ✅ 화면 중앙 정렬
    alignItems: "center",
    paddingHorizontal: 20,
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

export default styles;
