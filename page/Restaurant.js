import React, { useState, useEffect } from "react";
import { SafeAreaView, ImageBackground, Image, ActivityIndicator, Text, StyleSheet, Platform, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Share } from "react-native";
import { Linking } from 'react-native'

// 페이지 이동 객체 데이터를 전달해줍니다
export default function Restaurant({ navigation, route }) {
  const { datas } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [state, setState] = useState([])
  var link;

  useEffect(() => {
    navigation.setOptions({
      title: '상세 정보'
    })
    const { datas } = route.params;
    setState({
      datas: datas
    })
    setLoading(false)
  }, []);

  const doShare = () => {
    Share.share({
      message: `${datas.address} "${datas.category}" 맛집 👉 ${datas.name}\n💡${datas.imageUrl}\n💡자세히보기 ▶`
    });
  }
  const doCall = (i) => {
    Linking.openURL('tel:' + i)
  }
  const getMap = (i) => {
    Linking.openURL(i)
  }
  const goNaver = (i) => {
    link = "https://m.place.naver.com/restaurant/"+i+"/menu/list?entry=plt"
    Linking.openURL(link)
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
          <View style={styles.container}>
            <View style={{ height: 150, alignItems: "center", paddingTop: 50, backgroundColor: "#E68797" }}>
              <Text style={styles.category}>{datas.category}</Text>
              <Text style={styles.name}>" {datas.name} "</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image source={"" + datas.imageUrl != "undefined"
                  ? { uri: datas.imageUrl }
                  : require('../images/noImage.jpg')} resizeMode="cover" style={styles.restImage} ></Image>
                    {datas.imageUrls != undefined && "" + datas.imageUrls[1] != "undefined" && <Image source={{ uri: datas.imageUrls[1] }} resizeMode="cover" style={styles.restImage} ></Image>}
                    {datas.imageUrls != undefined && "" + datas.imageUrls[2] != "undefined" && <Image source={{ uri: datas.imageUrls[2] }} resizeMode="cover" style={styles.restImage} ></Image>}
              </ScrollView>
              {"" + datas.tags != "undefined" &&
                <View style={styles.taglist}>
                  {"" + datas.tags[0] != "undefined" && <Text style={styles.tags}> #{datas.tags[0]}</Text>}
                  {"" + datas.tags[1] != "undefined" && <Text style={styles.tags}> #{datas.tags[1]}</Text>}
                  {"" + datas.tags[2] != "undefined" && <Text style={styles.tags}> #{datas.tags[2]}</Text>}
                  {"" + datas.tags[3] != "undefined" && <Text style={styles.tags}> #{datas.tags[3]}</Text>}
                  {"" + datas.tags[4] != "undefined" && <Text style={styles.tags}> #{datas.tags[4]}</Text>}
                </View>
              }
              <View style={{ alignItems: 'flex-start', padding: 20 }}>
                {"" + datas.priceCategory != "undefined" &&
                  <Text style={styles.text}>👉 가격대 : " {datas.priceCategory} "</Text>}
                {"" + datas.address != "undefined" &&
                  <Text style={styles.text}>👉 주소 :  "{datas.address}"</Text>
                }
                {"" + datas.businessHours != "undefined" &&
                  <Text style={styles.text}>👉 운영시간 :  " {datas.businessHours} "</Text>}
                {"" + datas.phone != "undefined" &&
                  <Text style={styles.text}>👉 번호 :  " {datas.phone} "</Text>}
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => getMap(datas.routeUrl)}>
                    <View style={styles.btn}>
                      <Text style={styles.text2}>길찾기</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => doCall(datas.phone)}>
                    <View style={styles.btn}>
                      <Text style={styles.text2}>전화하기</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.btn}>
                      <Text style={styles.text2}>찜하기</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => doShare()}>
                    <View style={styles.btn}>
                      <Text style={styles.text2}>공유하기</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity  onPress={() => goNaver(datas.id)}>
                  <Text style={{color:'#E68797', fontWeight:'bold',fontSize:17}}>메뉴 보러가기</Text>
                  </TouchableOpacity>
                </View>
            </View>

          </View>
        )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  category: {
    padding: 10,
    fontSize: 15,
    color: "#4C4C4C",
    fontWeight: "bold"
  },
  taglist: {
    alignContent: 'center',
    flexDirection: 'row'
  },
  tags: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E68797'
  },
  name: {
    marginBottom: 10,
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
  },
  restImage: {
    marginBottom: 20,
    marginLeft: 15,
    marginTop: 20,
    width: 300,
    height: 300
  },
  text: {
    marginBottom:15,
    padding: 4,
    color: "#4C4C4C",
    fontWeight: "bold",
    fontSize: 15
  },
  text2: {
    padding: 4,
    color: "#4C4C4C",
    fontWeight: "bold",
    fontSize: 15
  },
  btnContainer: {
    marginBottom: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  btn: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginLeft: 10,
    width: 80,
    backgroundColor: '#fff',
    borderColor: '#E68797',
    borderWidth: 1,
    borderRadius: 10,
  }
});
