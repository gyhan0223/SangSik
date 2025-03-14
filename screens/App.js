import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import QuizScreen from "./QuizScreen";
import ProfileScreen from "./ProfileScreen";
import { Ionicons } from "@expo/vector-icons"; // 아이콘 사용

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "홈") iconName = "home-outline";
            else if (route.name === "퀴즈") iconName = "help-circle-outline";
            else if (route.name === "프로필") iconName = "person-outline";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#4CAF50",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="퀴즈" component={QuizScreen} />
        <Tab.Screen name="프로필" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
