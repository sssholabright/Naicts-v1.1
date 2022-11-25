import { Dimensions, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from './Images'
import { Ionicons } from '@expo/vector-icons';


export default function Gallery({navigation}) {
    return (
        <ScrollView style={{backgroundColor: '#fff'}} showsVerticalScrollIndicator={false}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* Header Section (Back Icon and `Event`) */}
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'space-between'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#000' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#000' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, fontWeight: '700'}}>GALLERY</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {Images.map((image, index) => (
                    <TouchableOpacity key={index}  onPress={() => navigation.navigate('showimage', {url: image.url})} activeOpacity={0.5}>
                        <Image source={image.url} style={{width: 120, height: 120}} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})