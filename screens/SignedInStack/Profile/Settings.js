import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Platform, ScrollView, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { auth } from '../../SignedOutStack/authHooks/firebase'
import { deleteUser } from 'firebase/auth'

export default function Settings({navigation}) {
    const logout = () => {
        auth.signOut()
    }

    const deleteAccount = () => {
        const user = auth.currentUser
        deleteUser(user) // Delete the user
        .then(() => {
            alert("Account Deleted")
        })
        .catch((error) => {
            alert(error)
        })
    }

    return (
        <SafeAreaView style={{height: '100%', backgroundColor: '#fff'}}>
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
                    <Text style={{fontWeight: '700', fontSize: 15, color: '#fff'}}>SETTINGS</Text>
                </View>
                <View>
                    <Text style={{fontSize: 12, fontWeight: '500', color: '#ef018a'}}>{'          '}</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{padding: 20}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("editprofile")} style={{flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between', marginVertical: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="person" size={20} color='gray' />
                        <Text style={{marginLeft: 20}}>Personal Details</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color='gray' />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between', marginVertical: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="person" size={20} color='gray' />
                        <Text style={{marginLeft: 20}}>Dark Mode</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color='gray' />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between', marginVertical: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="chatbubble-ellipses" size={20} color='gray' />
                        <Text style={{marginLeft: 20}}>FAQs</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color='gray' />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between', marginVertical: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="person" size={20} color='gray' />
                        <Text style={{marginLeft: 20}}>Pivacy Policy</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color='gray' />
                </TouchableOpacity>
                
                <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between', marginVertical: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="person" size={20} color='gray' />
                        <Text style={{marginLeft: 20}}>Terms And Conditions</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color='gray' />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between', marginVertical: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="code-slash" size={20} color='gray' />
                        <Text style={{marginLeft: 20}}>Developers</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color='gray' />
                </TouchableOpacity>

                
                <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
                    <TouchableOpacity activeOpacity={0.7} onPress={logout} style={{backgroundColor: 'whitesmoke', paddingHorizontal: 130, paddingVertical: 13, borderRadius: 25}}>
                        <Text style={{fontSize: 15, fontWeight: '500'}}>Logout</Text>
                    </TouchableOpacity>
                </View>

                
                <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
                    <TouchableOpacity onPress={deleteAccount} activeOpacity={0.5} style={{paddingHorizontal: 100, paddingVertical: 5}}>
                        <Text style={{fontSize: 15, fontWeight: '500'}}>Delete account</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>  
                        <View>
                    <Image source={require('../../../assets/Applogo.png')} style={{opacity: 0.5, width: 100, height: 100, borderRadius: 50}} />
                    </View>
                    <Text style={{color: 'gray', fontSize: 15, fontWeight: '500'}}>Version 1.1 </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}