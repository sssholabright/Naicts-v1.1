import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function EventList({list}) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={[{flexDirection: 'row', backgroundColor: '#fff', marginVertical: 10, marginHorizontal: 5, borderRadius: 15}, styles.shadow]}>
            <ImageBackground 
                resizeMode="cover" 
                source={list?.img} 
                style={{
                    width: 100, 
                    height: 100, 
                }}
                imageStyle={{
                    borderRadius: 15 
                }}>
            </ImageBackground>

            {/* Details */}    
            <View style={{marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, }}>
                <View>
                    <Text style={{fontSize: 12, color: 'lightgray', fontWeight: '500'}}>{list.time}</Text>
                    <Text style={{fontSize: 15, fontWeight: '600'}}>{list.title}</Text>
                </View>    
                <TouchableOpacity activeOpacity={0.5}>
                    <Entypo name="chevron-right" size={20} color="lightgray" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: .3,
        shadowRadius: 20,
        elevation: 5
    }
})