import React,{useState,useEffect} from 'react';
import {ImageBackground,View,Text,StyleSheet,TouchableOpacity} from "react-native";


//App.js에서 title값을 넘겨줄 계획입니다.
//그럼 category 컴포넌트에선 값을 받아 표시해주면 됩니다.
const RestCard2 = ({img,name,menu,navigation}) => {
    return (
             <View style={styles.restInfo}>
                      <ImageBackground source={{uri:img}} resizeMode="cover" style={styles.restImage} >
                      </ImageBackground>
                      <View style={styles.restSubInfo}>
                          <Text style={styles.restname} numberOfLines={1}>{name}</Text>
                          <Text style={styles.restmainmenu}>" {menu} "</Text>
                          <View style={styles.btnContainer}>
                            <TouchableOpacity onPress={ ()=> navigation.navigate("Restaurant2", {name: name, menu:menu,  img:img})}>
                              <View style={styles.btn}>
                                <Text style={styles.text}>보러가기 ▶</Text>
                              </View>
                            </TouchableOpacity>
                        </View>
                      </View>
              </View>

    )
}
export default RestCard2;
const styles = StyleSheet.create({
    restname:{
        fontSize:16,
        fontWeight:'bold'
      },
      restmainmenu:{
        fontSize:13,
        padding:2
      },
      restImage:{
        marginTop:20,
        width:80,
        height:80,
        marginRight:8,
        marginBottom:23
      },
      btnContainer:{
        marginBottom:5,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
      },
      btn:{
        alignItems:'center',
        justifyContent:'center',
        height:34,
        marginLeft:10,
      },
      restInfo:{
        padding:5,
        marginLeft:10,
        marginTop:5,
        width:220,
        borderWidth:2,
        height:100,
        borderRadius:10,
        borderColor:'#E68797',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      restSubInfo:{
        alignItems:'center',
        flex:1
      }
});