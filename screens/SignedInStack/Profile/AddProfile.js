import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db, storage } from '../../SignedOutStack/authHooks/firebase'
import * as ImagePicker from 'expo-image-picker'
import { updateProfile } from 'firebase/auth'


export default function AddProfile({navigation}) {
    const [profileImage, setProfileImage] = useState(null)
    const [bio, setBio] = useState('')
    const [phone, setPhone] = useState('')
    const [portfolio, setPortfolio] = useState('')
    const [matric, setMatric] = useState('')
    const [loading, setLoading] = useState(false)

    const takePhotoFromCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.cancelled) {
            setProfileImage(result.uri)
        }
    }

    const choosePhotoFromLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.cancelled) {
            setProfileImage(result.uri)
        }
    }

    const uploadImage = async () => {
        const response = await fetch(profileImage)
        const blob = await response.blob()
        const ref = storage.ref().child(`profile/${auth.currentUser.uid}`)
        await ref.put(blob)
        const url = await ref.getDownloadURL()
        setProfileImage(url)
    }

    const addProfileData = async () => {
        setLoading(true)
        await uploadImage()
        await setDoc(doc(db, 'users', auth.currentUser.uid), {
            bio: bio,
            phone: phone,
            portfolio: portfolio,
            matric: matric,
        })
        await updateProfile(auth.currentUser, {
            photoURL: profileImage,
        })
        navigation.navigate('Profile')
        setLoading(false)
    }


    return (
        <ScrollView style={{flex: 1, backgroundColor: "#fff"}}>
            <View style={{flex: 1, paddingHorizontal: 20}}>
                <Text style={{fontSize: 30, fontWeight: '700', color: '#f25fb9'}}>Add Profile</Text>
                <Text style={{fontSize: 12, fontWeight: '500', color: 'gray', marginTop: 5}}>Add your profile details</Text>
                
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <FontAwesome name="user" color="gray" size={20} />
                    <TouchableOpacity onPress={choosePhotoFromLibrary}>
                        <View style={{borderBottomWidth: 1, marginLeft: 10, flex: 1, borderBottomColor: 'lightgray', paddingVertical: 15}}>
                            <Text style={{color: 'gray'}}>Profile Image</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <FontAwesome name="user" color="gray" size={20} />
                    <TouchableOpacity onPress={takePhotoFromCamera}>
                        <View style={{borderBottomWidth: 1, marginLeft: 10, flex: 1, borderBottomColor: 'lightgray', paddingVertical: 15}}>
                            <Text style={{color: 'gray'}}>Take Photo</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                 <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
                    <Image source={{uri: profileImage}} style={{width: 100, height: 100, borderRadius: 15}} />
                </View>

            

                
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <FontAwesome name="user" color="gray" size={20} />
                    <TextInput
                        style={{borderBottomWidth: 1, marginLeft: 10, flex: 1, borderBottomColor: 'lightgray'}}
                        placeholder="Bio"
                        placeholderTextColor="gray"
                        value={bio}
                        onChangeText={(bio) => setBio(bio)}
                    />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <FontAwesome name="phone" color="gray" size={20} />
                    <TextInput
                        style={{borderBottomWidth: 1, marginLeft: 10, flex: 1, borderBottomColor: 'lightgray'}}
                        placeholder="Phone"
                        placeholderTextColor="gray"
                        value={phone}
                        onChangeText={(phone) => setPhone(phone)}
                    />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <FontAwesome name="link" color="gray" size={20} />
                    <TextInput
                        style={{borderBottomWidth: 1, marginLeft: 10, flex: 1, borderBottomColor: 'lightgray'}}
                        placeholder="Portfolio"
                        placeholderTextColor="gray"
                        value={portfolio}
                        onChangeText={(portfolio) => setPortfolio(portfolio)}
                    />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <FontAwesome name="link" color="gray" size={20} />
                    <TextInput
                        style={{borderBottomWidth: 1, marginLeft: 10, flex: 1, borderBottomColor: 'lightgray'}}
                        placeholder="Matric"
                        placeholderTextColor="gray"
                        value={matric}
                        onChangeText={(matric) => setMatric(matric)}
                    />
                </View>
                
                <TouchableOpacity style={{marginTop: 20}} onPress={addProfileData}>
                    <View style={{backgroundColor: '#f25fb9', paddingVertical: 15, borderRadius: 10, alignItems: 'center'}}>
                        {loading ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            <Text style={{color: '#fff', fontWeight: '700'}}>Add Profile</Text>
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}





                    



