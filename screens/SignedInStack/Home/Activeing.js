import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function Activeing({imag}) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.sectionBox}>
            <Image 
                source={imag.img} 
                style={{
                    width: 50, 
                    height: 50, 
                    borderRadius: 12
                }} 
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sectionBox: {
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 15,
        borderWidth: 2,
        padding: 2,
        borderColor: '#ef018a',
    },
})

