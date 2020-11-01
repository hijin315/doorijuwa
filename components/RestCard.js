import React,{useState,useEffect} from 'react';
import {ImageBackground,View,Text,StyleSheet,TouchableOpacity} from "react-native";


//App.js에서 title값을 넘겨줄 계획입니다.
//그럼 category 컴포넌트에선 값을 받아 표시해주면 됩니다.
const RestCard = ({img,tag,name,menu,navigation,addr}) => {
    addr = addr.substr(0, 3);
    return (
             <View style={styles.restInfo}>
                      <ImageBackground source={{uri:img}} resizeMode="cover" style={styles.restImage} >
                      </ImageBackground>
                      <View style={styles.restSubInfo}>
                        { ""+tag!="undefined" && 
                          <Text numberOfLines={1} style={styles.resttag}>{"# "+tag}</Text>
                        }
                          <Text style={styles.restname} numberOfLines={1}>{name}</Text>
                          <Text style={styles.restmainmenu}>{addr} 👉 " {menu} "</Text>
                          <View style={styles.btnContainer}>
                            <TouchableOpacity>
                              <View style={styles.btn1}>
                                  <Text style={styles.text}>찜하기</Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ ()=> navigation.navigate("Restaurant",{addr:addr, name: name, menu:menu, tag:tag})}>
                              <View style={styles.btn2}>
                                <Text style={styles.text}>자세히 보러가기</Text>
                              </View>
                            </TouchableOpacity>
                        </View>
                      </View>
              </View>

    )
}
export default RestCard;
const styles = StyleSheet.create({
    resttag:{
        marginTop:6,
        fontSize:13,
        fontWeight:'bold',
        color:'#E68797'
      },
      restname:{
        fontSize:20,
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
      btn1:{
        alignItems:'center',
        justifyContent:'center',
        height:34,
        width:55,
        backgroundColor:'#E68797',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:10,
      },
      btn2:{
        alignItems:'center',
        justifyContent:'center',
        height:34,
        marginLeft:10,
        width:110,
        backgroundColor:'#E68797',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:10,
      },
      restInfo:{
        borderWidth:1,
        height:110,
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
        borderColor:'#E68797',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding:10,
      },
      restSubInfo:{
        flex:1
      }
}); 