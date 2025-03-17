import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // 아이콘 사용

import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import QuizSetupScreen from "./screens/QuizSetupScreen";
import SplashScreen from "./screens/SplashScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import EventScreen from "./screens/EventScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const QuizStack = createStackNavigator(); // 퀴즈 전용 Stack

// ✅ 퀴즈 Stack Navigator (퀴즈 설정 → 퀴즈 화면)
function QuizNavigator() {
  return (
    <QuizStack.Navigator screenOptions={{ headerShown: false }}>
      <QuizStack.Screen name="QuizSetup" component={QuizSetupScreen} />
      <QuizStack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ gestureEnabled: false }} // 스와이프 뒤로 가기 비활성화
      />
    </QuizStack.Navigator>
  );
}

// ✅ Tab Navigator (홈, 퀴즈, 프로필)
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "홈") iconName = "home-outline";
          else if (route.name === "퀴즈") iconName = "help-circle-outline";
          else if (route.name === "이벤트") iconName = "gift-outline";
          else if (route.name === "프로필") iconName = "person-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="퀴즈" component={QuizNavigator} />
      <Tab.Screen name="이벤트" component={EventScreen} />
      <Tab.Screen name="프로필" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// ✅ Stack Navigator (로그인 → 홈)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ animation: "none" }} // SplashCreen에서 WelcomeScreen으로 넘어갈 때 애니메이션 제거
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ animation: "none" }} // SplashCreen에서 WelcomeScreen으로 넘어갈 때 애니메이션 제거
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
