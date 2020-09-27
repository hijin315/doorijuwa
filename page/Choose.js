import React,{useState,useEffect} from "react";
import { Text,StyleSheet, View,ScrollView } from 'react-native';
import Area from "../components/Area";

import gg_area from "../gg_area.json"
import seoul_area from "../seoul_area.json"
// 페이지 이동 객체 데이터를 전달해줍니다
export default function Choose({navigation}) {

    const [state,setState] = useState([])
    const [state2,setState2] = useState([])
    useEffect(()=>{
        setState(seoul_area.data)
        setState2(gg_area.data)
    },[])
  return (
    <View style={styles.container}>
        <View style={styles.areaInfo}>
           <Text style={styles.areaname}>지역 선택</Text>
        </View>
        <ScrollView>
            <View style={styles.areacontainer}>
                    <Text style={styles.text}>서울</Text>
            </View>
            <View style={styles.vScrollView}>
                {state.map((data,i)=>{
                    return <Area key={i} navigation={navigation} area={data.area} img={data.img}/>
                  })}
            </View>
            <View style={styles.areacontainer}>
                    <Text style={styles.text}>경기</Text>
            </View>
            <View style={styles.vScrollView}>
                {state2.map((data,i)=>{
                    return <Area key={i} navigation={navigation} area={data.area}  img={data.img}/>
                  })}
            </View>
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    restcontainer:{
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
      },
      areaInfo:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:120,
        backgroundColor:"#E68797",
        marginBottom:10
      },
     categoryInfo:{
        backgroundColor:"#fff"
      },
      restWrap:{
        flex:1,
        backgroundColor:'#fff'
      },
      areaname:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:27,
        marginLeft:15,
        padding:10,
        marginTop:60,
        marginBottom:6
      },
      areaweather:{
        flexDirection:'row',
        marginTop:72,
        marginRight:14
      },
      areatemp:{
        fontSize:25,
        color:'#fff',
        fontWeight:'bold',
        marginRight:10,
        marginTop:5
      },
      text:{
        borderRadius:5,
        borderColor:'#E68797',
        borderWidth:1,
        borderStyle:'solid',
        width:100,
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        color:'#E68797'
      },
      vScrollView: {
        marginTop:20,
        //flexDirection 속성이 row면 우측으로 나열, column이면 수직으로 나열
        flexDirection: 'row',
        //flex:"wrap" 속성의 경우 박스들이 화면을 넘칠 때 자동으로 밑으로 떨어져 내려가 배치됨
        flexWrap:"wrap"
      },
      areacontainer:{
          marginTop:10,
        justifyContent:'space-around',
        flexDirection: 'row'
      }
   
  });