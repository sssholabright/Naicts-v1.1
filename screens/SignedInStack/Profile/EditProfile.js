import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Platform, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function EditProfile({navigation}) {
    const [name, setName] = useState('Mujeeb Adejobi')
    const [password, setPasssword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [portfolio, setPortfolio] = useState('')

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
                    <Text style={{fontWeight: '700', fontSize: 20, color: '#fff'}}>PERSONAL DETAILS</Text>
                </View>
                <View>
                    <Text style={{fontSize: 12, fontWeight: '500', color: '#ef018a'}}>{'          '}</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{padding: 20}}>
                <Text style={{color: 'gray', fontSize: 12, fontWeight: '500'}}>Your Name</Text>   
                <View style={{borderRadius: 5, borderWidth: 1, borderColor: 'lightgray', marginTop: 5, marginBottom: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput 
                        style={{width: '85%', paddingHorizontal: 10}}
                        placeholder={name}
                        value={name}
                        onChangText={(name) => setName(name)} 
                    />
                    <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#ef018a', padding: 5, margin: 5, borderRadius: 5}}>
                        <Ionicons name="arrow-forward" size={24} color='#fff' />
                    </TouchableOpacity>
                </View>

                <Text style={{color: 'gray', fontSize: 12, fontWeight: '500'}}>Password</Text>   
                <View style={{borderRadius: 5, borderWidth: 1, borderColor: 'lightgray', marginTop: 5, marginBottom: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput 
                        style={{width: '85%', paddingHorizontal: 10}}
                        placeholder={password}
                        value={password}
                        onChangText={(password) => setPasssword(password)} 
                    />
                    <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#ef018a', padding: 5, margin: 5, borderRadius: 5}}>
                        <Ionicons name="arrow-forward" size={24} color='#fff' />
                    </TouchableOpacity>
                </View>
                
                <Text style={{color: 'gray', fontSize: 12, fontWeight: '500'}}>Portfolio</Text>   
                <View style={{borderRadius: 5, borderWidth: 1, borderColor: 'lightgray', marginTop: 5, marginBottom: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput 
                        style={{width: '85%', paddingHorizontal: 10}}
                        placeholder={portfolio}
                        value={portfolio}
                        onChangText={(portfolio) => setPortfolio(portfolio)} 
                    />
                    <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#ef018a', padding: 5, margin: 5, borderRadius: 5}}>
                        <Ionicons name="arrow-forward" size={24} color='#fff' />
                    </TouchableOpacity>
                </View>

                <Text style={{color: 'gray', fontSize: 12, fontWeight: '500'}}>Phone Number</Text>   
                <View style={{borderRadius: 5, borderWidth: 1, borderColor: 'lightgray', marginTop: 5, marginBottom: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput 
                        style={{width: '85%', paddingHorizontal: 10}}
                        placeholder={phoneNumber}
                        value={phoneNumber}
                        onChangText={(phoneNumber) => setPhoneNumber(phoneNumber)} 
                    />
                    <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#ef018a', padding: 5, margin: 5, borderRadius: 5}}>
                        <Ionicons name="arrow-forward" size={24} color='#fff' />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}