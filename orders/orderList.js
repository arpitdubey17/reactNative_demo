import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, TextInput, View, Image, FlatList, ScrollView } from 'react-native';
import { MyFetchApiRequest, myAxiosGetRequest, myFetchPostRequest } from './demo';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";


const App = ({ navigation }) => {
  const [data, setData] = useState([])
  const getAPIData = async () => {
    const url = "https://fakestoreapi.com/products"
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    if (result) {
      setData(result)
    }
  }

  const handlePress = (data) => {
    // console.warn(data)
    // useNavigation.navigate('OrderDetails');
    navigation.navigate("orderDetails", {id: data})

  };

  useEffect(() => {
    getAPIData();
  }, [])


  return (
    <ScrollView>
    <View style={styles.container}>
      {
        data.length ?
          data.map((item) =>
            <View style={styles.dataWrapper}>
              <TouchableOpacity onPress={()=>handlePress(item.id)}>
              {/* <TouchableOpacity onPress={()=> navigation.navigate("orderDetails"+item.id)}> */}
              <View style={styles.card}>
                <Text>{'Title: ' + item.title}</Text>
                <Text>{'Price: ' + item.price}</Text>
                <Text>{'Rating: ' + item.rating.rate}</Text>
              </View>
              </TouchableOpacity>
            </View>
          )
          : null
      }
    </View>
    </ScrollView>
  )



};

const styles = StyleSheet.create({
  container: { flex: 10 },
  dataWrapper: {
    flexDirection: 'column',
  },
  card: {
    justifyContent: 'space-around',
    margin:2,
    padding:8,
    borderRadius:10,
    backgroundColor: 'aliceblue',
    textAlign: 'center', fontSize: 24
  }

})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: 'aliceblue',
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: 'oldlace',
//     alignSelf: 'flex-start',
//     marginHorizontal: '1%',
//     marginBottom: 6,
//     minWidth: '48%',
//     textAlign: 'center',
//   },
//   selected: {
//     backgroundColor: 'coral',
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'coral',
//   },
//   selectedLabel: {
//     color: 'white',
//   },
//   label: {
//     textAlign: 'center',
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });


export default App;
