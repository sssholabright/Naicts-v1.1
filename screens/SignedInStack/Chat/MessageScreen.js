import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { AntDesign } from '@expo/vector-icons'
import { collection, addDoc, getDoc, doc, getDocs, query, where } from 'firebase/firestore'
import { auth, db } from '../../SignedOutStack/authHooks/firebase'

export default function MessageScreen({ navigation, route }) {
    const chatId = route.params.chatId;
    const chatName = route.params.chatName;
    const chatUser = route.params.chatUser;
    const chatPhoto = route.params.chatPhoto;
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = getDocs(query(collection(db, 'chats', chatId, 'messages'), where('chatId', '==', chatId))).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setMessages(previousMessages => GiftedChat.append(previousMessages, doc.data()))
            })
        })
        return unsubscribe
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        addDoc(collection(db, 'chats', chatId, 'messages'), {
            _id: messages[0]._id,
            text: messages[0].text,
            createdAt: messages[0].createdAt,
            user: {
                _id: auth.currentUser.uid,
                name: auth.currentUser.displayName,
                avatar: auth.currentUser.photoURL,
            },
            chatId: chatId,
        })
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="#000" />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{ uri: chatPhoto }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                    <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>{chatName}</Text>
                </View>
                <Text>{'      '}</Text>
            </View>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: auth.currentUser.uid,
                    name: auth.currentUser.displayName,
                    avatar: auth.currentUser.photoURL,
                }}
            />
        </View>
    )
}

