import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Recommen({onPress, title}) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginBottom: -20}}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>{title}</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                <Text style={{color: 'red', fontSize: 13, fontWeight: '500'}}>SEE ALL</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})