import { ActivityIndicator, Animated, FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Ranking({navigation}) {
    const [data, setData] = useState([{
        title: "Alonco Lee",
        img: "http://localhost:19006/static/media/img2.c47ccd9e.jpeg"
    }, {
        title: "Alonco Lee",
        img: "http://localhost:19006/static/media/img2.c47ccd9e.jpeg"
    }, {
        title: "Alonco Lee",
        img: "http://localhost:19006/static/media/img2.c47ccd9e.jpeg"
    }, {
        title: "Alonco Lee",
        img: "http://localhost:19006/static/media/img2.c47ccd9e.jpeg"
    }, {
        title: "Alonco Lee",
        img: "http://localhost:19006/static/media/img2.c47ccd9e.jpeg"
    }, {
        title: "Alonco Lee",
        img: "http://localhost:19006/static/media/img2.c47ccd9e.jpeg"
    }, {
        title: "Alonco Lee",
        img: "http://localhost:19006/static/media/img2.c47ccd9e.jpeg"
    }, {
        title: "Alonco Lee",
        img: "http://localhost:19006/static/media/img2.c47ccd9e.jpeg"
    }, {
        title: "Alonco Lee",
        img: "http://localhost:19006/static/media/img2.c47ccd9e.jpeg"
    }, 

])
    const [isLoading, setIsLoading] = useState(false);
  
    const BG_IMG = "";
    const ITEM_MARGIN_BOTTOM = 20;
    const ITEM_PADDING = 10;
    const HEIGHT_IMG = 100;
    // This is the height of 1 item
    const ITEM_SIZE = HEIGHT_IMG + ITEM_PADDING * 2 + ITEM_MARGIN_BOTTOM

    const scrollY = useRef(new Animated.Value(0)).current;

    const renderItem = ({item, index}) => {
        const scale = scrollY.interpolate({
            inputRange: [
                -1, 0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 2)
            ],
            outputRange: [1, 1, 1, 0]
        })
        const opacity = scrollY.interpolate({
            inputRange: [
                -1, 0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + .6)
            ],
            outputRange: [1, 1, 1, 0]
        })
        return (
            <TouchableOpacity activeOpacity={0.9}>
                <Animated.View style={[styles.item, {transform: [{scale}], opacity}]}>
                    <Image style={styles.image} source={require('../../assets/me.jpg')} /> 
                    <View style={styles.wrapText}>
                        <Text style={{backgroundColor: '#ef018a', color: "#fff", fontWeight: '700', fontSize: 18, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 50, textAlign: 'center'}}>{index+1}</Text>
                        <Text style={{fontSize: 18, fontWeight: '700'}}>Alonco Lee</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#ef018a" />
            <ImageBackground style={StyleSheet.absoluteFillObject} source={require('../../assets/2.jpg')} blurRadius={30} />
                <View style={styles.header}>
                    <TouchableOpacity style={{position: 'absolute', top: 15, left: 15}} onPress={() => navigation.goBack()} activeOpacity={0.6}>
                        <Icon name='chevron-back' size={24} color='#fff' />
                    </TouchableOpacity>
                    <Text style={{fontSize: 30, color: "#fff", fontWeight: '700', fontStyle: 'italic'}}>Ranking</Text>
                </View>
                {isLoading ? <ActivityIndicator style={{marginTop: 100}} size="large" /> : (
                    <Animated.FlatList
                        data={data}
                        keyExtractor={item => `key=${item.id}`}
                        renderItem={renderItem}
                        contentContainerStyle={{
                            padding: 20,

                        }}
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {y: scrollY}}}],
                            {useNativeDriver: true}
                        )}
                    />
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 

    header: {
        backgroundColor: '#ef018a',
        paddingVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 80, 
        height: 80,
        borderRadius: 50
    },

    wrapText: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        width: '50%'
    },

    item: {
        flexDirection: 'row',
        marginBottom: 20, 
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: .3,
        shadowRadius: 20,
        padding: 10,
    }
})