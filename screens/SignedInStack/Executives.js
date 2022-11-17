import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Executives({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ScrollView style={styles.excoContainer}>
                <View style={{marginVertical: 10, marginLeft: 10}}>
                    <Text style={{fontSize: 30}}>Meet Our Executives</Text>
                    <Text style={{color: 'gray'}}>From 2020/2021 - Till date</Text>
                </View>
                <Text style={{fontWeight: '500', fontSize: 15, marginLeft: 10}}>ADMINISTRATIONS</Text>
                <View style={{marginVertical: 10, flexDirection: 'row', flexWrap: 'wrap'}}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.adminBox} onPress={() => navigation.navigate('excos')}>
                        <Text style={{fontSize: 15, fontWeight: '500', textAlign: 'center'}}>2020/2021</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.adminBox}>
                        <Text style={{fontSize: 15, fontWeight: '500', textAlign: 'center'}}>2021/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.adminBox}>
                        <Text style={{fontSize: 15, fontWeight: '500', textAlign: 'center'}}>2023/2023</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff'
    },

    excoContainer: {
        padding: 10
    },

    adminBox: {
        backgroundColor: 'whitesmoke', 
        marginRight: 10, 
        marginVertical: 10, 
        width: 150, 
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