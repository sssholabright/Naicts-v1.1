import { ActivityIndicator, FlatList, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Member from './Member'
import { auth, db } from '../../SignedOutStack/authHooks/firebase'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import useAuth from '../../SignedOutStack/authHooks/useAuth'
import { members } from '../AllTempData' 

export default function Members({navigation}) {
    const [search, setSearch] = useState("")
    const [membersList, setMembersList] = useState([])
    const [loading, setLoading] = useState(false)

    const { user } = useAuth()        

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            try {
                const usersRef = collection(db, "users")
                const q = query(usersRef, where("uid", "!=", auth.currentUser.uid))
                const querySnapshot = await getDocs(q)
                const users = []
                querySnapshot.forEach((doc) => {
                    users.push(doc.data())
                })
                setMembersList(users)
                setLoading(false)
            } catch (error) {
                alert(error)
            }
        }
        getUsers()
    }, [user])






    /*useEffect(() => {
        const fetchMembers = async () => {
            try {
                const memberRef = await addDoc(collection(db, "members"), {
                    name: "Adeshola",
                    email: "adejobimujeeb5@gmail.com",	
                    img: "https://lh3.googleusercontent.com/ogw/AOh-ky1Sjby9-jwcSEc7SEiltaNZ4lKozxlG1eGnUL9Wzg=s32-c-mo",
                    id: "8b8b8b8b-8b8b-8b8b-8b8b-8b8b8b8b8b8b"
                })
                console.log("Document written with ID: ", memberRef.id);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
        fetchMembers()
    }, [user])*/
  
/*{!loading ? <Text>Loading...</Text> : (*/
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9"/>
            <View style={{flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, color: '#fff', fontWeight: '700'}}>MEMBERS</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.bodyContainer}>
                <View style={{}}>
                    <Text style={{color: 'gray', fontSize: 12, fontWeight: '500'}}>2384 Members</Text>
                    <Text style={{color: '#000', fontSize: 30, fontWeight: '500'}}>NAICTS Members</Text>
                    <Text style={{color: 'gray', fontSize: 14, fontWeight: '500', marginTop: 5}}>CS, LIS, MC</Text>
                </View>
                <View style={{marginVertical: 10, backgroundColor: 'whitesmoke', borderWidth: 1, borderColor: 'lightgray', borderRadius: 20, flexDirection: 'row', alignItems: 'center',  paddingHorizontal: 10}}>
                    <Ionicons name="search" size={20} color="gray"/>
                    <TextInput
                        placeholder="Search something..."
                        style={{padding: 5, flex: 1, marginLeft: 10}}
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                    />
                    </View>

                {/* Members SECTION */}
                {loading ? <ActivityIndicator size={50} color="#f25fb9" style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} /> : 
                    <FlatList 
                        data={membersList} 
                        listKey="Member" 
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{marginTop: 0}} 
                        renderItem={({item, index}) => (
                            <Member    
                                key={index}
                                onPress={() => navigation.navigate('nonuserprofile', {member: item})}
                                member={item} 
                                containerStyle={{
                                    marginVertical: 5, 
                                    marginTop: index == 0 ? 15 : 10
                                }}
                            />
                        )}
                    />
                }
                <View style={{height: 20}} />
            </ScrollView>
        </SafeAreaView>
    )
}

                                

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },

    bodyContainer: {
        padding: 20,
        backgroundColor: 'white',
    }
})

{/*
const sendMessage = async (text) => {
    await addDoc(collection(db, 'chatlists', auth.currentUser.uid, 'chats', chatId, 'messages'), {
        _id: chatId,
        text,
        createdAt: new Date(),
        user: {
            _id: chatId,
            name: auth.currentUser.email,
            avatar: auth.currentUser.photoURL,
            email: auth.currentUser.email,
        },
    });
};

useEffect(() => {
    const q = query(collection(db, 'chatlists', auth.currentUser.uid, 'chats', chatId, 'messages'), orderBy('createdAt', 'desc'));
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
    const { text } = messages[0];
    sendMessage(text);
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

const [active, setActive] = useState(false);
        
return (
    <SafeAreaView style={{height: '100%'}}>
        <StatusBar barStyle="light-content" backgroundColor='#f25fb9' />
        {/* Header Container *
        <View style={{ backgroundColor: '#f25fb9', padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()} style={{flexDirection: 'row', alignItems: 'center'}}>
                {Platform.OS === "android" ? (
                    <Ionicons name="arrow-back" size={24} color='#fff' /> 
                ): Platform.OS === "ios" (
                    <Ionicons name="chevron-back" size={24} color='#fff' />
                )}
                <View style={{marginLeft: 5}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 35, height: 35, borderRadius: 50}} />
                </View>
            </TouchableOpacity>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontWeight: '700', fontSize: 20, color: '#fff'}}>{chatName}</Text>
                {!active ? (
                    <Text style={{color: '#fff'}}>{chatUser}</Text>
                ):(    
                    <Text style={{color: '#fff'}}>Last seen today at 12:00</Text>
                )}
            </View>
            <Text>{'                 '}</Text>  
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
        */}
