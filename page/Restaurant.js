import React,{useState,useEffect} from "react";
import {SafeAreaView, ImageBackground,ActivityIndicator, Text, StyleSheet, Platform, View, ScrollView ,FlatList, TouchableOpacity} from 'react-native';
import { Share } from "react-native";
import {Linking} from 'react-native'

// 페이지 이동 객체 데이터를 전달해줍니다
export default function Restaurant({navigation, route}) {
    const {name} = route.params;
    const movieURL = "http://store.naver.com/sogum/api/businesses?start=1&display=1&query="+name;
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const [state, setState] = useState([])

  useEffect(()=>{
    navigation.setOptions({
        title:'상세 정보'
    })
    const { name, addr, menu, tag } = route.params;
        setState({
        addr:addr,
        name:name,
        menu:menu,
        tag:tag
        })
    fetch(movieURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  },[]);
  const doShare = () => {
    Share.share({
    message:`${state.addr} "${state.menu}" 맛집 👉 ${state.name}\n💡${state.tag}\n💡자세히보기 ▶`
    });
    }
const doCall = (i) => {
    Linking.openURL('tel:'+i)
}
const getMap = (i) => {
    Linking.openURL(i)
}
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator/>
      ) : ( 
        <View style={styles.container}>
           <FlatList 
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <View>
                <View style={{flex: 1, alignItems:"center", paddingTop:50, backgroundColor: "#E68797", justifyContent:"center"}}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.name}>" {item.name} "</Text>
                </View>
                <View style={{flex: 1, alignItems:"center"}}> 
                <ImageBackground source={{uri:item.imageSrc}} resizeMode="cover" style={styles.restImage} ></ImageBackground>
                    <View style={{alignItems:'flex-start', padding:20}}>
                        { ""+item.priceCategory!="undefined" && 
                                <Text style={styles.text}>👉 가격대 : " {item.priceCategory} "</Text>}
                        { ""+item.commonAddr!="undefined" && ""+item.addr !="undefined" &&
                                    <Text style={styles.text}>👉 주소 :  "{item.commonAddr} {item.addr} "</Text>   
                        }
                        { ""+item.options!="undefined" &&
                                <Text style={styles.text}>👉 옵션 :  "{item.options} "</Text>}
                        { ""+item.phone!="undefined" &&
                                <Text style={styles.text}>👉 번호 :  "{item.phone} "</Text>}
                         <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>getMap(item.routeUrl)}>
                                    <View style={styles.btn}>
                                        <Text style={styles.text}>길찾기</Text>
                                    </View>
                                </TouchableOpacity>
                            <TouchableOpacity onPress={()=>doCall(item.phone)}>
                                    <View style={styles.btn}>
                                        <Text style={styles.text}>전화하기</Text>
                                    </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.btn}>
                                    <Text style={styles.text}>찜하기</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>doShare()}>
                                    <View style={styles.btn}>
                                        <Text style={styles.text}>공유하기</Text>
                                    </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
              </View>
            )}
          />
       </View>
    )}
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#fff",
      height: 200
    },
 
    category:{
        padding:10,
        fontSize:15,
        color:"#4C4C4C",
        fontWeight:"bold"
    },
    name:{
      marginBottom: 10,
      fontSize: 26,
      color:"#fff",
      fontWeight : "bold",      
    },
    restImage:{
        marginTop:40,
        marginBottom:30,
        width:250,
        height:250
    },
    text:{
        padding:4,
        color:"#4C4C4C",
        fontWeight:"bold",
        fontSize:14
    },
    btnContainer:{
        marginBottom:100,
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
      btn:{
        marginTop :20,
        alignItems:'center',
        justifyContent:'center',
        height:40,
        marginLeft:10,
        width:80,
        backgroundColor:'#fff',
        borderColor:'#E68797',
        borderWidth:1,
        borderRadius:10,
      }
  });
