import { ActivityIndicator, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { addDoc, collection, getDocs, orderBy, Timestamp } from 'firebase/firestore'
import { db } from '../../SignedOutStack/authHooks/firebase'
import useAuth from '../../SignedOutStack/authHooks/useAuth'
import AwesomeLoading from 'react-native-awesome-loading'

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
        }  
        getDiscussions()
    }, [user])

    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            {/* Header Container */}
            <View style={{ backgroundColor: '#f25fb9', padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity>
                <View style={{marginLeft: 20}}>
                    <Text style={{fontWeight: '700', fontSize: 20, color: '#fff'}}>Discussion Forum</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#fff', padding: 5, paddingHorizontal: 10, borderRadius: 4}} onPress={() => navigation.navigate("creatediscussion")}>
                    <Text style={{fontSize: 12, fontWeight: '500', color: '#ef018a'}}>CREATE</Text>
                </TouchableOpacity>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false} style={{padding: 20}}>
                {/* Main Container */}
                <View style={{marginTop: 20}}>
                    <Text style={{textAlign: 'center', fontSize: 30, fontWeight: '700'}}>Let's Discuss</Text>
                    <View style={{marginVertical: 20, backgroundColor: 'whitesmoke', borderWidth: 1, borderColor: 'lightgray', borderRadius: 20, flexDirection: 'row', alignItems: 'center',  paddingHorizontal: 10}}>
                    <Ionicons name="search" size={20} color="gray"/>
                    <TextInput
                        placeholder="Search something..."
                        style={{padding: 5, flex: 1, marginLeft: 10}}
                        value={search}
                        onChangeText={(text) => searchFilter(text)}
                    />
                </View>

                    {/* Disccussion List */}
                    {loading ? (
                        <ActivityIndicator size={'large'} color="#f25fb9" />
                    ) : (
                        discussionsList.map((post, index) => (
                            <View key={index} style={[{padding: 20, borderWidth: 1, borderColor: 'lightgray', borderRadius: 5, backgroundColor: 'white', marginVertical: 20}, styles.shadow]}>
                                <Text style={{fontSize: 18, fontWeight: '500', marginBottom: 10}}>{post.title}</Text>
                                <Text style={{color: 'gray', fontSize: 12, }}>{post.description}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: 100}}>
                                        <Image 
                                            source={require('../../../assets/bili.jpg')}
                                            style={{width: 30, height: 30, borderRadius: 5}}
                                        />
                                        <Image 
                                            source={require('../../../assets/me.jpg')}
                                            style={{width: 30, height: 30, borderRadius: 5}}
                                        />
                                        <Image 
                                            source={require('../../../assets/ife.jpg')}
                                            style={{width: 30, height: 30, borderRadius: 5}}
                                        />
                                    </View>
                                    <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', alignItems: 'center',}} onPress={() => navigation.navigate('discussionpage', { title: post.title, description: post.description, id: post.id })}>
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
        //padding: 20
    },

    shadow: {  
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    }
})