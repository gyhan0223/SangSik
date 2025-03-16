import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import styles from "../styles";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [carrier, setCarrier] = useState("SKT");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [slideAnim] = useState(new Animated.Value(0));
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const handleNextStep = () => {
    Animated.timing(slideAnim, {
      toValue: -100 * step,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setStep(step + 1);
      slideAnim.setValue(-100 * step);
    });
  };

  const handleSignUp = () => {
    navigation.navigate("Main");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>회원가입</Text>
        <Animated.View
          style={[
            styles.formContainer,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          {step === 1 && (
            <View style={styles.stepContainer}>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.pickerButton}
                  onPress={() => setIsPickerVisible(!isPickerVisible)}
                >
                  <Text style={styles.pickerText}>{carrier}</Text>
                </TouchableOpacity>

                {isPickerVisible && (
                  <Picker
                    selectedValue={carrier}
                    style={styles.picker}
                    onValueChange={(itemValue) => {
                      setCarrier(itemValue);
                      setIsPickerVisible(false); // 선택 후 닫기
                    }}
                  >
                    <Picker.Item label="SKT" value="SKT" />
                    <Picker.Item label="KT" value="KT" />
                    <Picker.Item label="LG U+" value="LG U+" />
                  </Picker>
                )}

                <TextInput
                  style={[styles.input, styles.phoneInput]}
                  placeholder="전화번호 입력"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={handleNextStep}
                disabled={!phoneNumber}
              >
                <Text style={styles.buttonText}>인증번호 받기</Text>
              </TouchableOpacity>
            </View>
          )}
          {step === 2 && (
            <View style={styles.stepContainer}>
              <TextInput
                style={styles.input}
                placeholder="인증번호 입력"
                keyboardType="numeric"
                value={verificationCode}
                onChangeText={setVerificationCode}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={handleNextStep}
                disabled={!verificationCode}
              >
                <Text style={styles.buttonText}>다음</Text>
              </TouchableOpacity>
            </View>
          )}
          {step === 3 && (
            <View style={styles.stepContainer}>
              <TextInput
                style={styles.input}
                placeholder="아이디 입력"
                value={id}
                onChangeText={setId}
              />
              <TextInput
                style={styles.input}
                placeholder="비밀번호 입력"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}
                disabled={!id || !password}
              >
                <Text style={styles.buttonText}>회원가입 완료</Text>
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
