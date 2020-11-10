import React,{useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View,ScrollView } from 'react-native';
//component 폴더에 만든 ButtonCard 컴포넌트를 불러옵니다.
import RestCard from "../components/RestCard"
import Category from "../components/Category"
import category from "../category.json"
import { MaterialCommunityIcons } from "@expo/vector-icons";



export default function List({navigation,route}) {
  const { area } = route.params;
  const restaurantUrl = "https://map.naver.com/v5/api/search?caller=pcweb&query="+area+"+%20맛집&displayCount=20&lang=ko";

   //data.json 데이터 구조를 보면 딕셔너리 리스트 복합 구조입니다.
  //question 키값에 문제들이 리스트 형태로 존재합니다.
  //그래서 상태에 문제 데이터를 넣어 초기화 했습니다.
  const [isLoading, setLoading] = useState(true);
  const [state, setState] = useState([])
  const [data, setData] = useState([]);

  //category.json 데이터 역시 data란 키에 물려있는 리스트 데이터이므로
  //곧바로 categoryState 상태를 데이터와 함께 초기화 했습니다.
  const [categoryState,setCategoryState] = useState([])
  //선택한 카테고리에 맞는 문제 데이터를 저장하고 관리하는 상태입니다.

  useEffect(()=>{
    navigation.setOptions({
        title:' '
        })
    setCategoryState(category.data)
    fetch(restaurantUrl)
      .then((response) => response.json())
      .then((json) => {
        setData(json.result.place.list);
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
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
            color="white"
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
                <ScrollView style={styles.restWrap}>
                <FlatList 
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View>
                        {item.category !="카페,디저트" && item.category != "카페" && item.category != "베이커리" && item.menuInfo != null && 
                        <View style={{ paddingBottom: 10 }}>
                                <RestCard navigation={navigation} tag={item.microReview} name={item.name} menu={item.menuInfo} img={item.thumUrl} addr={item.address}/>
                        </View>
                        }
                        </View>
                    )}
                  />
                </ScrollView>
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