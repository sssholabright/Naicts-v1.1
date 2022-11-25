import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Documents({document}) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: 'whitesmoke', width: 140, height: 150, borderRadius: 15, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
            <MaterialCommunityIcons name="file" size={40} color={document.color} style={{backgroundColor: '#fff', padding: 10, borderRadius: 15}} />
            <Text style={{fontSize: 10, marginTop: 10}}>{document.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})