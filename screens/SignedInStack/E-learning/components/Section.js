import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Section({containerStyle, title, onPress, children}) {
    return (
        <View style={{...containerStyle}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{flex: 1, fontSize: 18, fontWeight: '500'}}>{title}</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={{width: 80, borderRadius: 30, backgroundColor: '#42c6a5', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: '700', }}>See All</Text>
                </TouchableOpacity>
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({})