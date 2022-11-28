import { Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { addDoc, collection, getDocs, orderBy, Timestamp } from 'firebase/firestore'
import { db } from '../../SignedOutStack/authHooks/firebase'
import useAuth from '../../SignedOutStack/authHooks/useAuth'

export default function DiscussionForum({navigation}) {
    const [search, setSearch] = useState("")
    const [filterData, setFilterData] = useState([])
    const [discussionsList, setDiscussionList] = useState([])
    const [loading, setLoading] = useState(false)

    const { user } = useAuth()

    const searchFilter = (text) => {
        if (text) {
            const newData = filterData.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) >- 1;
            });
            setDiscussionList(newData)
            setSearch(text)
        }
        else {
            setFilterData(discussionsList)
            setSearch(text)
        }
    }

    useEffect(() => {
        const getDiscussions = async () => {
            setLoading(true)
            const discussionsCollection = collection(db, "discussions")
            const discussionsSnapshot = await getDocs(discussionsCollection)
            const discussions = discussionsSnapshot.docs.map(doc => doc.data())
            setDiscussionList(discussions)
            setFilterData(discussions)
            setLoading(false)
            console.log(discussions)
        }  
        getDiscussions()
    }, [user])

    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* Header Container */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#000' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#000' />
                    )}
                </TouchableOpacity>
                <View style={{marginLeft: 20}}>
                    <Text style={{fontWeight: '700', fontSize: 20}}>Discussion Forum</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#ef018a', padding: 5, paddingHorizontal: 10, borderRadius: 4}} onPress={() => navigation.navigate("creatediscussion")}>
                    <Text style={{fontSize: 12, fontWeight: '500', color: '#fff'}}>CREATE</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Main Container */}
                <View style={{marginTop: 20}}>
                    <Text style={{textAlign: 'center', fontSize: 30, fontWeight: '700'}}>Learn Stock, {'\n'} Educate the World</Text>
                    <View style={{marginVertical: 20, backgroundColor: 'whitesmoke', borderWidth: 1, borderColor: 'lightgray', borderRadius: 5, flexDirection: 'row', alignItems: 'center',  paddingHorizontal: 10}}>
                            <Ionicons name="search" size={20} color="gray"/>
                        <TextInput
                            placeholder="Search Something..."
                            style={{padding: 5, flex: 1, marginLeft: 10}}
                            value={search}
                            onChangeText={(text) => searchFilter(text)}
                        />
                    </View>

                    {/* Disccussion List */}
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : (
                        discussionsList.map((post, index) => (
                            <View key={index} style={[{padding: 20, borderWidth: 1, borderColor: 'lightgray', borderRadius: 5, backgroundColor: 'whitesmoke', marginVertical: 20}, styles.shadow]}>
                                <Text style={{fontSize: 18, fontWeight: '500', marginBottom: 10}}>{post.title}</Text>
                                <Text style={{color: 'gray', fontSize: 12, }}>{post.topic}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15}}>
                                    <View style={{}}>
                                        <Image 
                                            source={require('../../../assets/me.jpg')}
                                            style={{width: 30, height: 30, borderRadius: 5}}
                                        />
                                    </View>
                                    <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', alignItems: 'center',}} onPress={() => navigation.navigate('discussionpage', {post})}>
                                        <Text style={{ color: '#ef018a'}}>Join Forum </Text>
                                        <Entypo name="triangle-right" size={15} color='#ef018a'/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        padding: 20
    },

    shadow: {  
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    }
})