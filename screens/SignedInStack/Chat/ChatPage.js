import React, { useEffect, useState } from 'react';
import { FlatList, Image, Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth, db } from '../../SignedOutStack/authHooks/firebase';
import { collection, addDoc, getDoc, doc, getDocs, query, where, setDoc, onSnapshot, orderBy, limit } from 'firebase/firestore'
import AcceptedChats from './AcceptedChats';

export default function ChatPage({navigation}) {
    const [request, setRequest] = useState([])
    const [acceptedRequest, setAcceptedRequest] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [senderRequest, setSenderRequest] = useState([])
    const [loading, setLoading] = useState(false)
    const [showRequest, setShowRequest] = useState(false)
    const [unread, setUnread] = useState(0)
    const [lastMessage, setLastMessage] = useState("")
    const [newAcceptedRequest, setNewAcceptedRequest] = useState([])

    const user = auth.currentUser

    const receiveRequest = () => {
        const q = query(collection(db, "chatRequests"), where("receiverId", "==", user.uid), where("status", "==", "pending")) // we are getting all the requests that the user has received and pending only
        onSnapshot(q, (querySnapshot) => { // onSnapshot is a listener that listens to any changes in the database and updates the data in real time without refreshing the page or app 
            const requests = []
            querySnapshot.forEach((doc) => {
                requests.push(doc.data())
            })
            setRequest(requests)
        })
    }


    const acceptRequest = async () => {
        const q = query(collection(db, "chatRequests"), where("receiverId", "==", user.uid), where("status", "==", "pending")) // get all the requests that the user has received and pending only
        const updateRequest = async () => {
            try {
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((snapshot) => {
                    setDoc(doc(db, "chatRequests", snapshot.id), {
                        status: "accepted"
                    }, {merge: true})
                 })
            } catch (error) {
                alert(error)
            }
        }
        updateRequest()
    }

    const declineRequest = async () => {
        const q = query(collection(db, "chatRequests"), where("receiver", "==", user.uid))
        const updateRequest = async () => {
            try {
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((snapshot) => {
                    setDoc(doc(db, "chatRequests", snapshot.id), {
                        status: "declined"
                    }, {merge: true})
                })
            } catch (error) {
                alert(error)
            }
        }
        updateRequest()
    }
    
    const getAllChatRequests = () => {
        const q = query(collection(db, "chatRequests"), where("senderId", "==", user.uid), where("status", "==", "accepted")) // we get all the requests that the user has sent and accepted only
        onSnapshot(q, (querySnapshot) => {
            const requests = []
            querySnapshot.forEach((doc) => {
                requests.push(doc.data())
            })
            setSenderRequest(requests)
        })
    }

    const getAllAcceptedRequests = () => {
        const q = query(collection(db, "chatRequests"), where("receiverId", "==", user.uid), where("status", "==", "accepted")) // we get all the requests that the user has received and accepted only
        onSnapshot(q, (querySnapshot) => {
            const requests = []
            querySnapshot.forEach((doc) => {
                requests.push(doc.data())
            })
            setAcceptedRequest(requests)
        })
    }

    
        const unreadMessagesCount = () => {
            /*const q = query(collection(db, "chatRequests"), where("read", "==", true), where("senderId", "!=", user.uid)) // we get all the messages that are unread and the sender is not the user itself 
            onSnapshot(q, (querySnapshot) => {
                const unreadMessages = []
                querySnapshot.forEach((doc) => {
                    unreadMessages.push(doc.data())
                })
                setUnread(unreadMessages.length)
            })*/
        }

        const getLastMessage = (id) => { // we get the last message sent in the chat by the user
            const newAcceptedRequest = acceptedRequest.map((request) => {
                if (request.senderId+request.receiverId == id) {
                    const q = query(collection(db, "messages"), where("id", "==", request.id), orderBy("createdAt", "desc"), limit(1))
                    onSnapshot(q, (querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            setLastMessage(doc.data().status)
                        })
                    })
                    return {
                        ...request,
                        lastMessage: lastMessage
                    }
                } else {
                    return request
                }
            })
            setNewAcceptedRequest(newAcceptedRequest)
            console.log(newAcceptedRequest)
        }


    const renderPendingRequest = () => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: 'lightgray'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '85%'}}>
                    <View style={{width: 70, height: 70, borderRadius: 25}}>
                        <Image source={require('../../../assets/me.jpg')} style={{width: '100%', height: '100%', borderRadius: 25}} />
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
                        <View style={{marginLeft: 10}}>
                            <Text style={{fontWeight: '700'}}>{request[0].senderName}</Text>
                            <Text style={{color: 'grey'}}>{request[0].senderEmail}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => acceptRequest()} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f25fb9', padding: 10, borderRadius: 5, marginRight: 10}}>
                                <Text style={{color: '#fff'}}>Accept </Text>
                                <Ionicons name="checkmark" size={15} color='#fff' />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => declineRequest()} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#f25fb9', padding: 10, borderRadius: 5}}>
                                <Text style={{color: '#fff'}}>Decline</Text>
                                <Ionicons name="close" size={15} color='#fff' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const renderChatItem = ({item, index}) => {
        return (
            <AcceptedChats
                chat={item}     
                unread={unread}
                lastMessage={lastMessage}
                index={index} 
                navigation={navigation}
            />
        )    
    }

    const onRefresh = () => {
        setRefreshing(true)
        receiveRequest()
        getAllChatRequests()
        setRefreshing(false)
    }

    
    useEffect(() => {
        receiveRequest()
        getAllChatRequests()
        getAllAcceptedRequests()
        unreadMessagesCount()
        getLastMessage()
    }, [user])


    return (
        <SafeAreaView style={{height: '100%', backgroundColor: 'whitesmoke'}}>
            <StatusBar barStyle="dark-content" backgroundColor='whitesmoke' />
            <View style={{padding: 20}}>
                <Text style={{fontWeight: '700', fontSize: 20, color: '#000'}}>Chat Page</Text>
            </View>

            {/* Body Container */}
            {request.length > 0 ? (
                <View style={{padding: 20}}>
                    {showRequest ? (
                        <>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Chat Requests</Text>
                                    <View style={{backgroundColor: '#f25fb9', borderRadius: 10, width: 20, height: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
                                        <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>{request.length}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => setShowRequest(false)}>
                                    <Text style={{fontWeight: 'bold', fontSize: 14, color: '#f25fb9'}}>Hide</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop: 10}}>
                                <FlatList
                                    data={request}
                                    renderItem={renderPendingRequest}
                                    keyExtractor={(item) => item.id}
                                    showsVerticalScrollIndicator={false}
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            </View>
                        </>
                    ): (
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Chat Requests</Text>
                                <View style={{backgroundColor: '#f25fb9', borderRadius: 10, width: 20, height: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>{request.length}</Text>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => setShowRequest(true)}>
                                <Text style={{fontWeight: 'bold', fontSize: 14, color: '#f25fb9'}}>Show All</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            ): (
                <View />
            )}
            <View style={{padding: 20}}>
                <Text style={{fontWeight: '700', fontSize: 16}}>Accepted Chat Requests</Text>
            </View>
            <View style={{paddingHorizontal: 20}}>
                {acceptedRequest.length === 0 && senderRequest.length === 0 ? (
                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 100}}>
                        <Text style={{fontWeight: '700', fontSize: 16}}>No Chat</Text>
                    </View>
                ): (
                    <>
                        <FlatList
                            data={acceptedRequest}
                            renderItem={renderChatItem}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            refreshing={refreshing}
                            onRefresh={onRefresh}   
                        />
                        <FlatList
                            data={senderRequest}
                            renderItem={renderChatItem}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            refreshing={refreshing}
                            onRefresh={onRefresh}   
                        />
                    </>
                )}
            </View>
        </SafeAreaView>
    )
}