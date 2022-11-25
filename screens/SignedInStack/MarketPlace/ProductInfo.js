import { Dimensions, Image, Platform, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const width = Dimensions.get("screen").width;

export default function ProductInfo({route, navigation}) {
    const data = route.params.data;
    
    return (
        <View style={{ height: '100%', backgroundColor: '#fff'}}>
            <StatusBar backgroundColor='#fff' barStyle="dark-content" />
            <ScrollView>
                <View style={{ borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: 50, padding: 15, margin: 20, backgroundColor: 'whitesmoke'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        {Platform.OS === "android" ? (
                            <Ionicons name="arrow-back" size={24} color='gray' /> 
                        ): Platform.OS === "ios" (
                            <Ionicons name="chevron-back" size={24} color='gray' />
                        )}
                    </TouchableOpacity>
                </View>
 
                {/* Product Images */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection: 'row', marginTop: -30}}>
                        {data.productImageList.map((data) => (
                            <View key={data.id} style={{flexDirection: 'row', width: width-150, height: 240, alignItems: 'center', justifyContent: 'center'}}>
                                <Image source={data} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                {/* Product name and description */}
                <View style={{paddingHorizontal: 16, marginTop: 6}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 14}}>
                        <Entypo name="shopping-cart" size={18} color="#ef018a" />
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#000'}}>Shopping</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginVertical: 4, alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 24, fontWeight: '600', marginVertical: 4, color: '#000', maxWidth: '84%'}}>
                            {data.productName}
                        </Text>
                    </View>
                    <Text style={{fontSize: 12, color: '#000', fontWeight: '400', opacity: 0.5, lineHeight: 20, maxWidth: '85%', maxHeight: 70, marginBottom: 18}}>
                        {data.description}
                    </Text>

                    {/* User Address / location */}
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 14, marginTop: 50, borderBottomColor: 'whitesmoke', borderBottomWidth: 1, paddingBottom: 20}}>
                        <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center'}}>
                            <View style={{ color: 'blue', backgroundColor: 'whitesmoke', alignItems: 'center', justifyContent: 'center', padding: 12, borderRadius: 100, marginRight: 10}}>
                                <Entypo name="location-pin" size={18} color="#ef018a"/>
                            </View>
                            <Text> Rustaveli Ave 57,{'\n'}17-001, Batume</Text>
                        </View>
                        <Entypo name="chevron-right" size={22} color='#000' />
                    </View>

                    {/* Product Price */}
                    <View style={{paddingHorizontal: 16}}>
                        <Text style={{ fontSize: 18, fontWeight: '500', maxWidth: '85%', color: '#000', marginBottom: 4}}>
                            ${data.productPrice}.00
                        </Text>
                    </View>
                </View>
            </ScrollView>

            {/* Contact Button */}
            <View style={{ position: 'absolute', bottom: 10, height: '8%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{width: '86%', flexDirection: 'row', height: '90%', backgroundColor: 'green', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <MaterialCommunityIcons name="whatsapp" size={20} color="#fff" />
                    <Text style={{fontSize: 12, fontWeight: '500', letterSpacing: 1, color: 'white', textTransform: 'uppercase'}}>
                        {data.isAvailable ? ' Contact Us' : 'Not Avialable'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
