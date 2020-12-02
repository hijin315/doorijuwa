import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert
  } from "react-native";
  import * as firebase from "firebase";
  import {firebaseConfig} from "../firebaseConfig"


const Login = ({navigation}) => {
    const [loginID, setLoginID] = React.useState();
    const [loginPW, setloginPW] = React.useState();

    return (<View style={styles.container}>
        <View style={styles.container2}>
          <ImageBackground source={{uri:'https://firebasestorage.googleapis.com/v0/b/durijuwa-33187.appspot.com/o/logo%2F%EA%B7%B8%EB%A6%BC04.png?alt=media&token=9409d120-c13e-4b31-ab62-fbfb320e6cb9'}} resizeMode="cover" style={styles.logo} >
          </ImageBackground>
        </View>
        <View style={{ padding: 20, marginTop: 50, flex:1}}>
      <Text style={{textAlignVertical:'center', fontSize:25}}>시작하려면 로그인하세요!🍴</Text>
      
      <Text style={{ marginTop: 20, fontSize:18, color:'#808080' }}>이메일 주소를 입력해주세요.</Text>
      <View style={{borderRadius:5,borderWidth:1,marginTop:15}}>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        autoFocus
        autoCompleteType="name"
        keyboardType="ascii-capable"
        textContentType="telephoneNumber"
        onChangeText={(loginID) => setLoginID(loginID)}
      
      />
      </View>
      <Text style={{fontSize:18, color:'#808080', marginTop:20}}> 비밀번호를 입력해주세요.</Text>
      <View style={{borderRadius:5,borderWidth:1,marginTop:15}}>
      <TextInput
        editable={!!loginID}
        secureTextEntry={true} 
        style={{ marginVertical: 10, fontSize: 17 }}
        textContentType="password"
        onChangeText={(loginPW) => setloginPW(loginPW)}
      />
      </View>
      <Button
        title="로그인"
        disabled={!loginPW}
        color='#808080'
        onPress={async () => {
                firebase
                .auth()
                .signInWithEmailAndPassword(loginID, loginPW)
                .then(user => {
                 //once we are logged in , we move to the home screen
                 let uid = user.uid
                 console.log(uid)
                 navigation.navigate("Main", { user })
                 
                })
                .catch(err => {
                    const message = err.message;
                    Alert.alert(message)
                });
              
          }
        }
        />
        <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
          <Button
          title="정보찾기"
          color='#808080'
          onPress={async () => {
                  firebase
                  .auth()
                  .signInWithEmailAndPassword(loginID, loginPW)
                  .then(user => {
                  //once we are logged in , we move to the home screen
                  navigation.navigate("Main", { user })
                  console
                  })
                  .catch(err => {
                Alert.alert("이메일과 비밀번호를 확인하세요!")
                  });
                
            }
          }
          />
          <Button
          title="회원가입"
          color='#808080'
          onPress={() => navigation.navigate("Join")}
                
          />
      </View>
    </View>
    </View>)
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    container2:{
        alignItems:'center',
        height:220,
        backgroundColor:'#E68797'
      },
      logo:{
        marginTop:50,
        width:170,
        height:170
      }  
})