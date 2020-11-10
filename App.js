import React,{useState} from 'react';

//메인에 세팅할 네비게이션 도구들을 가져옵니다.
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
//expo install expo-font 로 설치
import * as Font from "expo-font";
//expo install @expo/vector-icons 로 설치
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { StatusBar } from 'expo-status-bar';
import Login from './page/Login';
import Main from './page/Main';
import List from './page/List';
import Mypage from './page/Mypage';

export default function App() {

  //로딩중에 대한 상태 관리 === 처음엔 당연히 로딩중이니 값이 true 겠죠?
  const [isLoading,setIsLoading] = useState(true)
  const Stack = createStackNavigator();
  //배열에 담긴 폰트들을 차례대로 하나씩 앱에 적재 시키는 함수
  const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

  const funcStart = () => {
    console.log("시작")
    //아이온 아이콘 폰트와 폰트 어썸 폰트 모두 폰트 캐시에 등록
    cacheFonts([Ionicons.font, FontAwesome.font]);
  }

  const funcError = () => {
    console.log("에러")
  }

  const funcFinish = () => {
    console.log("완료")
    //앱 로딩이 완료되면 로딩 상태를 false로 변경하여, 
    //더이상 로딩 상태가 아니게 바꿉니다
    setIsLoading(false)
  }
  console.disableYellowBox = true;
  function HomeTabs() {
    return (
      <>
        <StackNavigator/>
      </>
    );
  }
  //return <Loading/>
  // return <Question/>
  return isLoading ? <AppLoading startAsync={funcStart} onError={funcError} onFinish={funcFinish} /> : (
  // <>
  //   <NavigationContainer>
  //     <StatusBar style="light" />
  //     <StackNavigator/>
  //  </NavigationContainer>
  // </>
//  <Login/>
  <>
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerStyle: {
            backgroundColor: "black",
            borderBottomColor: "black",
            shadowColor: "black",
            height:0
        },
        headerTintColor: "#FFFFFF",
        headerBackTitleVisible: false
         }}   >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  )
}