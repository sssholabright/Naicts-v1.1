import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { images } from './Images';

const { width, height } = Dimensions.get('window');


export function HeaderTabs({ activeTab, setActiveTab }) {
    return (
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <HeaderButton
                text="Photos"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Folders"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

export function HeaderButton({ text, activeTab, setActiveTab }) {
    return (
        <TouchableOpacity
            onPress={() => setActiveTab(text)}
            style={{
                backgroundColor: 'transparent',
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,
            }}
        >
            <Text style={{color: activeTab === text ? '#f25fb9' : 'gray', fontSize: 15, fontWeight: '700'}}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export function GalleryPhotos({onPress, images}) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {images.map((image, index) => (
                        <TouchableOpacity key={index} style={{marginBottom: 2}} activeOpacity={0.7} onPress={onPress}>
                            <Image
                                key={index}
                                source={image.url}
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
    )
}

export function GalleryFolders({onPress, images}) {
    return (
        <View style={{flex: 1, marginTop: 10, backgroundColor: '#fff'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection: 'row',  paddingHorizontal: 10, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
                    {images.map((image, index) => (
                        <View key={index} style={{marginBottom: 15}}>
                            <TouchableOpacity key={index} style={{marginBottom: 2}} activeOpacity={0.7} onPress={onPress}>
                                <Image
                                    key={index}
                                    source={image.url}
                                    style={{
                                        width: width / 2.5,
                                        height: width / 2.5,
                                        borderRadius: 15
                                    }}
                                />
                            </TouchableOpacity>
                            <Text style={{textAlign: 'center', fontWeight: '700', fontSize: 15, width: 150, textAlign: 'center'}}>Naicts Football 2023 with the vice chancellor {index + 1}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default function Gallery({ navigation }) {
    const [activeTab, setActiveTab] = useState('Photos');
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            <View style={{flexDirection: 'row-reverse', justifyContent: 'flex-end', marginBottom: 10, paddingHorizontal: 20, paddingTop: 15, paddingBottom: 0, alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: '700', marginLeft: 30, }}>Gallery</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={30} color="#f25fb9" />
                </TouchableOpacity>
            </View>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <View style={{flex: 1}}>
                {activeTab === 'Photos' ? (
                    <GalleryPhotos images={images} onPress={() => navigation.navigate('showimage', {images: images})} />
                ) : (
                    <GalleryFolders images={images} onPress={() => navigation.navigate('imagelist', {images: images})} />
                )}
            </View>
        </SafeAreaView>
    )
}

