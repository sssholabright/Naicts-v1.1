import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'

export default function Participant() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={{flexDirection: "row", justifyContent: 'space-between', padding: 20}}>
                <TouchableOpacity activeOpacity={0.9} style={styles.iconBox}>
                    <Icon name="add" size={24} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.iconBox}>
                    <Icon name="airplane" size={24} />
                </TouchableOpacity>
            </View>
            <View>
                <Image source={require('../../../assets/me.jpg')} style={{width: 100, height: 100}} />
            </View>
            <View>
                <Text>Morning Meditators</Text>
                <Text>Some uplifting guided medidataions for all you eairly rise to kick start your day.</Text>
            </View>
            <View>
                <Image source={require('../../../assets/me.jpg')} style={{width: 100, height: 100}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 100, height: 100}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 100, height: 100}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 100, height: 100}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 100, height: 100}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 100, height: 100}} />
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.9} style={styles.joinButton}>
                    <Text style={{color: '#fff'}}>Join Circle</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        padding: 20
    },

    iconBox: {
        backgroundColor: 'whitesmoke',
        padding: 5,
        borderRadius: 10
    }
})