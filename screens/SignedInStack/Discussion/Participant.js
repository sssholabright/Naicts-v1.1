import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'

export default function Participant({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                <TouchableOpacity activeOpacity={0.9} style={styles.iconBox} onPress={() => navigation.goBack()}>
                    <Icon name="add" size={24} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.iconBox}>
                    <Icon name="airplane" size={24} />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
                <Image source={require('../../../assets/me.jpg')} style={{width: 100, height: 100, borderRadius: 50}} />
                <Text style={{marginVertical: 5, fontSize: 25, fontWeight: '700'}}>Morning Meditators</Text>
                <Text style={{fontSize: 14, fontWeight: '500', color: 'gray', textAlign: 'center', paddingHorizontal: 30}}>Some uplifting guided medidataions for all you eairly rise to kick start your day.</Text>
            </View>
            <View style={{flexDirection: "row", flexWrap: 'wrap', marginTop: 10}}>
                <View>
                    <Image source={require('../../../assets/2.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                    <Text style={{position: 'absolute', bottom: 0, left: 20, backgroundColor: '#fff', fontSize: 10, padding: 3, paddingHorizontal: 5, borderWidth: 1, borderColor: 'lightgray', borderRadius: 10}}>ADMIN</Text>
                </View>
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50, margin: 5}} />
                <View style={{width: 70, height: 70, borderRadius: 50, margin: 5, backgroundColor: 'whitesmoke', justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '700'}}>75</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.9} style={styles.joinButton} onPress={() => navigation.navigate('discussionpage')}>
                    <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>Join Discussion</Text>
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
    },

    joinButton: {
        backgroundColor: 'black',
        padding: 20,
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 15
    }
})