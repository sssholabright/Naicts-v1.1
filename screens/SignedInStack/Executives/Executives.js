import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { auth, db } from '../../SignedOutStack/authHooks/firebase';
import { collection,  getDocs, query, onSnapshot, orderBy} from 'firebase/firestore'

export default function Executives({navigation}) {
    const [administrations, setAdministrations] = useState([])

    useEffect(() => {
        const q = query(collection(db, "executives"), orderBy("year", "asc"))
        const getAdministrations = async () => {
            try {
                const querySnapshot = await getDocs(q)
                const administrations = []
                querySnapshot.forEach((doc) => {
                    administrations.push(doc.data())
                })
                setAdministrations(administrations)
            } catch (error) {
                alert(error)
            }
        }
        getAdministrations()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 10, backgroundColor: '#f25fb9'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, fontWeight: '700', color: '#fff'}}>EXECUTIVES</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <ScrollView style={{paddingHorizontal: 20}} showsVerticalScrollIndicator={false}>
                <View style={{marginVertical: 10}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>Know The Executives</Text>
                    <Text style={{color: 'gray'}}>From 2022/2023 - Till date</Text>
                </View>
                <Text style={{fontWeight: '500', fontSize: 15, marginTop: 20}}>ADMINISTRATIONS</Text>
                <View style={{marginVertical: 10, flexDirection: 'row', flexWrap: 'wrap'}}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.adminBox} onPress={() => navigation.navigate('excos')}>
                        <Text style={{fontSize: 15, fontWeight: '500', color: '#000', textAlign: 'center'}}>2022/2023</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#f2f2f2',
    },

    adminBox: {
        backgroundColor: 'white', 
        marginRight: 10, 
        marginVertical: 10, 
        width: 150, 
        borderRadius: 10, 
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10, 
        paddingVertical: 20,
    }
})