import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function NewFiles({file, navigation}) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: 'white', width: 80, height: 100, borderRadius: 10, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}>
            <MaterialCommunityIcons name="file" size={40} color={file.color}  />
            <Text style={{fontSize: 10, marginTop: 10}}>{file.title}</Text>
        </TouchableOpacity>
    )
}

export function Folder({folder, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={{ backgroundColor: '#fff', width: 140, height: 130, borderRadius: 15, marginHorizontal: 10, marginBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
            <MaterialCommunityIcons name="folder" size={40} color="#ef018a"  />
            <Text style={{fontSize: 12, fontWeight: '700', marginTop: 10}}>{folder.title}</Text>
            <Text style={{fontSize: 10, fontWeight: '400', color: 'gray'}}>{folder.length} Files</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})