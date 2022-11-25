import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function CoursesCard({containerStyle, card}) {
    return (
        <TouchableOpacity style={{flexDirection: 'row', ...containerStyle}} activeOpacity={0.5}>
            <ImageBackground 
                resizeMode="cover" 
                source={card.thumbnail} 
                style={{
                    width: 130, 
                    height: 130, 
                    marginBottom: 15
                }}
                imageStyle={{
                    borderRadius: 15 
                }}>
                <View style={{
                    position: 'absolute', 
                    top: 10, 
                    right: 10, 
                    width: 30, 
                    height: 30, 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    borderRadius: 5, 
                    backgroundColor: '#fff'
                }}>
                    <Entypo name="heart" size={18} color={card.is_favourite ? 'gray' : 'red'} />
                </View>
            </ImageBackground>

                {/* Details */}
                <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}>{card.title}</Text>

                    {/* Instructor & Duration */}
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <Text style={{fontWeight: '400', marginRight: 10}}>By {card.instructor}</Text>
                        <Entypo name="time-slot" size={15} color="gray" />
                        <Text style={{marginLeft: 5}}>{card.duration}</Text>
                    </View>

                    {/* Price & Ratings */}
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <Text style={{color: 'lightgreen', fontWeight: '500', marginRight: 30}}>${card.price.toFixed(2)}</Text>
                        <Entypo name="star" size={15} color='orange' />
                        <Text style={{marginLeft: 5, fontWeight: '500'}}>{card.ratings}</Text>
                    </View>
                </View>

        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({})