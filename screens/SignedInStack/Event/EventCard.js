import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function EventCard({card, containerStyle, onPress}) {
    return (
        <View style={[{backgroundColor: '#fff', height: 250, borderRadius: 15, marginHorizontal: 10}, styles.shadow]}>
            <ImageBackground 
                resizeMode="cover" 
                source={card?.img} 
                style={{
                    width: 280, 
                    height: 180, 
                    justifyContent: 'flex-end',
                    ...containerStyle
                }}
                imageStyle={{
                    borderRadius: 15 
                }}>
                <View style={styles.textContainer}>
                    <Text style={{color: '#fff', fontSize: 18, letterSpacing: 0.3, fontWeight: '700'}}>{card?.title}</Text>
                    <Text style={{color: 'whitesmoke', fontSize: 12}}>{card?.time}</Text>
                </View>
            </ImageBackground>

            {/* Bottom Container */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 15}}>
                <View style={{flexDirection: 'row', marginLeft: 10}}>
                    {card.eventUsers.map((join, index) => (
                        <Image key={index} source={join} style={{marginLeft: -15, width: 35, height: 35, borderRadius: 50, borderWidth: 2, borderColor: 'whitesmoke'}} />
                    ))}
                    <Text style={{color: 'green', marginTop: 5, backgroundColor: 'lightgreen', opacity: 0.5, borderRadius: 15, paddingHorizontal: 10, paddingVertical: 4, height: 25}}>{card.joined}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={{backgroundColor: '#ef018a', paddingHorizontal: 15, padding: 5, borderRadius: 50, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: '#fff'}}>Join Event</Text>
                    <Entypo name="chevron-right" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: 60,
        padding: 10,
        paddingHorizontal: 20,
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15
    },

    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: .3,
        shadowRadius: 20,
        elevation: 5
    }
})