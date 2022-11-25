import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Circular({navigation}) {
    const [search, setSearch] = useState("")
    
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
                            onChangeText={(search) => setSearch(search)} 
                        />
                    </View>
                </View>
                <View style={styles.firstContainer}>
                    <View style={{paddingVertical: 5, alignItems: 'center', borderBottomWidth: 1, borderColor: 'lightgray' }}>
                        <Text style={{fontWeight: '500', fontSize: 16, color: 'green' }}>Government Circular</Text>
                    </View>
                    <View style={{marginVertical: 10, width: '90%', alignItems: 'center'}}>
                        <Text> {search} {/*Revision of rates of Allowances - extension of Government decisions on the recommendations the 7th CPC in...*/}</Text>
                    </View>
                    <View style={styles.endContainer}>
                        <Text style={{color: 'gray', }}>10 Jun 2022 02:57PM</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: 'green', padding: 10, paddingHorizontal: 15, borderRadius: 25}}>
                            <Text style={{color: '#fff'}}>Read More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
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