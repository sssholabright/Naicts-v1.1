import { FlatList, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Member from './Member'
import { db } from '../../SignedOutStack/authHooks/firebase'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import useAuth from '../../SignedOutStack/authHooks/useAuth'

export default function Members({navigation}) {
    const [search, setSearch] = useState("")
    const [membersList, setMembersList] = useState([])
    const [loading, setLoading] = useState(false)

    const { user } = useAuth()        

    useEffect(() => {
        const getMembers = async () => {
            setLoading(true)

            const membersCollection = collection(db, 'members')
            const membersSnapshot = await getDocs(membersCollection)
            const membersList = membersSnapshot.docs.map(doc => doc.data())
            setMembersList(membersList)
            setLoading(false)
        }
        getMembers()
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
            <StatusBar />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.bodyContainer}>
                <TouchableOpacity onPress={() =>  navigation.goBack()} activeOpacity={0.5} style={{marginBottom: 10}}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='gray' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='gray' />
                    )}
                </TouchableOpacity>
                <View style={{}}>
                    <Text style={{color: 'gray', fontSize: 12, fontWeight: '500'}}>2384 Members</Text>
                    <Text style={{color: 'gray', fontSize: 30, fontWeight: '500'}}>NAICTS Members</Text>
                    <Text style={{color: 'gray', fontSize: 14, fontWeight: '500', marginTop: 5}}>CS, LIS, MC</Text>
                </View>
                <View style={{marginTop: 15}}>
                    <TextInput 
                        style={{backgroundColor: 'whitesmoke', padding: 10, borderRadius: 10, color: 'gray'}} 
                        placeholder="Search members..." 
                        value={search} 
                        onChangeText={(search) => setSearch(search)} 
                    />
                </View>

                {/* Members SECTION */}
                    <FlatList 
                        data={membersList} 
                        listKey="Member" 
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{marginTop: 0}} 
                        renderItem={({item, index}) => (
                            <Member    
                                member={item} 
                                containerStyle={{
                                    marginVertical: 5, 
                                    marginTop: index == 0 ? 15 : 10
                                }}
                            />
                        )}
                    />
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