// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApqPxzFPYERn1pGm35e-l8ibfhKfjGk_s",
  authDomain: "sangsik-1cd45.firebaseapp.com",
  projectId: "sangsik-1cd45",
  storageBucket: "sangsik-1cd45.firebasestorage.app",
  messagingSenderId: "780184333884",
  appId: "1:780184333884:web:25e3fbcfc4348847555d39",
  measurementId: "G-QK7NC16QTC",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase Auth 가져오기
const auth = getAuth(app);

export { auth };
