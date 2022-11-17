import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons'

export default function Profile({navigation}) {
    const [exco, setExco] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView>
                {/* Header Container consists of image, exco sign, settings and names */}
                <View style={styles.headerContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginVertical: 30}}>
                        <View />
                        <TouchableOpacity style={styles.profilePic} activeOpacity={0.9}>
                            {/*image section */}
                            <Image style={{width: 100, height: 100, borderRadius: 20}} source={require('../../assets/me.jpg')} />
                            {/* Exco sign */}
                            {exco ? (
                                <View style={{backgroundColor: 'red', borderRadius: 4, position: 'absolute', top: 20, right: -15 }}>
                                    <Text style={{color: '#fff', paddingHorizontal: 8, padding: 2}}>Pro</Text> 
                                </View>
                            ):(
                                <></>
                            )}
                        </TouchableOpacity>   
                        {/* Settings Icon Section */}                 
                        <TouchableOpacity activeOpacity={0.8}>
                            <Icon name='settings-outline' size={24} color='gray' />
                        </TouchableOpacity>
                    </View>
                    {/* Name section */}
                    <View style={{ alignItems: 'center', marginBottom: 20}}>
                        <Text style={{fontWeight: '700', fontSize: 20, color: "#1c1c1c"}}>Mujeeb Adejobi</Text>
                        <Text style={{fontWeight: '500', fontStyle: 'italic', color: "gray"}}>Class of 2023, Computer Science</Text> 
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginBottom: 30}}>
                        <TouchableOpacity activeOpacity={0.6} style={styles.messageButton}>
                            <Text style={{color: 'gray', fontSize: 13}}>Message</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Body Container consists of Personal Info, */}
                <View style={styles.otherSection}>
                    <Text style={{fontWeight: '700', fontSize: 15, marginBottom: 10}}>User Informations</Text>
                    <View>
                        <Text style={styles.info}>Male</Text>
                        <Text style={styles.info}>100 level</Text>
                        <Text style={styles.info}>Computer Science</Text>
                        <Text>{"({`Progress bar`})"}</Text>
                    </View>
                </View>
                <View style={styles.groupContainer}>
                    <Text style={{fontWeight: '700', fontSize: 18}}>Member of Group</Text>
                    <TouchableOpacity activeOpacity={0.7} style={styles.group}>
                        <View style={styles.imageContainer}>
                            <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../../assets/naicts.jpg')}  />
                        </View>
                        <View>
                            <Text style={{color: "#1c1c1c", marginLeft: 10, fontWeight: '700', fontSize: 14}}>NAICTS</Text>
                            <Text style={{color: "gray", marginLeft: 10, fontWeight: '700', fontSize: 8, marginTop: 5}}>National Information and Communication Technology Students</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.group}>
                    <View style={styles.imageContainer}>
                        <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../../assets/csc.jpg')}  />
                    </View>
                    <View>
                        <Text style={{color: "#1c1c1c", marginLeft: 10, fontWeight: '700', fontSize: 14}}>NACOSS</Text>
                        <Text style={{color: "gray", marginLeft: 10, fontWeight: '700', fontSize: 8, marginTop: 5}}>National Association of Computer Science Students</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.account}>
                <TouchableOpacity activeOpacity={0.7} style={styles.accountContain} onPress={() => navigation.navigate('editprofile')}>
                    <Icon name='person' size={24} color='gray' />
                    <Text style={{marginLeft: 10}}>My Account</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },

    headerContainer: {
        borderBottomRightRadius: 20, 
        borderBottomLeftRadius: 20, 
        //Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    },

    profilePic: {
        marginLeft: 30,
        marginBottom: -20,
        alignItems: 'center',
    },

    messageButton: {
        paddingHorizontal: 30,
        paddingVertical: 10, 
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray'
    },

    otherSection: {
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'whitesmoke',
        borderWidth: 1,
        borderColor: 'lightgray'
    },

    info: {
        marginVertical: 1,
    },

    groupContainer: {
        marginVertical: 10,
        marginHorizontal: 20,
        
    },

    group: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10, 
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        borderWidth: 1,
        borderColor: 'lightgray'
         
    },

    imageContainer: {
        backgroundColor: "whitesmoke", 
        padding: 6, 
        borderRadius: 20,
    },

    account: {
        marginHorizontal: 20,
        backgroundColor: 'whitesmoke',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
    },
    
    accountContain: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
     

})