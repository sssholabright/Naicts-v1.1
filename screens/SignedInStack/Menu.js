
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Menu({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ScrollView>
                <View style={styles.detailBoxContainer}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox} onPress={() => navigation.navigate("members")}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Members.png')} />
                        <Text>Members</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Members.png')} />
                        <Text>Ciculars</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Disscussion.png')} />
                        <Text>Discussion Forum</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailBoxContainer}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox} onPress={() => navigation.navigate("event")}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Events.png')} />
                        <Text>Events</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Gallery.png')} />
                        <Text>Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Documents .png')} />
                        <Text>Files</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailBoxContainer}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Polls.png')} />
                        <Text>Polls</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Complaint.png')} />
                        <Text>Complaints</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox} onPress={() => navigation.navigate('ranking')}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Ranking .png')} />
                        <Text>Rankings</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailBoxContainer}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Details .png')} />
                        <Text>Association Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox} onPress={() => navigation.navigate('executives')}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Executives .png')} />
                        <Text>Executives</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Help.png')} />
                        <Text>Contact Us</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailBoxContainer}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox} onPress={() => navigation.navigate("elearning")}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Details .png')} />
                        <Text>E-Learning</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Executives .png')} />
                        <Text>Executives</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={styles.detailBox}>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/Help.png')} />
                        <Text>Help</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        height: '100%',
    },

    detailBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    detailBox: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        width: 100,
        textAlign: 'center',

        // Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    }
})