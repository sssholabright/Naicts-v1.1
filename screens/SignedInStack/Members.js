import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Members({navigation}) {
    const [search, setSearch] = useState("")
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.bodyContainer}>
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
                <View style={{marginVertical: 20}}>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'whitesmoke', padding: 10, borderRadius: 10, marginBottom: 10}}>
                        <Image source={require('../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 20}} />
                        <View style={{marginLeft: 20}}>
                            <Text style={{fontSize: 16, color: 'gray'}}>Mujeeb Adejobi</Text>
                            <Text style={{fontSize: 14, color: 'lightgray'}}>Technical Director</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
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