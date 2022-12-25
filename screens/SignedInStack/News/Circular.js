import { ActivityIndicator, Platform, Text, SafeAreaView, StatusBar, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../SignedOutStack/authHooks/firebase'
import moment from 'moment'

export default function Circular({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [news, setNews] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getNews()
        })
        return unsubscribe
    }, [navigation])

    const getNews = async () => {
        setLoading(true)

        const q = query(collection(db, "memos"), orderBy("createdAt", "desc"))
        const getNewsData = async () => {
            try {
                const querySnapshot = await getDocs(q)
                const newNews = []
                querySnapshot.forEach((doc) => {
                    newNews.push(doc.data())
                })
                setNews(newNews)
                setLoading(false)
                console.log(news)
            } catch (error) {
                alert(error)
            }
        }
        getNewsData()      
    }

    const onRefresh = async () => {
        setRefreshing(true)
        getNews()
        setRefreshing(false)
    }

    const renderNews = ({item, index}) => (
        <View style={{ marginVertical: 10, marginHorizontal: 20, borderWidth: 1, borderColor: 'lightgray', backgroundColor: '#fff', padding: 15, borderRadius: 10}} key={index}>
            <View style={{paddingVertical: 5, alignItems: 'center', borderBottomWidth: 1, borderColor: 'lightgray' }}>
                <Text style={{fontWeight: '500', fontSize: 16, color: '#f25fb9' }}>{/*memo.title*/}Revision of Allowances</Text>
            </View>
            <View style={{marginVertical: 10, width: '90%'}}>
                <Text>{/*memo.content*/}Revision of rates of Allowances - extension of Government decisions on the recommendations the 7th CPC in...</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{color: 'gray', }}>{moment(item.createdAt).calendar()}</Text>
                <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: '#f25fb9', padding: 8, paddingHorizontal: 15, borderWidth: 1, borderColor: '#f25fb9', borderRadius: 25}} onPress={() => navigation.navigate("readmore", {title: item.title, content: item.content})}>
                    <Text style={{color: '#fff'}}>Read More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={{ backgroundColor: 'whitesmoke', height: '100%' }}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            {/* Header Section (Back Icon and `News`) */}
            <View style={{ backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, paddingBottom: 10}}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                        {Platform.OS === "android" ? (
                            <Ionicons name="arrow-back" size={24} color='#fff' /> 
                        ): Platform.OS === "ios" (
                            <Ionicons name="chevron-back" size={24} color='#fff' />
                        )}
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>News & Anouncements</Text>  
                    <View style={{ width: 24 }} />
                </View>
            </View>

            {loading ? (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#f25fb9" style={{marginTop: 150}} />
                </View>
            ) : (
                <FlatList
                    data={news}
                    renderItem={renderNews}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            )}
        </SafeAreaView>
    )
}


