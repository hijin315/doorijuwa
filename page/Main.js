import React from "react";
import { Text,StyleSheet , View} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";



// 페이지 이동 객체 데이터를 전달해줍니다
export default Main = () => {
  

  return (
    <View style={styles.container}>
      <TouchableOpacity>
                <View>
                 <Text>바뀌나용?</Text>
                </View>
            </TouchableOpacity>
    </View>
  );
 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    category:{
      width:100,
      height:30,
      marginTop:30,
      marginRight:5,
      marginLeft:13,
      borderRadius:5,
      borderColor:'#fff',
      borderWidth:1,
      borderStyle:'solid'
    },
    categoryMain:{
      width:100,
      height:30,
      marginTop:30,
      marginRight:5,
      marginLeft:13,
      borderRadius:5,
      borderColor:'hotpink',
      borderWidth:1,
      borderStyle:'solid'
    },
    categoryMainTitle:{
      color:'hotpink',
      textAlign:'center',
      marginTop:6
    },
    categoryTitle: {
      color:'#fff',
      textAlign:'center',
      marginTop:6
    },
    vScrollView: {
      marginTop:20,
      //flexDirection 속성이 row면 우측으로 나열, column이면 수직으로 나열
      flexDirection: 'row',
      //flex:"wrap" 속성의 경우 박스들이 화면을 넘칠 때 자동으로 밑으로 떨어져 내려가 배치됨
      flexWrap:"wrap"
    },
    banner: {
      position:"absolute",
      bottom:0,
      width:"100%"
    }
  });