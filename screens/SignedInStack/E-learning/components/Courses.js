import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function Courses({containerStyle, course}) {
    return (
        <TouchableOpacity style={{width: 270, ...containerStyle}} activeOpacity={0.5}>
            <Image 
                source={course.thumbnail} 
                resizeMode="cover" 
                style={{
                    width: "100%", 
                    height: 150, 
                    marginBottom: 15, 
                    borderRadius: 15}} 
            />
            
            {/* Details SECTION */}
            <View style={{flexDirectio: 'row'}}>
                {/* Play Icon */}
                <View style={{width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: '#fff'}}>
                    <Entypo name='play' size={24} />
                </View>
                {/* Info section */}
                <View style={{flexShrink: 1, paddingHorizontal: 15}}>
                    <Text style={{flex: 1, fontSize: 18}}>{course.title}</Text>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image />
                        <Text style={{marginLeft: 10, color: 'gray'}}>{course.duration}</Text> 
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})