import { Platform, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {  Ionicons  } from '@expo/vector-icons';
import ProductCard from './ProductCard';
import { Items } from '../AllTempData';

export default function MarketPlace({navigation}) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff'}}>
            <StatusBar backgroundColor="#f25fb9" barStyle="light-content" />

                {/* Header Icons (basket and cart) */}
            <View style={{flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, color: '#fff', fontWeight: '700'}}>MARKETPLACE</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
       
        
        <ScrollView showsVerticalScrollIndicator={false}>

                {/* Header Description */}
                <View style={{marginBottom: 10, padding: 15}}>
                    <Text style={{ fontSize: 26, color: '#000', fontWeight: '500', letterSpacing: 1, marginBottom: 10}}>
                        ICT E-Marketplace Advertise & Service
                    </Text>
                    <Text style={{ fontSize: 14, color: '#000', fontWeight: '400', letterSpacing: 0.2, lineHeight: 24}}>
                        ICT E-Marketplace is a great way to reach your target audience.{'\n'}You can advertise your products and services to a large audience of ICT professionals and students.{'\n'}
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
