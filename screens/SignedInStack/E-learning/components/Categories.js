import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function Categories({containerStyle, category}) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={{width: 200, marginRight: 20}}>	
            <ImageBackground 
                resizeMode="cover" 
                source={category?.thumbnail} 
                style={{
                    width: 200, 
                    height: 150, 
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    justifyContent: 'flex-end',
                    ...containerStyle
                }}
                imageStyle={{
                    borderRadius: 15 
                }}>
            <Text style={{color: '#fff', fontWeight: '700'}}>{category?.title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})