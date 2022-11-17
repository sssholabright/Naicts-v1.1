import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CourseList({img, title, bg, onPress, navigation}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.CourseContainer}>
            <Image source={img} style={{width: 40, height: 40}} />
                <View>
                    <Text style={{color: "#345c74", fontSize: 13, paddingHorizontal: 20, width: 170}}>{title}</Text>
                    <Text style={{color: "#f58084", fontSize: 12, paddingHorizontal: 20}}>10 hours, 19 lessons</Text>
                </View>
                <Text style={{color: "#345c74", fontSize: 13, paddingLeft: 10, paddingRight: 10}}>25%</Text>
                    {/*<ProgressCircle
                        percent={30}
                        radius={17}
                        borderWidth={1.5}
                        color="f580084"
                        shadowColor="#FFF"
                        bgColor="#FFF"
                    >
                        <Image
                            source={require('../images/pl.png')}
                        />
                    </ProgressCircle>*/}

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    CourseContainer: {
        flexDirection: "row",
        backgroundColor: '#fdddf3',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
        marginTop: 10
    }, 
})