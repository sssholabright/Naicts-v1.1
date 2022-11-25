import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ProductCard({data, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{width: '48%', marginVertical: 14}}>
            <View style={{
                width: '100%',
                height: 100,
                borderRadius: 10,
                backgroundColor: '#F0F0F3',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 8,
            }}>
                <Image source={data.productImage} style={{width: '80%', height: '80%'}} resizeMode="contain" />
            </View>
            <Text style={{fontSize: 13, color: '#000', fontWeight: '600', marginBottom: 5}}>{data.productName}</Text>
            {data.productPrice ? 
                <Text>${data.productPrice}</Text> 
            : null}
        </TouchableOpacity>    
    )
}
