import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { auth, db } from '../../SignedOutStack/authHooks/firebase'


export default function CreateDiscussion({navigation}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const addDiscussion = async () => {
        setLoading(true)
        await addDoc(collection(db, "discussions"), {
            title,
            description,
            id: Math.random().toString(36).substring(7),
            createdAt: Timestamp.now().toDate().toString().substring(0, 24),
            uid: auth.currentUser.uid,
        })
        .then(() => {
            setLoading(false)
            navigation.navigate("discussionpage", { title, description, uid: auth.currentUser.uid, createdAt: Timestamp.now().toDate().toString().substring(0, 24), id: Math.random().toString(36).substring(7) })
        })
        .catch((error) => {
            alert(error)
        })
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#fff" />
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <Text style={styles.headerText}>Create Discussion</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={(title) => setTitle(title)}
                />
                <TextInput
                    style={[styles.input, { height: 100 }]}
                    placeholder="Description"
                    multiline={true}
                    textAlignVertical="top"
                    value={description}
                    onChangeText={(description) => setDescription(description)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={addDiscussion}>
                {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Create Discussion</Text>
                )}
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "700",
        marginLeft: 20,
    },
    inputContainer: {
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    button: {
        backgroundColor: "#f25fb9",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "700",
    },
})

// Now, we can create a discussion by clicking on the Create Discussion button on the Discussion Forum. We will see the discussion on the Home screen.