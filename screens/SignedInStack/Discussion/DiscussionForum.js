import { ActivityIndicator, FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { collection, getDocs, setDoc, doc, orderBy, query, where, onSnapshot } from 'firebase/firestore'
import { auth, db } from '../../SignedOutStack/authHooks/firebase'
import Discussion from './components/Discussion'


export default function DiscussionForum({ navigation }) {
    const [activeTab, setActiveTab] = useState('New Discussions');

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            <View style={{ flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10 }}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Discussion Forum</Text>
                <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#fff', padding: 5, paddingHorizontal: 10, borderRadius: 4}} onPress={() => navigation.navigate("creatediscussion")}>
                    <Text style={{fontSize: 12, fontWeight: '500', color: '#ef018a'}}>CREATE</Text>
                </TouchableOpacity>
            </View>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <View style={{flex: 1}}>
                {activeTab === 'New Discussions' ? (
                    <NewDiscussion 
                        navigation={navigation}
                    />
                ) : (
                    <JoinedDiscussion 
                        navigation={navigation}
                     />
                )}
            </View>
        </SafeAreaView>
    )
}


export function NewDiscussion({navigation}) {
    const [filterData, setFilterData] = useState([])
    const [discussionsList, setDiscussionList] = useState([])
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [search, setSearch] = useState('')

    const fetchDiscussions = async () => {
        setLoading(true)
        const q = query(collection(db, "discussions"), where("joined", "==", false), orderBy("createdAt", "desc")) // we are querying the discussions collection and ordering the discussions by the createdAt property in descending order
        onSnapshot(q, (querySnapshot) => { // we are listening for changes in the database
            const discussions = []
            querySnapshot.forEach((doc) => {
                discussions.push(doc.data())
            })
            setDiscussionList(discussions)
            setFilterData(discussions)
            setLoading(false)
        })
    }    

    useEffect(() => {
        fetchDiscussions()
    }, [])

    const joinDiscussion = (id) => {
        const newDiscussionList = discussionsList.map((discussion) => { // we are mapping through the discussion list and checking if the discussion id matches the id of the discussion we want to join
            if (discussion.id == id) { // if the discussion id matches the id of the discussion we want to join
                setDoc(doc(db, "discussions", discussion.id), { // we are setting the discussion document in the database
                    ...discussion, // we are spreading the discussion object
                    joined: true // we are setting the joined property to true
                }, { merge: true }) // we are merging the data with the existing data in the database
                alert("Joined")
                return { // we are returning the discussion object with the joined property set to true
                    ...discussion, 
                    joined: true
                }
            } else {
                return discussion
            }
        })
        setDiscussionList(newDiscussionList)
    }

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = filterData.filter(function (item) {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setDiscussionList(newData)
            setSearch(text)
        } else {
            setDiscussionList(filterData)
            setSearch(text)
        }
    }

    const onRefresh = () => {
        setRefreshing(true)
        fetchDiscussions()
        setRefreshing(false)
    }

    const renderDiscussions = ({item, index}) => {
        return <Discussion 
            key={index}
            discussion={item}
            joinDiscussion={joinDiscussion}
            navigation={navigation}
            containerStyle={{
                marginVertical: 5, 
                marginTop: 10,
            }}
        />
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#f25fb9' }}>
                <TextInput
                    style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, flex: 1, marginRight: 10 }}
                    placeholder="Search"
                    placeholderTextColor="#666"
                    value={search}
                    onChangeText={(text) => searchFilterFunction(text)}
                />
                <TouchableOpacity activeOpacity={0.5}  onPress={() => searchFilterFunction("")}>
                    <Ionicons name="close" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: 'whitesmoke', marginTop: 10 }}>
                {loading ? <ActivityIndicator size="large" color="#f25fb9" style={{ marginTop: 20 }} /> : (
                    <FlatList
                        data={discussionsList}
                        renderItem={renderDiscussions}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        refreshing={refreshing}
                        onRefresh={onRefresh}                           
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke'
    }
}) 

export function JoinedDiscussion({navigation}) {
    const [filterData, setFilterData] = useState([])
    const [discussionsList, setDiscussionList] = useState([])
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [search, setSearch] = useState("")


    const fetchJoinedDiscussions = async () => {
        setLoading(true)
        const q = query(collection(db, "discussions"), where("joined", "==", true), orderBy("createdAt", "desc"))
        onSnapshot(q, (querySnapshot) => {
            const list = []
            querySnapshot.forEach((doc) => {
                const { title, description, joined, createdAt } = doc.data()
                list.push({
                    id: doc.id,
                    title,
                    description,
                    joined,
                    createdAt
                })
            })
            setDiscussionList(list)
            setFilterData(list)
            setLoading(false)
        })
    }


    useEffect(() => {
        fetchJoinedDiscussions()
    }, [])


    const leaveDiscussion = (id) => {
        const newDiscussionList = discussionsList.map((discussion) => {
            if (discussion.uid == id) {
                setDoc(doc(db, "discussions", discussion.uid), {
                    ...discussion,
                    joined: false
                }, { merge: true })
                return {
                    ...discussion,
                    joined: false
                }
            } else {
                return discussion
            }
        })
        setDiscussionList(newDiscussionList)
    }

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = filterData.filter(function (item) {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setDiscussionList(newData)
            setSearch(text)
        } else {
            setDiscussionList(filterData)
            setSearch(text)
        }
    }

    const onRefresh = () => {
        setRefreshing(true)
        fetchJoinedDiscussions()
        setRefreshing(false)
    }

    const renderDiscussions = ({item, index}) => {
        return <Discussion 
            key={index}
            discussion={item}
            leaveDiscussion={leaveDiscussion}
            navigation={navigation}
            containerStyle={{
                marginVertical: 5, 
                marginTop: 10,
            }}
        />
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#f25fb9' }}>
                <TextInput
                    style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, flex: 1, marginRight: 10 }}
                    placeholder="Search"
                    placeholderTextColor="#666"
                    value={search}
                    onChangeText={(text) => searchFilterFunction(text)}
                />
                <TouchableOpacity activeOpacity={0.5}  onPress={() => searchFilterFunction("")}>
                    <Ionicons name="close" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: 'whitesmoke', marginTop: 10 }}>
                {loading ? <ActivityIndicator size="large" color="#f25fb9" style={{ marginTop: 20 }} /> : (
                    <FlatList
                        data={discussionsList}
                        renderItem={renderDiscussions}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        refreshing={refreshing}
                        onRefresh={onRefresh}                           
                    />
                )}
            </View>
        </SafeAreaView>
    )
}



export function HeaderTabs({ activeTab, setActiveTab }) {
    return (
        <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', backgroundColor: '#fff', width: '100%'}}>
            <HeaderButton
                text="New Discussions"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <View style={{height: 30, width: 1, backgroundColor: 'lightgray'}} />
            <HeaderButton
                text="Joined Discussions"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

export function HeaderButton({ text, activeTab, setActiveTab }) {
    return (
        <TouchableOpacity onPress={() => setActiveTab(text)} style={{ backgroundColor: 'transparent', paddingVertical: 6, paddingHorizontal: 16, borderRadius: 30}}>
            <Text style={{color: activeTab === text ? '#f25fb9' : 'gray', fontSize: 15, fontWeight: '700'}}>{text}</Text>
        </TouchableOpacity>
    )
}