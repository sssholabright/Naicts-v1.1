import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Excos({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ScrollView style={styles.excosContainer}>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '500'}}>2022/2023 ADMINISTRATION</Text>
                <View>
                    {/* President box */}
                    <TouchableOpacity activeOpacity={0.9} style={styles.excoBox}>
                        <Image source={require('../../assets/me.jpg')} style={{width: '100%', height: 300, borderRadius: 15}} />
                        <View style={{marginVertical: 10, alignItems: 'center'}}>
                            <Text style={{fontWeight: '500', fontSize: 16}}>Mujeeb Adejobi</Text>
                            <Text style={{color: 'gray', fontSize: 20 }}>Technical Director</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Other executives box */}
                    <View style={{marginBottom: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
                        <TouchableOpacity activeOpacity={0.9} style={[styles.excoBox, {width: '46%', marginRight: 10}]}>
                            <Image source={require('../../assets/me.jpg')} style={{width: '100%', height: 200, borderRadius: 15}} />
                            <View style={{marginVertical: 10, padding: 5, alignItems: 'center'}}>
                                <Text style={{fontWeight: '500', fontSize: 16}}>Mujeeb Adejobi</Text>
                                <Text style={{color: 'gray', fontSize: 13 }}>Technical Director</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} style={[styles.excoBox, {width: '46%', marginRight: 10}]}>
                            <Image source={require('../../assets/me.jpg')} style={{width: '100%', height: 200, borderRadius: 15}} />
                            <View style={{marginVertical: 10, padding: 5, alignItems: 'center'}}>
                                <Text style={{fontWeight: '500', fontSize: 16}}>Mujeeb Adejobi</Text>
                                <Text style={{color: 'gray', fontSize: 13 }}>Technical Director</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} style={[styles.excoBox, {width: '46%', marginRight: 10}]}>
                            <Image source={require('../../assets/me.jpg')} style={{width: '100%', height: 200, borderRadius: 15}} />
                            <View style={{marginVertical: 10, padding: 5, alignItems: 'center'}}>
                                <Text style={{fontWeight: '500', fontSize: 16}}>Mujeeb Adejobi</Text>
                                <Text style={{color: 'gray', fontSize: 13 }}>Technical Director</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} style={[styles.excoBox, {width: '46%', marginRight: 10}]}>
                            <Image source={require('../../assets/me.jpg')} style={{width: '100%', height: 200, borderRadius: 15}} />
                            <View style={{marginVertical: 10, padding: 5, alignItems: 'center'}}>
                                <Text style={{fontWeight: '500', fontSize: 16}}>Mujeeb Adejobi</Text>
                                <Text style={{color: 'gray', fontSize: 13 }}>Technical Director</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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

    excosContainer: {
        padding: 20
    },

    excoBox: {
        width: '100%', 
        justifyContent: 'center', 
        borderRadius: 15, 
        marginVertical: 20,
        alignItems: 'center',  
        backgroundColor: 'whitesmoke',
        // Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    }
})