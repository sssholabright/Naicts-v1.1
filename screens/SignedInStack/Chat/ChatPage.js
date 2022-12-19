import React from 'react';
import { Image, Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatPage({navigation}) {
    return (
        <SafeAreaView style={{height: '100%', backgroundColor: 'whitesmoke'}}>
            <StatusBar barStyle="light-content" backgroundColor='#f25fb9' />
            {/* Header Container */}
            <View style={{ backgroundColor: '#f25fb9', padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity>
                <View style={{marginLeft: 20}}>
                    <Text style={{fontWeight: '700', fontSize: 20, color: '#fff'}}>Chat Page</Text>
                </View>
                <Text>{'                 '}</Text>  
            </View>

            {/* Body Container */}
            <ScrollView>
                <View style={{padding: 20}}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("messagescreen")} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between', padding: 15, marginBottom: 10}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontWeight: '700', fontSize: 16}}>Mujeeb Adejobi</Text>
                                <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>Last Message is meant fo...</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontWeight: '400', fontSize: 14, color: 'gray'}}>04:36 AM</Text>
                            <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: '#f25fb9', alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
                                <Text style={{fontWeight: '700', fontSize: 10, color: '#fff'}}>1</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between', padding: 15, marginBottom: 10}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../../assets/ife.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontWeight: '700', fontSize: 16}}>Ifeoluwa Babatunde</Text>
                                <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>What do you mean by...</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontWeight: '400', fontSize: 14, color: 'gray'}}>09:34 PM</Text>
                            <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: '#f25fb9', alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
                                <Text style={{fontWeight: '700', fontSize: 10, color: '#fff'}}>15</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}