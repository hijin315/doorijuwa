import React,{useState,useEffect} from "react";
import {SafeAreaView, ImageBackground,ActivityIndicator, Text, StyleSheet, Platform, View, ScrollView ,FlatList} from 'react-native';

const movieURL = "http://store.naver.com/sogum/api/businesses?start=2&display=3&query=관악구+맛집&sortingOrder=reviewCount";


// 페이지 이동 객체 데이터를 전달해줍니다
export default function Mypage() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch(movieURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator/>
      ) : ( 
        <View>
          <ImageBackground source={{uri:"http://ldb.phinf.naver.net/20160412_108/14604362228032gJlV_JPEG/11849078_03.jpg"}} resizeMode="cover" style={styles.restImage} >
          </ImageBackground>
          <Text style={styles.title}>title</Text>
          <View style={{borderBottomWidth :1, marginBottom : 12}}></View>
          <FlatList 
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ paddingBottom: 10 }}>
                <Text style={styles.movieText}>
                  {item.name},
                  {item.category}
                </Text>
              </View>
            )}
          />
          <Text style={styles.description}>ddd</Text>
          </View>
        )}
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      marginTop:48
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
      height:130
    }
  });
