import { Platform, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {  Ionicons  } from '@expo/vector-icons';
import ProductCard from './ProductCard';
import { Items } from '../AllTempData';

export default function MarketPlace({navigation}) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff'}}>
            <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Header Icons (basket and cart) */}
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 16}}>
                    <TouchableOpacity style={{ padding: 10, borderRadius: 10, backgroundColor: '#F0F0F3'}} onPress={() => navigation.goBack()}>
                        {Platform.OS === "android" ? (
                            <Ionicons name="arrow-back" size={24} color='gray' /> 
                        ): Platform.OS === "ios" (
                            <Ionicons name="chevron-back" size={24} color='gray' />
                        )}
                    </TouchableOpacity>
                </View>

                {/* Header Description */}
                <View style={{marginBottom: 10, padding: 15}}>
                    <Text style={{ fontSize: 26, color: '#000', fontWeight: '500', letterSpacing: 1, marginBottom: 10}}>
                        ICT E-Marketplace Advertise & Service
                    </Text>
                    <Text style={{ fontSize: 14, color: '#000', fontWeight: '400', letterSpacing: 1, lineHeight: 24}}>
                        Audio shop on Rustaveli Ave 57.
                        {'\n'}This platform offers both products and services
                    </Text>
                </View>
        
                {/* Products LIST */}
                <View style={{ padding: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{ fontSize: 18, color: '#000', fontWeight: '500', letterSpacing: 1}}>
                                Products
                            </Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("productlist")}>
                            <Text style={{fontSize: 14, color: '#ef018a', fontWeight: '500'}}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        {Items.map(data => (
                            <ProductCard data={data} onPress={() => navigation.navigate('productinfo', {data: data})} key={data.id} />
                        ))}
                    </View>
                </View>
        
                {/* Accessories LIST */}
                <View style={{padding: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{ fontSize: 18, color: '#000', fontWeight: '500'}}>Accessories</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={{fontSize: 14, color: '#ef018a', fontWeight: '500'}}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        {Items.map(data => {
                            return <ProductCard data={data} key={data.id} />;
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
