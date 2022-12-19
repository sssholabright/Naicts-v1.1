import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../../SignedOutStack/authHooks/firebase'

export default function CreateDiscussion({navigation}) {
    const [discuss, setDiscuss] = useState("")
    const [discussDetails, setDiscussDetails] = useState("")
    const [loading, setLoading] = useState(false)

    const disabled = !discuss && !discussDetails;

    const createDiscussion = async () => {
        setLoading(true)
        await addDoc(collection(db, "discussions"), {
            title: discuss,
            description: discussDetails,
            id: Math.random().toString(36).substring(7),
            createdAt: Timestamp.now().toDate().toString().slice(0, 24),
        })
        .then(() => {
            setLoading(false)
            navigation.navigate("discussionpage", { title: discuss, description: discussDetails, id: Math.random().toString(36).substring(7), createdAt: Timestamp.now().toDate().toString().slice(0, 24) })
        })
        .catch((error) => {
            alert(error)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={styles.discussionContainer}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}>
                    <Entypo name="cross" size={24} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.imageContainer}>
                    <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>M</Text>
                    <View style={{backgroundColor: '#fff', borderRadius: 25, padding: 5, position: 'absolute', right: 0, top: 0}}>
                        <Entypo name="edit" size={15} />
                    </View>
                </TouchableOpacity>
                <View />
            </View>
            <View>
                
            </View>
            <View style={{marginVertical: 10}}>
                <TextInput 
                    style={styles.discussInput} 
                    placeholder="Discussion Topic" 
                    value={discuss} 
                    onChangeText={(discuss) => setDiscuss(discuss)} 
                />
            </View>
            <View>
                <TextInput 
                    style={[styles.discussInput, {height: 100}]} 
                    placeholder="Discussion Details" 
                    multiline={true}
                    textAlignVertical="top"
                    value={discussDetails} 
                    onChangeText={(discussDetails) => setDiscussDetails(discussDetails)} 
                />
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.9} onPress={createDiscussion} disabled={disabled} style={disabled ? [styles.createButton, {backgroundColor: 'gray'}] : styles.createButton}>
                    <Text style={{color: '#fff', fontWeight: '500', fontSize: 15, textTransform: 'uppercase', textAlign: 'center'}}>{loading ? <ActivityIndicator size='small' color="#f25fb9" /> : 'Create Discussion'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        padding: 20
    },

    discussionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    imageContainer: {
        backgroundColor: '#ef018a',
        borderWidth: 5,
        borderColor: 'whitesmoke',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        // Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },

    discussInput: {
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

    createButton: {
        width: '100%', 
        backgroundColor: '#ef018a', 
        padding: 15, 
        marginTop: 20,
        borderRadius: 4
    }
})