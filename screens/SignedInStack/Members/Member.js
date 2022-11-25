import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Member({member, containerStyle}) {
    return (  
        <View style={{...containerStyle}}>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={{
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    backgroundColor: 'whitesmoke', 
                    padding: 10, 
                    borderRadius: 10, 
                    marginBottom: -5
                }}>
                <Image 
                    source={member.img} 
                    style={{
                        width: 50, 
                        height: 50, 
                        borderRadius: 20
                    }} 
                />
                <View style={{marginLeft: 20}}>
                    <Text style={{fontSize: 16, color: 'gray'}}>{member.name}</Text>
                </View>
            </TouchableOpacity> 
        </View>
    )
}
