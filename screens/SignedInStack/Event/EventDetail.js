import { ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function EventDetail({route, navigation}) {
    const detail = route.params.detail;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header Container */}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                        {Platform.OS === "android" ? (
                            <Ionicons name="arrow-back" size={24} color='#000' /> 
                        ): Platform.OS === "ios" (
                            <Ionicons name="chevron-back" size={24} color='#000' />
                        )}
                    </TouchableOpacity>
                    <View>
                        <Text style={{fontWeight: '700', fontSize: 20}}>Event Detail</Text>
                    </View>
                    <Text>{'      '}</Text>
                </View>

                {/* Image Container */}
                <ImageBackground
                    resizeMode="contain" 
                    source={detail?.img} 
                    style={{
                        width: '100%', 
                        height: 300, 
                        marginTop: 20
                    }}
                    imageStyle={{
                        borderRadius: 15 
                    }} 
                />

                {/* Content Container */}
                <View style={{marginVertical: 15, margin: 5}}>
                    {/* Title Container consists of title, organizer, location and time */}
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={{fontWeight: '500', fontSize: 25, letterSpacing: 0.2, lineHeight: 40}}>{detail.title}</Text>
                            <Text style={{fontWeight: '300', color: 'gray'}}>Organized by {detail.organizer}</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 3}}>
                                <Ionicons name="location-outline" size={18} color="#ef018a" />
                                <Text style={{color: 'gray'}}> {detail.venue}   •   </Text>
                                <Ionicons name="time-outline" size={18} color="#ef018a" />
                                <Text style={{color: 'gray'}}> {detail.time}</Text>
                            </View>
                        </View>
                        <View style={[{backgroundColor: 'whitesmoke', padding: 12,marginRight: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}, styles.shadow]}>
                            <Text>NOV</Text>
                            <Text style={{fontSize: 18, color: '#ef018a'}}>28</Text>
                        </View>
                    </View>

                    {/* Member SECTION */}
                    <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'whitesmoke', padding: 20, marginVertical: 15, borderRadius: 15}, styles.shadow]}>
                        <View style={{}}>
                            <Text>Rating</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', }}>
                            {/*detail.eventUsers.map((join, index) => (
                                <Image key={index} source={join} style={{marginLeft: -15, width: 35, height: 35, borderRadius: 50, borderWidth: 2, borderColor: 'whitesmoke'}} />
                            ))*/}
                        </View>
                    </View>

                    {/* About Section */}
                    <View style={{}}>
                        <Text style={{fontSize: 20, fontWeight: '500', lineHeight: 40 }}>About Event</Text>
                        <Text style={{fontSize: 15, color: 'gray'}}>{detail.content}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{height: 60}} />

            <View style={[{ position: 'absolute', bottom: 10, alignSelf: 'center', height: '8%', width: '100%', justifyContent: 'center', alignItems: 'center'}, styles.shadow]}>
                <TouchableOpacity activeOpacity={0.8} style={[{width: '100%', flexDirection: 'row', height: '90%', backgroundColor: '#f25fb9', borderRadius: 25, justifyContent: 'center', alignItems: 'center'}, styles.shadow]}>
                    <MaterialCommunityIcons name="chevron-triple-right" size={20} color="#fff" />
                    <Text style={{fontSize: 12, fontWeight: '500', letterSpacing: 1, color: 'white', textTransform: 'uppercase'}}> {detail.price === "free" ? "Free" : 'Buy Ticket - $'+detail.price}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        padding: 20
    },

    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: .3,
        shadowRadius: 20,
        elevation: 5
    }
})