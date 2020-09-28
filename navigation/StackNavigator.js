import React from 'react';
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from '@react-navigation/stack';

//페이지로 만든 컴포넌트들을 불러옵니다
import Main from '../page/Main'
import List from '../page/List';
import Mypage from '../page/Mypage';
import Choose from '../page/Choose';
import TabNavigator from '../navigation/TabNavigator';
import Restaurant from '../page/Restaurant';
import Restaurant2 from '../page/Restaurant2';



//스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용합니다
//그래서 이렇게 항상 상단에 선언하고 시작하는게 규칙입니다!
const Stack = createStackNavigator();


const StackNavigator = ({navigation,route}) =>{
    return (

        //책갈피 기능을 하는 네비게이터 엘리먼트를 선언합니다.
        //이는 위에서 가져온 Stack 객체(여러 기능이 담겨 있는 객체)에서 꺼내 사용하는 겁니다
        //내부엔 화면 상단 헤더 부분의 스타일을 변경할 수 있는 옵션들이 담겨 있습니다.
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
            }}   
        >
            {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣습니다. 이 자체로 이제 페이지 기능을 합니다*/}

            {/* 메인페이지와 푼 문제들을 확인하는 히스토리 페이지가 담겨 있는 탭 페이지, 즉 탭 네비게이터를 넣습니다*/}
            <Stack.Screen name="TabNavigator" component={TabNavigator}/>
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="List" component={List}/>
            <Stack.Screen name="Mypage" component={Mypage}/>
            <Stack.Screen name="Choose" component={Choose}/>
            <Stack.Screen name="Restaurant" component={Restaurant}/>
            <Stack.Screen name="Restaurant2" component={Restaurant2}/>
         

        </Stack.Navigator>
    )
}

export default StackNavigator;