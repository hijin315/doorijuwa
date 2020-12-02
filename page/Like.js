import React, { useEffect, useState } from "react";
import {View,ScrollView, Text, StyleSheet} from "react-native"
//파이어베이스를 사용할 땐 항상 설정 파일을 임포트하기
import {firebase_db} from "../firebaseConfig"
//사용자 유니크 아이디 생성 도구
import Constants from 'expo-constants';

import RestCardForLike from "../components/RestCardForLike";

const LikePage = ({navigation}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [likeState, setLikeState] = useState([]) 

    useEffect(()=>{
        const user_id = Constants.installationId; 
        navigation.addListener('focus', () => {
            
            firebase_db.ref('/users/p28DLnvzlcdt4fW9tfuBpwuk6Ow1/likes/').once('value').then((snapshot) => {
                //딕셔너리 구조로만 전달되는 데이터
                let likes = snapshot.val();
                //딕셔너리 구조를 리스트 구조로 변경하여, 실제 화면에선 반복문이 가능하게 변경
                let list_likes = Object.values(likes)
                setLikeState(list_likes)
                setIsLoading(false)
            });
       });
       
    },[])
    return isLoading ?  (<View style={styles.container}><Text>준비중...</Text></View>) 
    : (<View style={styles.container}>
        <View style={{height:120, backgroundColor:"#E68797"}}>
            <Text style={{fontSize:26, marginTop:65, fontWeight:'bold', margin:20, color:'#fff'}}>찜 목록</Text>
        </View>
        <View style={styles.container,{marginTop:15}}>
        {likeState.map((data,i)=>{
             return <RestCardForLike key={i} 
                    data={data}
                    menu = {data.menu}
                    address = {data.address}
                    name={data.name} 
                    imageUrl={data.thumUrl} 
                    navigation={navigation}/>
        })}
             
        </View>
    </View>)
}

export default LikePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
})