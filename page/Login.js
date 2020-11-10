import React, { useEffect, useState } from "react";
import {
    NavigationActions,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  navigate,
  navigation
} from "react-native";

const Login = ({navigation}) => {


    return (<View style={styles.container}>
        <View style={{height:120, backgroundColor:"#E68797"}}>
            <Text style={{fontSize:26, marginTop:65, fontWeight:'bold', margin:20, color:'#fff'}}>찜 목록</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
              <Text style={{height:200}}>💕 찜한 목록</Text>
              <View style={{borderBottomWidth :1, borderColor:'#E68797'}}></View>
            </TouchableOpacity>
        <View style={styles.container,{marginTop:15}}>
      
        </View>
    </View>)
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
})