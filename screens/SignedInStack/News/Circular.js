import { ActivityIndicator, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { addDoc, collection, getDocs, orderBy, Timestamp } from 'firebase/firestore'
import { db } from '../../SignedOutStack/authHooks/firebase'
import useAuth from '../../SignedOutStack/authHooks/useAuth'

export default function Circular({navigation}) {
    const [search, setSearch] = useState("")
    const [searched, setSearched] = useState(false)
    const [memoList, setMemoList] = useState([])
    const [loading, setLoading] = useState(false)

    const { user } = useAuth()

    useEffect(() => {
        const getMemos = async () => {
            setLoading(true)
            const memosCollection = collection(db, 'memos')
            const membersSnapshot = await getDocs(memosCollection)
            const memos = membersSnapshot.docs.map(doc => doc.data())
            setMemoList(memos)
            setLoading(false)
        }
        getMemos()
    }, [user])

    const searchFilter = (text) => {
        if (text) {
            const newData = memoList.filter(item => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setMemoList(newData)
            setSearch(text)
            setSearched(true)
        } else {
            setMemoList(memoList)
            setSearch(text)
            setSearched(false)
        }
    }
                                
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            {/* Header Section (Back Icon and `Event`) */}
            <View style={{flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, color: '#fff', fontWeight: '700'}}>NEWS & UPDATES</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>

            <ScrollView style={{padding: 20}}>
                <View style={{marginBottom: 20, backgroundColor: 'whitesmoke', borderWidth: 1, borderColor: 'lightgray', borderRadius: 20, flexDirection: 'row', alignItems: 'center',  paddingHorizontal: 10}}>
                    <Ionicons name="search" size={20} color="gray"/>
                    <TextInput
                        placeholder="What are you looking for?..."
                        style={{padding: 5, flex: 1, marginLeft: 10}}
                        value={search}
                        onChangeText={(text) => searchFilter(text)}
                    />
                </View>

                {searched && memoList.length === 0 ? (
                    <Text style={styles.noResultText}>No results found</Text>
                ) : search=== "" ? (
                    <View>
                        {loading ? <ActivityIndicator size={50} color="#f25fb9" style={{marginTop: 200}} /> : (
                            memoList.map((memo, index) => (
                            <View style={{marginVertical: 10}} key={index}>
                                <View style={{paddingVertical: 5, alignItems: 'center', borderBottomWidth: 1, borderColor: 'lightgray' }}>
                                    <Text style={{fontWeight: '500', fontSize: 16, color: '#f25fb9' }}>{/*memo.title*/}Revision of Allowances</Text>
                                </View>
                                <View style={{marginVertical: 10, width: '90%'}}>
                                    <Text>{/*memo.content*/}Revision of rates of Allowances - extension of Government decisions on the recommendations the 7th CPC in...</Text>
                                </View>
                                <View style={styles.endContainer}>
                                    <Text style={{color: 'gray', }}>{memo.createdAt}</Text>
                                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: '#fff', padding: 8, paddingHorizontal: 15, borderWidth: 1, borderColor: '#f25fb9', borderRadius: 25}} onPress={() => navigation.navigate("readmore", {title: memo.title, content: memo.content})}>
                                        <Text style={{color: '#f25fb9'}}>Read More</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                )))}
                    </View>
                ): (        
                    <View>
                        {memoList.map((memo, index) => (
                            <View style={styles.firstContainer} key={index}>
                                <View style={{paddingVertical: 5, alignItems: 'center', borderBottomWidth: 1, borderColor: 'lightgray' }}>
                                    <Text style={{fontWeight: '500', fontSize: 16, color: 'green' }}>{memo.title}</Text>
                                </View>
                                <View style={{marginVertical: 10, width: '90%'}}>
                                    <Text> {memo.content} {/*Revision of rates of Allowances - extension of Government decisions on the recommendations the 7th CPC in...*/}</Text>
                                </View>
                                <View style={styles.endContainer}>
                                    <Text style={{color: 'gray', }}>{memo.createdAt}</Text>
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('readmore', {use: memo})} style={{backgroundColor: 'green', padding: 10, paddingHorizontal: 15, borderRadius: 25}}>
                                        <Text style={{color: '#fff'}}>Read More</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                )}
                <View style={{height: 50}} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'whitesmoke',
    },

    endContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }

})