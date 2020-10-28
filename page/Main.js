import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ImageBackground, ActivityIndicator, FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RestCard2 from "../components/RestCard2"


// 페이지 이동 객체 데이터를 전달해줍니다
export default Main = ({ navigation }) => {
  const area = '성북동'

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(false)
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
          <View style={styles.container}>
            <View style={styles.container2}>
              <ImageBackground source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/durijuwa-33187.appspot.com/o/logo%2F%EA%B7%B8%EB%A6%BC04.png?alt=media&token=9409d120-c13e-4b31-ab62-fbfb320e6cb9' }} resizeMode="cover" style={styles.logo} >
              </ImageBackground>
            </View>
            <View style={styles.container3}>
              <Text style={styles.areafont}>우리동네 추천 장소👍</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                <Text style={{ fontSize: 17 }}>사당동</Text>
                <TouchableOpacity >
                  <View style={styles.editbtn}>
                    <Text>변경</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.listfont}>🥘맛집</Text>
              {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>                 
                    <View style={{ paddingBottom: 10 }}>
                      <RestCard2 navigation={navigation} name={item.name} menu={item.category} img={item.imageSrc} />
                    </View>
                </View>
          </ScrollView> */}
            </View>
            <View>
              <Text style={styles.listfont}>🍰카페</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* <FlatList horizontal showsHorizontalScrollIndicator={false}
                  data={data2}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <View style={{ paddingBottom: 10 }}>
                      <RestCard2 navigation={navigation} name={item.name} menu={item.category} img={item.imageSrc} />
                    </View>
                  )}
                /> */}
              </ScrollView>
            </View>
            <View>
              <Text style={styles.listfont}>🎮놀거리</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* <FlatList horizontal showsHorizontalScrollIndicator={false}
                  data={data3}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <View style={{ paddingBottom: 10 }}>
                      <RestCard2 navigation={navigation} name={item.name} menu={item.category} img={item.imageSrc} />
                    </View>
                  )}
                /> */}
              </ScrollView>
            </View>
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    alignItems: 'center',
    height: 220,
    backgroundColor: '#E68797'
  },
  container3: {
    alignItems: 'center'
  },
  logo: {
    marginTop: 50,
    width: 170,
    height: 170
  },
  areafont: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  editbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    marginLeft: 10,
    width: 40,
    backgroundColor: '#fff',
    borderColor: '#E68797',
    borderWidth: 1,
    borderRadius: 10
  },
  listfont: {
    marginLeft: 18,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5
  }
});