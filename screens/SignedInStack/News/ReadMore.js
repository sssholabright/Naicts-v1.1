import { Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function ReadMore({navigation, route}) {
    const {title, content} = route.params
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            {/* Header Section (Back Icon and `Event`) */}
            <View style={{flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" ? (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    ): null}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, color: '#fff', fontWeight: '700'}}>NEWS & UPDATES</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <ScrollView style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 20}}>
                <Text style={{fontSize: 18, letterSpacing: 0.1, color: '#000', fontWeight: '700', textTransform: 'uppercase'}}>{title}</Text>
                <Text style={{fontSize: 14, letterSpacing: 0.1, color: '#000', fontWeight: '400', marginTop: 10}}>{content}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}