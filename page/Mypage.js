import React,{useState,useEffect} from "react";
import {SafeAreaView, ImageBackground,ActivityIndicator, Text, StyleSheet, Platform, View, ScrollView ,FlatList} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

// 페이지 이동 객체 데이터를 전달해줍니다
export default function Mypage({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(()=>{
     setLoading(false);
  },[]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator/>
      ) : ( 
        <View style={{flex:1}}>
        <View style={{marginTop:35}}> 
          <Text style={{fontSize:27, marginTop:30, margin:20, fontWeight:'bold', alignItems:'flex-start', color:'#fff'}}>마이페이지</Text>
          <View style={{alignItems:'center'}}>
            <ImageBackground imageStyle = { {  borderRadius : 35  } } source={{uri:"https://firebasestorage.googleapis.com/v0/b/durijuwa-33187.appspot.com/o/KakaoTalk_20201015_061156192.jpg?alt=media&token=6784683a-3bf2-49df-a020-eb386d587535"}} resizeMode="cover" style={styles.restImage} >
            </ImageBackground> 
            <Text style={{}}>편집</Text>
          </View>
          <View style={{flexDirection:"row", justifyContent:'center',marginBottom:15}}>
            <Text style={{fontSize:18,fontWeight:'bold', color:'#353535'}}>오희진</Text>
            <Text> 님, 반갑습니다!!</Text>
          </View>
          </View>
          <View style={{backgroundColor:'#fff', flex:1}}>
            <TouchableOpacity onPress={() => navigation.navigate("ChooseArea", { datas: data })}>
              <Text style={styles.listcontainer}>🏠 우리동네 설정하기</Text>
              <View style={{borderBottomWidth :1, borderColor:'#E68797'}}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Like", { datas: data })}>
              <Text style={styles.listcontainer}>💕 찜한 목록</Text>
              <View style={{borderBottomWidth :1, borderColor:'#E68797'}}></View>
            </TouchableOpacity>
            <View>
              <Text style={styles.listcontainer}>💬 1:1 문의하기</Text>
              <View style={{borderBottomWidth :1, borderColor:'#E68797'}}></View>
            </View>
            <View>
              <Text style={styles.listcontainer}>🔧 설정</Text>
              <View style={{borderBottomWidth :1, borderColor:'#E68797'}}></View>
            </View>
            <View>
              <Text style={styles.listcontainer}>📃 어플 정보</Text>
              <View style={{borderBottomWidth :1, borderColor:'#E68797'}}></View>
            </View>
          </View>
          </View>
        )}
      </View>
  );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor:'#E68797',
      flex: 1
    },
    movieText:{
      fontSize: 26,
      fontWeight : "200"      
    },
    title: {
      fontSize : 32,
      fontWeight : "bold"
    },
    description: {
      textAlign:"center",
      marginBottom: 18,
      fontWeight : "200",
      color : "green"
    },
    restImage:{
      width: 130,
      height:130,
      margin:13
    },
    listcontainer:{
      fontSize: 17, 
      marginBottom: 18, 
      marginTop: 18, 
      marginLeft: 10
    }
  });
