import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons'

export default function DiscussionPage({navigation}) {
    const [message, setMessage] = useState("")
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={{backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, minHeight: '16%',}}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back" size={24} />
                </TouchableOpacity>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} /> 
                    <Text style={{fontWeight: '700', fontSize: 20}}>Morning Meditators</Text>
                    <Text style={{fontSize: 14, color: 'gray'}}>85 members</Text>
                </View>
                <TouchableOpacity activeOpacity={0.9}>
                    <Icon name="md-notifications-outline" size={24} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{height: '84%'}}>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/2.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Anna  <Text style={{backgroundColor: '#fff', fontSize: 10, fontWeight: '500', borderRadius: 10, }}>   ADMIN   </Text> <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{marginHorizontal: 10, width: 250}}>
                        <Text style={{fontWeight: '700', fontSize: 15}}>Mario   <Text style={{fontWeight: '400', fontSize: 12, color: 'gray'}}>38 mins ago</Text></Text>
                        <Text style={{fontWeight: '400', fontSize: 15}}>Looking forward to the next group medid at ai on. Loved the last one!</Text>
                    </View>
                </View>
                
            <View style={{height: 100}} />
            </ScrollView>

            {/* Message SECTION */}
            <View style={{flexDirection: 'row', paddingHorizontal: 20,  paddingBottom: 20, paddingTop: 10,  width: '100%', justifyContent: 'space-between', position: 'absolute', bottom: 0, backgroundColor: '#fff'}}>
                
                {/* Message Box */}
                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5, paddingHorizontal: 10, backgroundColor: 'whitesmoke', width: '100%', borderRadius: 25}}>
                    <TextInput 
                        placeholder="Message..." 
                        style={{ flex: 1, fontSize: 16, padding: 5 }}
                        multiline 
                        value={message} 
                        onChangeText={(message) => setMessage(message)} 
                    />
                    <TouchableOpacity activeOpacity={0.5}>
                        <Icon name="send" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})