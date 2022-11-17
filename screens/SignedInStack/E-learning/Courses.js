import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CourseList from './CourseList'
import Icon from '@expo/vector-icons/Ionicons'

export default function Courses({navigation}) {
    return (
        <ImageBackground source={require('../../../assets/cat.png')} style={{width: "100%", height: "100%"}}>
            <View style={{flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 20}}>
                <TouchableOpacity onPress={() => navigation.navigate("elearning")} style={styles.backButton}>
                    <Icon name="chevron-back" size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.forwardButton}>
                    <Icon name='more' size={24}  />
                </TouchableOpacity>
            </View>
            <Text style={{color: "#fff", fontSize: 35, width: 200, alignSelf: "center", textAlign: "center", marginTop: 34}}>UI/UX Courses</Text>
            {/*<Modalize
                handleStyle={{
                    marginTop: 30,
                    backgroundColor: "#e9e9e9",
                    width: 80
                }}
                modalStyle={{
                    borderTopLeftRadius:60,
                    borderTopRightRadius:60
                }}
                alwaysOpen={500}
                scrollViewProps={{
                    showsVerticalScrollIndicator: false
                }}>*/}
                <View style={{marginTop: 40}}>
                    <CourseList
                        onPress={() => navigation.navigate("xd")}
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
                    <CourseList
                        img={require('../../../assets/f.png')}
                        title="Figma Essentials"
                        bg="#fff0ee"
                    />
                    <CourseList
                        img={require('../../../assets/ps.png')}
                        title="Adobe Photoshop. Retouching"
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
                </View>
            {/*</Modalize>*/}
        </ImageBackground>
           
    )
}

const styles = StyleSheet.create({
    backButton: {
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "#8bbcdb"
    },

    forwardButton: {
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "#8bbcdb",
        marginLeft: 240
    } 
})