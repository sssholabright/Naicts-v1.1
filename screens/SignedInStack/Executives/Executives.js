import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Executives({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#000' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#000' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, fontWeight: '700'}}>EXECUTIVES</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <View>
                <View style={{marginVertical: 10}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>Meet Your Executives</Text>
                    <Text style={{color: 'gray'}}>From 2020/2021 - Till date</Text>
                </View>
                <Text style={{fontWeight: '500', fontSize: 15, marginTop: 20}}>ADMINISTRATIONS</Text>
                <View style={{marginVertical: 10, flexDirection: 'row', flexWrap: 'wrap'}}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.adminBox} onPress={() => navigation.navigate('excos')}>
                        <Text style={{fontSize: 15, fontWeight: '500', color: '#ef018a', textAlign: 'center'}}>2020/2021</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.adminBox}>
                        <Text style={{fontSize: 15, fontWeight: '500', color: '#ef018a', textAlign: 'center'}}>2021/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.adminBox}>
                        <Text style={{fontSize: 15, fontWeight: '500', color: '#ef018a', textAlign: 'center'}}>2022/2023</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        padding: 20
    },

    adminBox: {
        backgroundColor: 'whitesmoke', 
        marginRight: 10, 
        marginVertical: 10, 
        width: 130, 
        borderRadius: 10, 
        padding: 10, 
        marginLeft: 10,
        paddingVertical: 20,
        // Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    }
})