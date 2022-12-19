import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { addDoc, collection, getDocs, Timestamp } from 'firebase/firestore'
import { db } from '../../SignedOutStack/authHooks/firebase'
import useAuth from '../../SignedOutStack/authHooks/useAuth'

export default function PostItem({navigation}) {
    const [itemInput, setItemInput] = useState("")
    const [location, setLocation] = useState("")
    const [itemDetails, setItemDetails] = useState("")
    const [loading, setLoading] = useState(false)

    const disabled = !itemInput && !location && !itemDetails;

    const postItem = async () => {
        setLoading(true)
        const lostItem = {
            title: itemInput,
            location: location,
            description: itemDetails,
            postedAt: Timestamp.now().toDate().toString().slice(0, 24),
        }
        const lostItemRef = await addDoc(collection(db, "lostItems"), lostItem)
        console.log("Document written with ID: ", lostItemRef.id);
        console.error("Error adding document: ", error);
        navigation.goBack()   
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor='#f25fb9' />

            {/* Header Section (Back Icon and `Title`) */}
            <View style={{ backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, fontWeight: '700', color: '#fff'}}>POST FOUND ITEM</Text>
                </View> 
                <Text>{'        '}</Text>
            </View>

            {/* Text input `components` */}
            <View style={{padding: 20}}>
                <View style={{}}>
                    <TextInput 
                        style={styles.itemInput} 
                        placeholder="What do you found?" 
                        value={itemInput} 
                        onChangeText={(itemInput) => setItemInput(itemInput)} 
                    />
                </View>
                <View style={{}}>
                    <TextInput 
                        style={styles.itemInput} 
                        placeholder="Where do you found it?" 
                        value={location} 
                        onChangeText={(location) => setLocation(location)} 
                    />
                </View>
                <View>
                    <TextInput 
                        style={[styles.itemInput, {height: 100}]} 
                        placeholder="Details of the found it and how the owner should contact you" 
                        multiline={true}
                        textAlignVertical="top"
                        value={itemDetails} 
                        onChangeText={(itemDetails) => setItemDetails(itemDetails)} 
                    />
                </View>

                {/* Item image box */}
                <TouchableOpacity activeOpacity={0.9} style={styles.imageContainer}>
                    <Entypo name="plus" size={15} color="gray" />
                </TouchableOpacity>

                {/* Post item button */}
                <View>
                    <TouchableOpacity activeOpacity={0.9} onPress={postItem} disabled={disabled} style={disabled ? [styles.postButton, {backgroundColor: 'gray'}] : styles.postButton}>
                        <Text style={{color: '#fff', fontWeight: '500', fontSize: 15, textTransform: 'uppercase', textAlign: 'center'}}>{loading ? 'loading...' : 'Post Item'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
    },

    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    imageContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
    },

    itemInput: {
        backgroundColor: 'white',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4,
        paddingLeft: 10,
        padding: 10,
        fontSize: 15,
        // Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    },

    postButton: {
        width: '100%', 
        backgroundColor: '#ef018a', 
        padding: 15, 
        marginTop: 20,
        borderRadius: 4
    }
})