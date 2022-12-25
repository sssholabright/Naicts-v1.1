import { Dimensions, Image, Linking, Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment/moment';

const width = Dimensions.get("screen").width;

export default function ProductInfo({route, navigation}) {
    const data = route.params.data;

    const callSeller = () => {
        Linking.openURL(`tel:${data.sellerPhoneNumber}`)
    }

    const messageSeller = () => {
        Linking.openURL(`https://wa.me/${data.sellerPhoneNumber}`)
    }

    const deleteProduct = () => {
        
    }


    
    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: '#f2f2f2'}}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            <View style={{flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingTop: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <Text style={{fontSize: 20, fontWeight: '700', color: '#fff'}}>Product Info</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={deleteProduct}>
                    <MaterialCommunityIcons name="delete" size={24} color='#fff' />
                </TouchableOpacity>
            </View>
 
            {/* Product Images */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row', marginTop: -15}}>
                    <View style={{flexDirection: 'row', width: width-150, height: 240, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={{uri: data.productImage1}} resizeMode='cover' style={{width: '100%', height: '100%'}}/>
                    </View>
                    <View style={{flexDirection: 'row', width: width-150, height: 240, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={{uri: data.productImage2}} resizeMode='cover' style={{width: '100%', height: '100%'}}/>
                    </View>
                    <View style={{flexDirection: 'row', width: width-150, height: 240, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={{uri: data.productImage3}} resizeMode='cover' style={{width: '100%', height: '100%'}}/>
                    </View>
                </View>
            </ScrollView>

            {/* Product name and description */}
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 20, marginTop: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', aligItems: 'center'}}>
                        <Entypo name="shopping-cart" size={18} color="#ef018a" />
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#000'}}>{data.productCategory}</Text>
                    </View>
                    <View style={{flexDirection: 'row', aligItems: 'center'}}>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#000'}}>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginVertical: 4, alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 24, fontWeight: '600', marginVertical: 4, color: '#000', maxWidth: '84%'}}>
                        {data.productName}
                    </Text>
                </View>
                <Text style={{fontSize: 12, color: '#000', fontWeight: '400', opacity: 0.5, lineHeight: 20, maxWidth: '85%',  marginBottom: 18}}>
                    {data.productDescription}
                </Text>

                {/* Seller Info */}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, padding: 10}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{ color: 'blue', backgroundColor: 'whitesmoke', alignItems: 'center', justifyContent: 'center', padding: 12, borderRadius: 100, marginRight: 10}}>
                            <MaterialCommunityIcons name="account-circle" size={18} color="#ef018a"/>
                        </View>
                        <Text>{data.sellerName} {'\n'}{data.sellerEmail}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} onPress={callSeller}>
                        <MaterialCommunityIcons name="phone" size={22} color='gray' />
                    </TouchableOpacity>
                </View>

                {/* User Address / location */}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, borderBottomColor: 'whitesmoke', borderBottomWidth: 1, padding: 10, backgroundColor: '#fff', borderRadius: 10}}>
                    <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center'}}>
                        <View style={{ color: 'blue', backgroundColor: 'whitesmoke', alignItems: 'center', justifyContent: 'center', padding: 12, borderRadius: 100, marginRight: 10}}>
                            <Entypo name="location-pin" size={18} color="#ef018a"/>
                        </View>
                        <Text>{data.sellerLocation} {'\n'}Kwara State University</Text>
                    </View>
                    <Entypo name="" size={22} color='#000' />
                </View>

                {/* Product Price */}
                <View style={{paddingHorizontal: 20, marginTop: 20}}>
                    <Text style={{ fontSize: 18, fontWeight: '500', maxWidth: '85%', color: '#000', marginBottom: 4}}>
                        ₦{data.productPrice}.00
                    </Text>
                </View>
                <View style={{height: 100}} />
            </ScrollView>

            {/* Contact Button */}
            <View style={{ position: 'absolute', bottom: 10, height: '8%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={0.9} style={{width: '86%', flexDirection: 'row', height: '90%', backgroundColor: 'green', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}} onPress={messageSeller}>
                    <MaterialCommunityIcons name="whatsapp" size={20} color="#fff" />
                    <Text style={{fontSize: 12, fontWeight: '500', letterSpacing: 1, color: 'white', textTransform: 'uppercase'}}>
                        {' '}Contact Us
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
