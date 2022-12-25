import { Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { db } from '../../SignedOutStack/authHooks/firebase';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore'

export default function Excos({navigation, route}) {
    const [executives, setExecutives] = useState([])

    useEffect(() => {
        const getExecutives = () => {
            const q = query(collection(db, "executives"), orderBy("id", "asc"))
            getDocs(q).then((querySnapshot) => {
                const excos = []
                querySnapshot.forEach((doc) => {
                    excos.push(doc.data())
                })
                setExecutives(excos)
            })
        }
        getExecutives()
    }, [])

    const addExcos = async () => {
        await addDoc(collection(db, "executives"), {
            name: "Bright Programmer",
            position: "President",
            image: "https://firebasestorage.googleapis.com/v0/b/club-app-1c0f5.appspot.com/o/2.jpg?alt=media&token=8b5f2b0f-8f5b-4b1f-9b1f-8f5b4b1f9b1f"
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9"/>
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#f25fb9', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, fontWeight: '700', color: '#fff'}}>2022/2023 ADMINISTRATION</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.excosContainer}>
                {executives.map((exco, index) => (
                    <View key={index} style={{marginVertical: 5, marginTop: index == 0 ? 15 : 10}}>
                        {/* President box */}
                        <TouchableOpacity activeOpacity={0.9} style={styles.excoBox}>
                            <Image source={require('../../../assets/me.jpg')} style={{width: 200, height: 200, borderRadius: 150}} />
                            <View style={{marginVertical: 10, padding: 5, alignItems: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>{exco.name}</Text>
                                <Text style={{color: 'gray', fontWeight: '500', fontSize: 15 }}>{exco.position}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#f2f2f2',
    },

    excoBox: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15, 
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 20,
        marginHorizontal: 5,
        alignItems: 'center',  
        backgroundColor: 'white',
    }
})