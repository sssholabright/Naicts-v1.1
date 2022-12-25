import React, { useState } from 'react'
import { ActivityIndicator, View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, Platform, StyleSheet, Image, TextInput, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import DropDownPicker from 'react-native-dropdown-picker'
import { db, auth } from '../../SignedOutStack/authHooks/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytes, getStorage } from 'firebase/storage'
import * as ImagePicker from 'expo-image-picker'
import { AntDesign } from '@expo/vector-icons'
import { uuidv4 } from '@firebase/util'

export default function PostProduct({navigation}) {
    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productCategory, setProductCategory] = useState(null)
    const [items, setItems] = useState([
        {label: 'Electronics', value: 'electronics'},
        {label: 'Fashion', value: 'fashion'},
        {label: 'Health & Beauty', value: 'health & beauty'},
        {label: 'Construction & Real Estate', value: 'construction & real estate'},
        {label: 'Services', value: 'services'},
        {label: 'Other', value: 'other'},
    ])
    const [open, setOpen] = useState(false);
    const [productImage1, setProductImage1] = useState(null)
    const [productImage2, setProductImage2] = useState(null)
    const [productImage3, setProductImage3] = useState(null)
    const [sellerLocation, setSellerLocation] = useState("")
    const [loading, setLoading] = useState(false)

    const pickImage = async (image) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: .5,
        });

        console.log(result);

        if (!result.cancelled) {
            if (image === 1) {  
                setProductImage1(result.uri);
            } else if (image === 2) {
                setProductImage2(result.uri);
            } else if (image === 3) {
                setProductImage3(result.uri);
            }
        }
    };

    const renderImage = (image) => {
        if (image === 1) {
            if (productImage1) {
                return (
                    <Image source={{uri: productImage1}} style={{width: 100, height: 100, borderRadius: 10}} />
                )
            } else {
                return (
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: '#f25fb9', justifyContent: 'center', alignItems: 'center'}}>
                        <AntDesign name="plus" size={24} color="white" />
                    </View>
                )
            }
        } else if (image === 2) {
            if (productImage2) {
                return (
                    <Image source={{uri: productImage2}} style={{width: 100, height: 100, borderRadius: 10}} />
                )
            } else {
                return (
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: '#f25fb9', justifyContent: 'center', alignItems: 'center'}}>
                        <AntDesign name="plus" size={24} color="white" />
                    </View>
                )
            }
        } else if (image === 3) {
            if (productImage3) {
                return (
                    <Image source={{uri: productImage3}} style={{width: 100, height: 100, borderRadius: 10}} />
                )
            } else {
                return (
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: '#f25fb9', justifyContent: 'center', alignItems: 'center'}}>
                        <AntDesign name="plus" size={24} color="white" />
                    </View>
                )
            }
        }
    }

    const renderImagePicker = () => {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                <TouchableOpacity onPress={() => pickImage(1)}>
                    {renderImage(1)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pickImage(2)}>
                    {renderImage(2)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pickImage(3)}>
                    {renderImage(3)}
                </TouchableOpacity>
            </View>
        )
    }

    const addProductImageToStorage = async (uri) => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function() {
                resolve(xhr.response);
            };
            xhr.onerror = function() {
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
        });
        const thisUsersNewPostRef = ref(getStorage(), `productImages/${uuidv4()}`);
        await uploadBytes(thisUsersNewPostRef, blob); // upload the image to firebase storage
        const downloadURL = await getDownloadURL(thisUsersNewPostRef); // get the download url of the image we just uploaded
        return downloadURL
    }
    

    const addProduct = async () => {
        setLoading(true)
        const image1 = await addProductImageToStorage(productImage1) // upload the first image to firebase storage and get the download url of the image we just uploaded and store it in a variable called image1 
        const image2 = await addProductImageToStorage(productImage2)
        const image3 = await addProductImageToStorage(productImage3) 
        addDoc(collection(db, "products"), {
            id: uuidv4(),
            productName: productName,
            productDescription: productDescription,
            productPrice: productPrice,
            productCategory: productCategory,
            productImage1: image1,
            productImage2: image2,
            productImage3: image3,
            sellerLocation: sellerLocation,
            sellerName: auth.currentUser.displayName,
            sellerEmail: auth.currentUser.email,
            sellerId: auth.currentUser.uid,
            sellerImage: auth.currentUser.photoURL,
            createdAt: Timestamp.now().toDate().toString().slice(0, 24),
        }).then(() => {
            setLoading(false)
            Alert.alert("Product added successfully")
            navigation.goBack()
        }).catch((error) => {
            setLoading(false)
            Alert.alert(error.message)
        })
    }    

    return (
        <SafeAreaView style={{height: '100%'}}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            <View style={{flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View>
                    <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>POST YOUR PRODUCT</Text>
                </View>
                <Text>{'      '}</Text>
            </View>
            
            <ScrollView showsVerticalScrollView={false} style={{paddingHorizontal: 20}}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor="#666"
                        value={productName}
                        onChangeText={text => setProductName(text)}
                    />
                    <TextInput
                        style={[styles.input, { height: 100 }]}
                        placeholder="Description"
                        multiline={true}
                        textAlignVertical="top"
                        placeholderTextColor="#666"
                        value={productDescription}
                        onChangeText={text => setProductDescription(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Location"
                        placeholderTextColor="#666"
                        value={sellerLocation}
                        onChangeText={text => setSellerLocation(text)}
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Price"
                        placeholderTextColor="#666"
                        value={productPrice}
                        onChangeText={text => setProductPrice(text)}
                    />

                    <View style={{marginVertical: 0}}>
                        <DropDownPicker
                            open={open}
                            value={productCategory}
                            items={items}
                            setOpen={setOpen}
                            setValue={setProductCategory}
                            setItems={setItems}
                            placeholder="Select a category"
                            placeholderStyle={{color: '#666'}}
                            style={{backgroundColor: '#fff', borderRadius: 5, borderWidth: 0}}
                            containerStyle={{height: 50}}
                            labelStyle={{color: '#666'}}
                            arrowColor="#666"
                        />
                    </View>
                    
                    <View style={{marginTop: 20}}>
                        <Text style={{color: '#666'}}>Product Images</Text>
                        {renderImagePicker()}
                        <Text style={{color: '#666', marginTop: 10}}>You must upload at least 3 images of your product</Text>
                        <Text style={{color: '#666', marginTop: 10}}>Product Images must be in .jpg or .png format</Text>
                        <Text style={{color: '#666', marginTop: 10}}>Product Images must be less than 1MB</Text>
                    </View>


                </View>
                <TouchableOpacity style={{backgroundColor: '#f25fb9', justifyContent: 'center', alignItems: 'center', marginTop: 20, paddingVertical: 15, borderRadius: 5}} onPress={addProduct}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>Post Product</Text>
                    )}
                </TouchableOpacity>
                <View style={{height: 0}} />
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 20,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
})