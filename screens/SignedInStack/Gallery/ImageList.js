import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default function ImageList({ navigation, route }) {
    const { images } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', backgroundColor: '#f25fb9' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}></Text>
                </View>
                <Text style={{ fontSize: 15, padding: 10 }}>Naicts Football 2023 with the vice chancellor</Text>
                <ScrollView pagingEnabled showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        {images.map((image, index) => (
                            <TouchableOpacity key={index} style={{marginBottom: 2}} activeOpacity={0.7} onPress={() => navigation.navigate('showimage', { images })}>
                                <Image
                                    key={index}
                                    source={image}
                                    style={{
                                        width: width / 3,
                                        height: width / 3,
                                    }}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
        