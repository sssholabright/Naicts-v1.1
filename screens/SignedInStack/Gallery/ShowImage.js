import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


export default function ShowImage({route, navigation}) {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#000"/>
            <ImageBackground 
                source={route.params.url} 
                resizeMode={"contain"} 
                style={{
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: '#000'
                }}>
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    onPress={() => navigation.goBack()}
                    style={{
                        backgroundColor: 'whitesmoke', 
                        padding: 5, 
                        alignItems: 'center',
                        alignSelf: 'flex-start',
                        margin: 20,
                        borderRadius: 50
                    }}>
                    <Ionicons name="chevron-back" size={24} color='gray' />
                </TouchableOpacity>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({})