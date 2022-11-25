import { FlatList, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { members } from '../AllTempData'
import Member from './Member'

export default function Members({navigation}) {
    const [search, setSearch] = useState("")

    return (
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
                        data={members} 
                        listKey="Member" 
                        keyExtractor={item => `Member-${item.id}`} 
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