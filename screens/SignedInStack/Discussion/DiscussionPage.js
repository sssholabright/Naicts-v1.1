import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import { auth, db } from '../../SignedOutStack/authHooks/firebase'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'


export default function DiscussionPage({navigation, route}) {
    const [messages, setMessages] = useState([]);

    const leaveDiscussion = () => {
        const user = auth.currentUser; // get the current user
        const q = query(collection(db, 'discussions', route.params.id, 'members'), where('uid', '==', user.uid)); // query the members collection for the current user 
        const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docs.map(docSnapshot => {
                if (docSnapshot.data().uid === user.uid) {
                    deleteDoc(doc(db, 'discussions', route.params.id, 'members', docSnapshot.id)); // delete the current user from the members collection
                }
            })
        });
        return unsubscribe;
    }


                    
                    
    

    const leave = () => { // function to leave the discussion
        leaveDiscussion();
        navigation.goBack();
    }

    const { title, id } = route.params;

    
    
    useEffect(() => {
        const q = query(collection(db, 'discussions', id, 'chats'), orderBy('createdAt', 'desc'));
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

    const newMessages = messages.map(message => {
        return {
            _id: message._id,
            createdAt: message.createdAt,
            text: message.text,
            user: {
                _id: message.user._id,
                name: message.user.name,
                avatar: message.user.avatar
            },
            read: message.read
        }
    })

    const unreadMessages = newMessages.filter(message => message.read === false);

    const user = auth.currentUser;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {backgroundColor: '#f25fb9'},
            headerRight: () => (
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 80, marginRight: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('DiscussionMembers', {id: id})}>
                        <FontAwesome name="users" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => leave()}>
                        <Icon name="settings-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            ),
            headerTitle: () => (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
                    {unreadMessages.length > 0 ? (
                        <View style={{backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
                            <Text style={{color: 'white', fontSize: 12}}>{unreadMessages.length}</Text>
                        </View>
                    ) : null}
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>
            )
        })
    }, [navigation, title, unreadMessages.length]);


    
    /*

    useEffect(() => {
        const q = query(collection(db, 'chatRequests', id, 'messages'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docs.map(docSnapshot => {
                if (docSnapshot.data().user._id !== user.uid) {
                    setDoc(doc(db, 'chatRequests', id, 'messages', docSnapshot.id), {
                        read: true
                    }, {merge: true})
                }
            })
        });
        return unsubscribe;
    }, []);
 
 
    */
   
    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages),
        );

        const { _id, createdAt, text, user } = messages[0]; 
        addDoc(collection(db, 'discussions', id, 'chats'), {
            _id, 
            createdAt,
            text, 
            user,
            read: false 
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
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <StatusBar barStyle="dark-content" />
            <GiftedChat
                messages={newMessages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: user.uid,
                    name: user.displayName,
                    avatar: user.photoURL
                }}
                renderSend={renderSend}
                renderBubble={renderBubble}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
            />
        </SafeAreaView>
    )
}