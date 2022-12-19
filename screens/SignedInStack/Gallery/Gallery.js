import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from './Images'
import { Ionicons } from '@expo/vector-icons';


export default function Gallery({navigation}) {
    return (
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
            <StatusBar barStyle="light-content" backgroundColor='#f25fb9' />
            <View style={{flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, color: '#fff', fontWeight: '700'}}>GALLERY</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
                <Text style={{fontWeight: '700', fontSize: 30, textAlign: 'center', paddingHorizontal: 10, color: 'lightgray', letterSpacing: 0.2}}>Gallery is not available for now, Come Back Later</Text>
            </View>
            {/*<View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
                {Images.map((image, index) => (
                    <TouchableOpacity key={index}  onPress={() => navigation.navigate('showimage', {url: image.url})} activeOpacity={0.5}>
                        <Image source={image.url} style={{width: 120, height: 120}} />
                    </TouchableOpacity>
                ))}
            </View>*/}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})