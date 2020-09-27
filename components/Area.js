import React from "react";
import { TouchableOpacity,ImageBackground,Text,StyleSheet,Dimensions } from "react-native"
const Area = ({area,img,navigation}) => {

    return (
        <TouchableOpacity onPress={()=>navigation.navigate("List",{area: area})}>
            <ImageBackground source={{uri:img}}  resizeMode="cover" style={styles.scrollList} >
                {/* JSX에서 속성값으로가 아닌 변수 자체에 담긴 값을 사용하려면 {}안에 변수를 둬야 합니다 */}
                <Text style={styles.scrollListHighlight}>{area}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
export default Area;


const styles = StyleSheet.create({
  
    scrollList: {
     
      margin:2,
      width:Dimensions.get("window").width / 3.1,
      height:Dimensions.get("window").height / 10
    },
    scrollListHighlight : {
      flex:1,
      fontWeight:'bold',
      textAlign:'right',
      backgroundColor: 'rgba(0,0,0,0.2)',
      color:'#fff'
        },
  });