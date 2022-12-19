import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Member({member, containerStyle, onPress}) {
    return (  
        <View style={{...containerStyle}}>
            <TouchableOpacity 
                key={member.index}
                activeOpacity={0.8} 
                onPress={onPress}
                style={{
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    backgroundColor: 'white', 
                    padding: 10, 
                    borderWidth: 1,
                    borderColor: 'whitesmoke',
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
                    <Text style={{fontSize: 16, color: '#000'}}>{member.firstName} {member.lastName}</Text>
                    <Text style={{fontSize: 11, color: 'gray'}}>{member.department}</Text>
                </View>
            </TouchableOpacity> 
        </View>
    )
}
