import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Button, Alert, Switch, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';


const OrderDetails = (props) => {

    //=============Images selector===============

    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    //========== Apis Call ======================
    const [data, setData] = useState([])
    const { navigation, state } = props
    // console.log("my propss", navigation.state.params.id);

    const getAPIDataById = async () => {
        const url = "https://fakestoreapi.com/products/" + navigation.state.params.id
        let result = await fetch(url);
        result = await result.json();
        // console.log(result);
        if (result) {
            setData(result)
        }
    }
    useEffect(() => {
        getAPIDataById();
    }, [])

    //========== checkbox =================
    // const [isChecked, setIsChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };


    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80' }}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.price}>${data.price}</Text>
                    <View>
                        <View style={styles.price}>
                            <Text style={styles.price}>Ratings: {data.rate}<Text style={styles.count}> {data.count}</Text></Text>
                        </View>
                        <Text style={styles.description}>Description: {data.description}</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            margin: 20,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                    <Text style={styles.price}>Quality Check</Text>
                        <TouchableOpacity onPress={handleCheckboxClick} style={styles.checkboxLabel}>
                            <Text style={styles.checkboxLabel}>Material Check</Text>
                            <View style={styles.checkboxContainer}>
                                {isChecked ? (
                                    <Ionicons name="checkbox-outline" size={24} color="#007AFF" />
                                ) : (
                                    <View style={styles.uncheckedBox} />
                                )}

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleCheckboxClick} style={styles.checkboxLabel}> 
                            <Text style={styles.checkboxLabel}>Sound Check</Text>
                            <View style={styles.checkboxContainer}>
                                {isChecked ? (
                                    <Ionicons name="checkbox-outline" size={24} color="#007AFF" />
                                ) : (
                                    <View style={styles.uncheckedBox} />
                                )}

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleCheckboxClick} style={styles.checkboxLabel}>
                            <Text style={styles.checkboxLabel}>Warranty Check</Text>
                            <View style={styles.checkboxContainer}>
                                {isChecked ? (
                                    <Ionicons name="checkbox-outline" size={24} color="#007AFF" />
                                ) : (
                                    <View style={styles.uncheckedBox} />
                                )}

                            </View>
                        </TouchableOpacity>
                    


                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Button title="Pick an image from camera roll" onPress={pickImage} />
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                    </View>
                    <View>
                        <Button
                            title="Submit"
                            color="#841584"
                            onPress={() => Alert.alert('Data Submitted')}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
      },
      uncheckedBox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#007AFF',
        borderRadius: 4,
        marginRight: 8,
      },
      checkboxLabel: {
        fontSize: 16,
        flexDirection:'row',
        justifyContent:'space-between'

      },
    imageContainer: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    rating: {
        height: 50,
        width: 50,
        padding: 10
    },
    image: {
        height: '100%',
        aspectRatio: 1.5,
    },
    contentContainer: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    count: {
        fontSize: 16,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: 'blue',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
    },
});

export default OrderDetails;
