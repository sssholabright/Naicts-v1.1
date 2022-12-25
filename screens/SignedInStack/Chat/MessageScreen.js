import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { GiftedChat, Bubble, Send, InputToolbar } from 'react-native-gifted-chat'
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { collection, addDoc, setDoc, doc, query, onSnapshot, orderBy} from 'firebase/firestore'
import { auth, db } from '../../SignedOutStack/authHooks/firebase'

export default function MessageScreen({ navigation, route }) {
    const { id, name } = route.params;

    const [messages, setMessages] = useState([]);

    const user = auth.currentUser  
    
    useEffect(() => {
        const q = query(collection(db, 'chatRequestsMessages', user.uid), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
                read: doc.data().read
            }))
        ));
        return unsubscribe;
    }, []);

    useEffect(() => {
        setDoc(doc(db, 'chatRequests', user.uid), {
            read: true
        }, {merge: true});
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages),
        );
        
        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(db, 'chatRequestsMessages', id), {
            _id,
            createdAt,
            text,
            user,
            read: false
        });
    }, []);


    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#f25fb9'
                    }
                }}
                textStyle={{
                    right: {
                        color: '#fff'
                    }
                }}
            />
        );
    };

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons
                        name="send-circle"
                        style={{marginBottom: 5, marginRight: 5}}
                        size={35}
                        color="#f25fb9"
                    />
                </View>
            </Send>
        );
    };

    const renderInputToolbar = (props) => {
        return (
            <InputToolbar
                {...props}
                containerStyle={{
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: '#f25fb9',
                    padding: 5
                }}
            />
        );
    };

    const scrollToBottomComponent = () => {
        return(
            <View style={{marginBottom: 10, marginRight: 10}}>
                <Entypo name="chevron-small-down" size={24} color="#333" />
            </View>
        );
    }

    const lastMessage = messages[0];

    const unreadMessages = messages.filter(message => message.user._id !== user.uid && message.createdAt > lastMessage.createdAt);
    
    const unreadMessagesCount = unreadMessages.length;

    const handleProfile = () => {
        navigation.navigate('ProfileScreen', {
            id,
            name
        });
    };

    return (    
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#f25fb9'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
                <TouchableOpacity onPress={handleProfile}>
                    <Image
                        source={{uri: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'}}
                        style={{width: 40, height: 40, borderRadius: 20}}
                    />
                </TouchableOpacity>
            </View>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                
                textInputStyle={{backgroundColor: '#fff', borderRadius: 20, borderWidth: 1, borderColor: '#ccc', height: 50, paddingHorizontal: 10, paddingVertical: 5, fontSize: 15, color: '#000'}}
                user={{
                    _id: user.uid,
                    name: user.displayName,
                    avatar: user.photoURL
                }}
                renderBubble={renderBubble}
                renderSend={renderSend}
                alwaysShowSend
                renderUsernameOnMessage={true}
                renderInputToolbar={renderInputToolbar}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
            />
        </View>
    )
}


