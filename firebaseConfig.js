import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBwLCtHOAJdwEdhVbwicVVTN2OWxdMqtqU",
    authDomain: "doorijuwa.firebaseapp.com",
    databaseURL: "https://doorijuwa.firebaseio.com",
    projectId: "doorijuwa",
    storageBucket: "doorijuwa.appspot.com",
    messagingSenderId: "1085540564906",
    appId: "1:1085540564906:web:11b4b1a6c10df82b06b5d3",
    measurementId: "G-Z0W0VC8KHT"
};

// 파이어베이스 오류가 있을경우를 방지
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()