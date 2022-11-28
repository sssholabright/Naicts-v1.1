import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { addDoc, collection, getDocs, orderBy, Timestamp } from 'firebase/firestore'
import { db } from '../../SignedOutStack/authHooks/firebase'
import useAuth from '../../SignedOutStack/authHooks/useAuth'

export default function Circular({navigation}) {
    const [search, setSearch] = useState("")
    const [searched, setSearched] = useState(false)
    const [memoList, setMemoList] = useState([])

    const { user } = useAuth()

    useEffect(() => {
        const getMemos = async () => {
            const memosCollection = collection(db, 'memos')
            const membersSnapshot = await getDocs(memosCollection)
            const memos = membersSnapshot.docs.map(doc => doc.data())
            setMemoList(memos)
        }
        getMemos()
    }, [user])

    
useEffect(() => {
    const handleAdd = async () => {
        try {
            const memoRef = await addDoc(collection(db, "memos"), {
                title: "new Memo",
                content: "This is a memo amet group medid jjfdhfggftddgtftyfu ai",
                createdAt: Timestamp.now().toDate().toString().slice(0, 24)
            }) 
            console.log("Document written with ID: ", memoRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
    //handleAdd()
}, [])


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

/*                <View style={styles.listContainer}>
                    {searched && memoList.length === 0 ? (
                        <Text style={styles.noResultText}>No results found</Text>
                    ) : (
                        memoList.map((item, index) => (
                            <View key={index} style={styles.listItem}>
                                <Text style={styles.listItemTitle}>{item.title}</Text>

                                <Text style={styles.listItemContent}>{item.content}</Text>

                                <Text style={styles.listItemDate}>{item.createdAt}</Text>
                            </View>
                        ))
                    )}
                </View>*/
                        
    const searchMemo = (text) => {
        setSearch(text)
        const searchedMembers = memoList.filter(memo => memo.title.toLowerCase().includes(text.toLowerCase()))
        setMemoList(searchedMembers)
        setSearched(true)
    }

        
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="whitesmoke" />
            {/* Header Section (Back Icon and `Event`) */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#000' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#000' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.5, fontWeight: '700'}}>NEWS & UPDATES</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <ScrollView>
                <View style={styles.firstContainer}>
                    <View style={{backgroundColor: 'whitesmoke', padding: 10, borderRadius: 15, flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="search" size={20} color="gray" />
                        <TextInput 
                            style={{marginLeft: 10}} 
                            placeholder="Search..." 
                            value={search} 
                            onChangeText={(text) => searchFilter(text)} 
                        />
                    </View>
                </View>
                {searched && memoList.length === 0 ? (
                    <Text style={styles.noResultText}>No results found</Text>
                ) : search=== "" ? (
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
                                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: 'green', padding: 10, paddingHorizontal: 15, borderRadius: 25}}>
                                        <Text style={{color: '#fff'}}>Read More</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
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
                                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: 'green', padding: 10, paddingHorizontal: 15, borderRadius: 25}}>
                                        <Text style={{color: '#fff'}}>Read More</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'whitesmoke',
        padding: 20,
    },

    firstContainer: {   
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        // Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    },

    endContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }

})