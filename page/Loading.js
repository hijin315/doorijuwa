import React from "react";
import {View,Text,StyleSheet} from "react-native"

export default function Loading(){
    return (<View style={styles.readyContainer}><Text style={styles.readyText}>잠시만 기다려주세요...</Text></View>)
}

const styles = StyleSheet.create({
    //준비화면 스타일
    readyContainer: {
      flex: 1,
      backgroundColor: '#000',
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center'
    },
    readyText: {
      color:'#fff'
    }
  });