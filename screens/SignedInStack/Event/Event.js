import { FlatList, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { events } from '../AllTempData'
import EventCard from './EventCard'
import EventList from './EventList'

export default function Event({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor='whitesmoke' />
            {/* Header Section (Back Icon and `Event`) */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#000' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#000' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 1, fontWeight: '700'}}>EVENT</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>

            {/* Search Section */}
            <View style={{ marginVertical: 20, borderWidth: 1, borderColor: 'lightgray', borderRadius: 50, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15}}>
                <Ionicons name="search" size={18} color="gray" />
                <TextInput 
                    style={{padding: 5, marginLeft: 10}}
                    placeholder="Search event..."
                />
            </View>

            {/* Events Container */}
            <Text style={{fontSize: 18, fontWeight: '500', letterSpacing: 0.5}}>Upcoming Events</Text>
            <FlatList 
                horizontal 
                showsHorizontalScrollIndicator={false}
                data={events} 
                listKey="EventCard" 
                keyExtractor={item => `EventCard-${item.id}`} 
                contentContainerStyle={{marginTop: 10, paddingBottom: 10}} 
                renderItem={({item, index}) => (
                    <EventCard 
                        card={item}
                        onPress={() => navigation.navigate('eventdetail', {detail: item})}
                    />
                )}
            />

            {/* Events Listing */}
            <Text style={{marginTop: 20, marginBottom: -20, fontSize: 18, fontWeight: '500', letterSpacing: 0.5}}>Popular Events</Text>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={events} 
                listKey="EventList" 
                keyExtractor={item => `EventList-${item.id}`} 
                contentContainerStyle={{marginVertical: 20}} 
                renderItem={({item, index}) => (
                    <EventList 
                        list={item}  
                        />
                )}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        height: '100%',
        padding: 20
    }
})