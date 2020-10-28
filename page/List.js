import React,{useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View,ScrollView, refreshing, LogBox } from 'react-native';
//component 폴더에 만든 ButtonCard 컴포넌트를 불러옵니다.
import RestCard from "../components/RestCard"
import Category from "../components/Category"
import category from "../category.json"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {firebase_db} from "../firebaseConfig"
import axios from "axios"

export default function List({navigation,route}) {
  const { area } = route.params;
  // const movieURL = "http://store.naver.com/sogum/api/businesses?start=1&display=20&query="+area+"+맛집&sortingOrder=reviewCount";
   
  const [isLoading, setLoading] = useState(true);
  const [state, setState] = useState([])
  const [data, setData] = useState([]);
  const [listState, setListState] = useState([])
  //category.json 데이터 역시 data란 키에 물려있는 리스트 데이터이므로
  //곧바로 categoryState 상태를 데이터와 함께 초기화 했습니다.
  const [categoryState,setCategoryState] = useState([])

  //선택한 카테고리에 맞는 문제 데이터를 저장하고 관리하는 상태입니다.
  
 
  useEffect(()=>{
    navigation.setOptions({
        title:'목록'
        })
        firebase_db.ref('/data/'+area).once('value').then((snapshot) => {
          console.log("파이어베이스에서 데이터 가져왔습니다!!")
          let list = snapshot.val(); 
          setCategoryState(category.data)
          setListState(list)
          setLoading(false)
        });
    },[]);
    
    
  return (
    <View style={styles.container2}>
      {isLoading ? (
        <ActivityIndicator/>
      ) : ( 
    <View style={styles.container}>
       <View style={styles.areaInfo}>
           <Text style={styles.areaname}>{area}</Text>
           <View style={styles.areaweather}>
           <Text style={styles.areatemp}>20º</Text>
           <MaterialCommunityIcons
            size={40}
            name="weather-sunny"
            color="black"
          /></View>
        </View>
        <View style={styles.categoryInfo}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categoryState.map((c,i)=>{
                //컴포넌트에 함수 이름 그대로 넘겨주면 됩니다!
                return <Category key={i} title={c.title}/>
                })}
            </ScrollView>
        </View>
        <ScrollView>
                <View>
                  {listState.map((data,i)=>{
		                 //카드 버튼에서 사용해야 하므로, navigation을 건네줍니다
                    return <RestCard key={i} 
                        data={data}
                        address = {data.address}
												name={data.name} 
												imageUrl={data.imageUrl} 
												navigation={navigation}/>
                  })}
            
             </View>
        </ScrollView>
    
        
    </View>
     )}
     </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    alignItems:"center"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  areaInfo:{
    flexDirection: 'row',
    justifyContent:'space-between',
    height:120,
    backgroundColor:"#E68797",
    marginBottom:5
  },
 categoryInfo:{
    backgroundColor:"#fff",
    height:40
  },
  restWrap:{
    backgroundColor:'#fff'
  },
  areaname:{
    color:'#fff',
    fontWeight:'bold',
    flexDirection:"column",
    fontSize:20,
    borderColor:'#fff',
    borderRadius:10,
    borderWidth:1,
    marginLeft:15,
    padding:10,
    marginBottom:6,
    marginTop:70
  },
  areaweather:{
    flexDirection:'row',
    marginTop:72,
    marginRight:14
  },
  areatemp:{
    fontSize:25,
    color:'#fff',
    fontWeight:'bold',
    marginRight:10,
    marginTop:5
  }

});