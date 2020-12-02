import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAlml7o0Sx2HcyPyHvcWKFUQfS2PuXgbMM",
  authDomain: "doorijua-fadbb.firebaseapp.com",
  databaseURL: "https://doorijua-fadbb.firebaseio.com",
  projectId: "doorijua-fadbb",
  storageBucket: "doorijua-fadbb.appspot.com",
  messagingSenderId: "572709791233",
  appId: "1:572709791233:web:7a345033430ad70b754200",
  measurementId: "G-X9FYJ8DELE"
};

// 파이어베이스 오류가 있을경우를 방지
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()