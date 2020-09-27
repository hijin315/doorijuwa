import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";

//App.js에서 title값을 넘겨줄 계획입니다.
//그럼 category 컴포넌트에선 값을 받아 표시해주면 됩니다.
const Category = ({title,selectCategory}) => {
    return (
        <TouchableOpacity>
        <View style={styles.category}><Text style={styles.categoryTitle}>{title}</Text></View>
        </TouchableOpacity >
    )
}
export default Category;


const styles = StyleSheet.create({
    category:{
        width:90,
        height:35,
        marginRight:5,
        marginLeft:13,
        borderRadius:5,
        borderColor:'#896AB7',
        borderWidth:1.3,
        borderStyle:'solid'
      },    
      categoryTitle: {
        color:'#896AB7',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:8
      }
});