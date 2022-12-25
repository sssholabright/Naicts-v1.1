import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { addDoc, collection, onSnapshot, orderBy, query , where} from 'firebase/firestore'
import { auth, db } from '../../../SignedOutStack/authHooks/firebase'

export default function Discussion({ discussion, navigation, index }) {

    const JoinDiscussion = async (id) => {
        const user = auth.currentUser
        const q = query(collection(db, 'discussions', id, 'members'), where('uid', '==', user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            if (snapshot.docs.length === 0) {
                addDoc(collection(db, 'discussions', id, 'members'), {
                    uid: user.uid,
                    name: user.displayName,
                    photoURL: user.photoURL
                })
                alert('Joined Discussion')
            }
        });
        return unsubscribe;
    }


    const leaveDiscussion = async (id) => {
        const user = auth.currentUser;
        const q = query(collection(db, 'discussions', id, 'members'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docs.map(docSnapshot => {
                if (docSnapshot.data().user._id === user.uid) {
                    docSnapshot.ref.delete();
                }
            })
        });
        return unsubscribe;
    }


    const join = () => {
        JoinDiscussion(discussion.id);
        navigation.navigate('discussionpage', { id: discussion.id, title: discussion.title });
    }

    return (
        <TouchableOpacity
            style={styles.container}
            key={index}
            onPress={join}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{discussion.title}</Text>
                <Text style={styles.description}>{discussion.description}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: 100}}>
                    <Image 
                        source={require('../../../../assets/bili.jpg')}
                        style={{marginLeft: -15, width: 35, height: 35, borderRadius: 50}}
                    />
                    <Image 
                        source={require('../../../../assets/me.jpg')}
                        style={{marginLeft: -15, width: 35, height: 35, borderRadius: 50}}
                    />
                    <Image 
                        source={require('../../../../assets/ife.jpg')}
                        style={{marginLeft: -15, width: 35, height: 35, borderRadius: 50}}
                    />
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', alignItems: 'center'}}>

                </TouchableOpacity>
            </View>
            </View>
            
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "whitesmoke",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
    },
    joinedContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    joinButton: {
        backgroundColor: "#f25fb9",
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    joinText: {
        color: "white",
        fontWeight: "bold",
    },
    joinedButton: {
        backgroundColor: "#f25fb9",
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row'
    },
})



/*
import {Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function Discussion({discussion, onPress, containerStyle}) {
    return (
        <View key={discussion.id} activeOpacity={0.5} style={[{backgroundColor: 'white', padding: 20, marginHorizontal: 20, borderRadius: 10, borderWidth: 1, borderColor: 'whitesmoke', borderRadius: 5}, containerStyle, shadow]}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{discussion.title}</Text>
            <Text style={{fontSize: 14, color: '#666', marginTop: 5}}>{discussion.description}</Text>
            
        </View>
    )
}

export const shadow = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
}
*/