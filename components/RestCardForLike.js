import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity,Alert, RefreshControl } from "react-native";

//파이어베이스를 사용할 땐 항상 설정 파일을 임포트하기
import {firebase_db} from "../firebaseConfig"
//사용자 유니크 아이디 생성 도구
import Constants from 'expo-constants';

//App.js에서 title값을 넘겨줄 계획입니다.
//그럼 category 컴포넌트에선 값을 받아 표시해주면 됩니다.
const RestCardForLike = ({ name, imageUrl, navigation, data, address, menu}) => {
  let addr2 = ""

  if(address != null){
    addr2 = address.split(' ')[2]
  }
  const doLike = (data) => {
    //d는 onPress로부터 넘겨받은 data를 함수 안에서 새롭게 부른 이름입니다

    const user_id = Constants.installationId;   
    const new_like = {
      //spread 연산과 객체 리터럴 문법을 오랜만에 한번 써봅니다... 
      //기억안나시는 분들은 1주차 spread 연산자 부분을 복습!!
      ...data,
      user_id      
      }
    firebase_db.ref('/likes/'+user_id+'/'+ data.id).remove();
    Alert.alert("삭제 완료!");
}

  
  return (
    <View style={styles.restInfo}>
      <Image source={ ""+imageUrl != "undefined"
        ? {uri:imageUrl}
        : require('../images/noImage.jpg')} resizeMode="cover" style={styles.restImage} >
      </Image>
      <View style={styles.restSubInfo}>
        {"" + data.microReview != "undefined" &&
          <Text numberOfLines={1} style={styles.resttag}>{"# " + data.microReview}</Text>
        }
        <Text style={styles.restname} numberOfLines={1}>{name}</Text>
        <Text style={styles.restmainmenu}>{addr2} 👉 " {data.category} "</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.zzimButton} onPress={()=>doLike(data)}> 
            <View style={styles.btn1}>
              <Text style={styles.text}>삭제</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Restaurant2", { name2 : data.name })}>
            <View style={styles.btn2}>
              <Text style={styles.text}>자세히 보러가기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}
export default RestCardForLike;
const styles = StyleSheet.create({
  resttag: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#E68797'
  },
  restname: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  restmainmenu: {

    fontSize: 13,
    padding: 2
  },
  restImage: {
    marginTop: 20,
    width: 80,
    height: 80,
    marginRight: 8,
    marginBottom: 23
  },
  btnContainer: {
    marginBottom: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  btn1: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
    width: 55,
    backgroundColor: '#E68797',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },
  btn2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
    marginLeft: 10,
    width: 110,
    backgroundColor: '#E68797',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },
  restInfo: {
    borderWidth: 1,
    height: 110,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderColor: '#E68797',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  restSubInfo: {
    flex: 1
  }
});