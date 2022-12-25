import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function AcceptedChats({chat, index, navigation, unread, lastMessage}) {
    return (
        <View key={index} style={{}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("messagescreen", {id: chat.id, name: chat.senderName})} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between', padding: 15, marginBottom: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontWeight: '700', fontSize: 16}}>{chat.senderName}</Text>
                        <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>{lastMessage/*Last Message is meant fo...*/}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontWeight: '400', fontSize: 14, color: 'gray'}}>04:36 AM</Text>
                    <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: '#f25fb9', alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
                        <Text style={{fontWeight: '700', fontSize: 10, color: '#fff'}}>{unread}</Text>
                    </View>
                </View>
            </TouchableOpacity>                    
        </View>
    )
}
