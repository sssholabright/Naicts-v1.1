import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import { auth, db } from '../../SignedOutStack/authHooks/firebase'
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'


export default function DiscussionPage({navigation, route}) {
    const [messages, setMessages] = useState([]);

    const { title, id } = route.params;
    
    useEffect(() => {
        const q = query(collection(db, 'discussions', id, 'chats'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            }))
        ));
        return unsubscribe;
    }, []);


    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages),
        );

        const { _id, createdAt, text, user } = messages[0]; 
        addDoc(collection(db, 'discussions', id, 'chats'), {
            _id, 
            createdAt,
            text, 
            user 
        });
    }, []);

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

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#f25fb9',
                    },
                }}
                textStyle={{
                    right: {
                        color: '#fff',
                    },
                }}
            />
        );
    };

    const scrollToBottomComponent = () => {
        return(
            <FontAwesome name='angle-double-down' size={22} color='#333' />
        );
    }
            
    return (
        <SafeAreaView style={{height: '100%'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={{backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, minHeight: '16%',}}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('discussionforum')}>
                    <Icon name="chevron-back" size={24} />
                </TouchableOpacity>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} /> 
                    <Text style={{fontWeight: '700', fontSize: 20}}>{title}</Text>
                    <Text style={{fontSize: 14, color: 'gray'}}>85 members</Text>
                </View>
                <TouchableOpacity activeOpacity={0.9}>
                    <Icon name="md-notifications-outline" size={24} />
                </TouchableOpacity>
            </View>

            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: auth.currentUser.uid,
                    name: auth.currentUser.email,
                }}
                textInputStyle={{backgroundColor: '#fff', borderRadius: 20, borderWidth: 1, borderColor: '#ccc', height: 50, paddingHorizontal: 10, paddingVertical: 5, fontSize: 15, color: '#000'}}
                renderBubble={renderBubble}
                alwaysShowSend
                renderSend={renderSend}
                renderUsernameOnMessage={true}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
            />
        </SafeAreaView>
    )
}
