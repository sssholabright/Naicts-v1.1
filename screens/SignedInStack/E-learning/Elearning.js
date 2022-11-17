import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import CourseList from './CourseList'

export default function Elearning({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ImageBackground source={require('../../../assets/Home.png')}  resizeMode="cover" style={styles.backgroundImg}>
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <View style={styles.container2}>
                            <Icon name='more' size={24} />
                       </View>
                    </View>
                    <Text style={{paddingHorizontal: 20, fontSize: 35, paddingTop: 40, color: "#fff"}}>Welcome back Mikolaj</Text>

                    <View style={styles.searchInputContainer}>
                        <TextInput
                            placeholder="Search for new knowledge!"
                            placeholderTextColor="#345c74"
                            style={styles.textInput} />
                        <Icon name='search' size={20} />
                    </View>
                    <View style={styles.textContainer}>
                        <View>
                            <Text style={{ color: "#345c74", fontSize: 18, width: 180}}>Start learning new Staff</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('courses')} style={styles.textButton}>
                                <Text style={{color: "#fff", fontSize: 12, marginTop: -2}}>Categories</Text>  
                                <Icon name='chevron-forward' size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '50%'}}>
                            <Image source={require('../../../assets/undraw.png')} style={{marginTop: 35, width: 200, height: 100}} />
                        </View>
                    </View>
                    <Text style={{ color: "#345c74", fontSize: 20, paddingHorizontal: 20, marginTop: 20, marginBottom: 10}}>Courses in progress</Text>

                    <CourseList
                        img={require('../../../assets/xd.png')}
                        title="Adobe XD Prototyping"
                        bg="#fdddf3"
                    />
                    <CourseList
                        img={require('../../../assets/sketch.png')}
                        title="Sketch shortcuts and tricks"
                        bg="#fef8e3"
                    />
                    <CourseList
                        img={require('../../../assets/ae.png')}
                        title="UI Motion Design in After Effects"
                        bg="#fcf2ff"
                    />
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
    },

    backgroundImg: {
        flex: 1,
        justifyContent: 'center'
    },
    
    headerContainer: {
        width: "100%",
        alignItems: "flex-end",
        paddingHorizontal: 20
    },
    
    container2: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "#d1a0a7",
    },

    searchInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: 20
    },
    
    textInput: {
        fontFamily: "bold",
        fontSize: 12,
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 10
    },

    textContainer: {
        flexDirection: "row",
        backgroundColor: "#fff2f2",
        marginTop: 15,
        marginHorizontal: 20,
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },
   
    textButton: {
        flexDirection: "row",
        backgroundColor: "#f58084",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 20,
        width: 120,
        padding: 10,
        borderRadius: 14,
    },
})