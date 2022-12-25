import { Image, Text, View } from 'react-native'
import React from 'react'

export default function Discuss({discuss}) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={discuss.img} style={{width: 50, height: 50, borderRadius: 50}} />
            <View style={{marginHorizontal: 10, width: 250}}>
                <Text style={{fontWeight: '700', fontSize: 15}}>{discuss.name}   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>{discuss.time} mins ago</Text></Text>
                <Text style={{fontWeight: '400', fontSize: 15}}>{discuss.message}</Text>
            </View>
        </View>
    )
}
