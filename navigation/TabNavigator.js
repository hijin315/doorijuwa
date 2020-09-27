import React,{useEffect} from "react";


import {Platform} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../page/Main';
import Choose from '../page/Choose';
import Mypage from '../page/Mypage';
import {Ionicons} from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const TabNavigator = ({navigation,route}) =>{
  
    useEffect(()=>{
        navigation.setOptions({
            title:" "
        })
    },[])


    return (
    <Tabs.Navigator
        screenOptions={({route}) => ({
            tabBarIcon:({focused}) =>{

              //현재 이 앱을 구동하고 있는 디바이스가 뭔지 Platform.OS 을 통해 확인 할 수 있음
                let iconName = Platform.OS === "ios" ? "ios-" : "md-"
              
                if(route.name==="Main"){
                  iconName += "home"
                }
                else if (route.name === "Choose") {
                    iconName += "heart";
                } 
                else if (route.name === "Mypage") {
                    iconName += "contact";
                  }
                 
                  return (
                    <Ionicons
                      name={iconName}
                      color={focused ? "#E68797" : "grey"}
                      size={26}
                    />
                  );
            }
        })}
        tabBarOptions={{
            showLabel: false,
            // 이름을 보여줄지 말지를 정하는 코드
            style: {
              backgroundColor: "white",
              borderTopColor: "#E68797",
              borderTopWidth:1.3,
              height:85
            }
        }}
    >
        <Tabs.Screen name="Main" component={Main}/>
        <Tabs.Screen name ="Choose" component={Choose}/>
        <Tabs.Screen name="Mypage" component={Mypage}/>
        
    </Tabs.Navigator>)
}

export default TabNavigator