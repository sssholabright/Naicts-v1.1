import { Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { executives } from '../AllTempData'

export default function Excos({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#000' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#000' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, fontWeight: '700', color: '#ef018a'}}>2022/2023 ADMINISTRATION</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.excosContainer}>
                <View>
                    {/* President box */}
                    <TouchableOpacity activeOpacity={0.9} style={styles.excoBox}>
                        <Image source={require('../../../assets/2.jpg')} style={{width: 100, height: 100, borderRadius: 50}} />
                        <View style={{marginVertical: 10, padding: 5, alignItems: 'center'}}>
                            <Text style={{fontWeight: '500', fontSize: 16}}>Bright Programmer</Text>
                            <Text style={{color: '#ef018a', fontSize: 13 }}>President</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Other executives box */}
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                        {executives.map((exco) => (
                            <TouchableOpacity activeOpacity={0.9} style={styles.excoBox}>
                                <Image source={exco.img} style={{width: 100, height: 100, borderRadius: 50}} />
                                <View style={{marginVertical: 10, padding: 5, alignItems: 'center'}}>
                                    <Text style={{fontWeight: '500', fontSize: 16}}>{exco.name}</Text>
                                    <Text style={{color: '#ef018a', fontSize: 13 }}>{exco.post}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        padding: 20
    },

    excoBox: {
        width: 150,
        height: 170,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15, 
        marginVertical: 20,
        marginHorizontal: 5,
        alignItems: 'center',  
        backgroundColor: 'white',
        // Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    }
})