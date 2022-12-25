import { ActivityIndicator, FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Member from './Member'
import { auth, db } from '../../SignedOutStack/authHooks/firebase'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import useAuth from '../../SignedOutStack/authHooks/useAuth'

export default function Members({navigation}) {
    const [search, setSearch] = useState("")
    const [membersList, setMembersList] = useState([])
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    const user = auth.currentUser       

    useEffect(() => {
        const q = query(collection(db, "users"), where("uid", "!=", user.uid)) 
        const getMembers = async () => {
            setLoading(true)
            try {
                const querySnapshot = await getDocs(q)
                const members = []
                querySnapshot.forEach((doc) => {
                    members.push(doc.data())
                })
                setMembersList(members)
                //setFilterData(members)
                setLoading(false)
            } catch (error) {
                alert(error)
            }
        }
        getMembers()
        console.log(membersList)
    }, [user])

    const refreshMembers = async () => {
        const q = query(collection(db, "users"), where("uid", "!=", user.uid), orderBy("firstName", "desc"))
        const getMembers = async () => {
            setRefreshing(true)
            try {
                const querySnapshot = await getDocs(q)
                const members = []
                querySnapshot.forEach((doc) => {
                    members.push(doc.data())
                })
                setMembersList(members)
                //setFilterData(members)
                setRefreshing(false)
            } catch (error) {
                alert(error)
            }
        }
        getMembers()
    }





    const renderMembers = ({item, index}) => {
        return <Member 
            member={item} 
            key={index}
            navigation={navigation}
            containerStyle={{
                marginVertical: 5, 
                marginTop: index == 0 ? 15 : 10
            }}
        />
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            <View style={{ flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10 }}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' />
                    ) : Platform.OS === "ios" ? (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    ) : null}
                </TouchableOpacity>
                <View style={{}}>
                    <Text style={{ fontSize: 18, letterSpacing: 0.1, color: '#fff', fontWeight: '700' }}>MEMBERS</Text>
                </View>
                <View style={{}}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('addmember')}>
                        <Ionicons name="add" size={24} color='#fff' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                <Text style={{color: 'gray', fontSize: 12, fontWeight: '500'}}>2384 Members</Text>
                <Text style={{color: '#000', fontSize: 30, fontWeight: '500'}}>NAICTS Members</Text>
                <Text style={{color: 'gray', fontSize: 14, fontWeight: '500', marginTop: 5}}>CS, LIS, MC</Text>
            </View>

            <View style={{marginVertical: 10, marginHorizontal: 20, backgroundColor: 'whitesmoke', borderWidth: 1, borderColor: 'lightgray', borderRadius: 20, flexDirection: 'row', alignItems: 'center',  paddingHorizontal: 10}}>
                <Ionicons name="search" size={20} color="gray"/>                   
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#000"
                    style={{ backgroundColor: '#fff', padding: 10, borderRadius: 10 }}
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                {loading ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#f25fb9" />
                    </View>
                ) : (
                    <FlatList
                        data={membersList}
                        renderItem={renderMembers}
                        keyExtractor={(item) => item.uid}
                        showsVerticalScrollIndicator={false}
                        refreshing={refreshing}
                        onRefresh={refreshMembers}
                    />
                )}
            </View>
            <View style={{ height: 50 }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})



{/*}
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

