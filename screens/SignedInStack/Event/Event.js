import { FlatList, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { events } from '../AllTempData'
import EventCard from './EventCard'
import EventList from './EventList'
import { addDoc, collection, getDocs, Timestamp } from 'firebase/firestore'
import { db } from '../../SignedOutStack/authHooks/firebase'
import useAuth from '../../SignedOutStack/authHooks/useAuth'

export default function Event({navigation}) {
    const [search, setSearch] = useState("")
    const [searched, setSearched] = useState(false)
    const [filterData, setFilterData] = useState([])
    const [eventList, setEventList] = useState([])  

    const { user } = useAuth()

    useEffect(() => {
        const getEvents = async () => {
            const eventsCollection = collection(db, 'events')
            const eventsSnapshot = await getDocs(eventsCollection)
            const events = eventsSnapshot.docs.map(doc => doc.data())
            setEventList(events)
            setFilterData(events)
        }
        getEvents()
    }, [user])


    const searchFilter = (text) => {
        if (text) {
            const newData = filterData.filter(item => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setEventList(newData)
            setSearch(text)
        } else {
            setFilterData(eventList)
            setSearch(text)
        }
    }

    const addEvent = async () => {
        try {
            const eventRef = await addDoc(collection(db, "events"), {
                title: "Frehers Party",
                content: "This is a Frehers event",
                img: "https://images.unsplash.com/photo-1616169950003-8b8b2b2b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                organizer: "Organizer",
                venue: "Sam P",
                time: "10:00 AM",
                participants: "100",
                price: "Free",
                createdAt: Timestamp.now().toDate().toString().slice(0, 24),
            })
            console.log("Document written with ID: ", eventRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

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
                <TouchableOpacity activeOpacity={0.5} onPress={() => addEvent()}> 
                    <Entypo name="plus" size={34} color='#000' />
                </TouchableOpacity>
                <Text>{'        '}</Text>
            </View>

            {/* Search Section */}
            <View style={{ marginVertical: 20, borderWidth: 1, borderColor: 'lightgray', borderRadius: 50, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15}}>
                <Ionicons name="search" size={18} color="gray" />
                <TextInput 
                    style={{padding: 5, marginLeft: 10}}
                    placeholder="Search event..."
                    value={search}
                    onChangeText={(text) => searchFilter(text)}
                />
            </View>

            {/* Events Container */}
            <Text style={{fontSize: 18, fontWeight: '500', letterSpacing: 0.5}}>Upcoming Events</Text>
            <FlatList 
                horizontal 
                showsHorizontalScrollIndicator={false}
                data={eventList}
                listKey={(item, index) => index.toString()} 
                keyExtractor={item => `EventCard-${item.id}`} 
                contentContainerStyle={{marginTop: 10, paddingBottom: 10}} 
                renderItem={({item, index}) => (
                    <EventCard 
                        key={index}
                        card={item}
                        onPress={() => navigation.navigate('eventdetail', {detail: item})}
                    />
                )}
            />

            {/* Events Listing */}
            <Text style={{marginTop: 20, marginBottom: -20, fontSize: 18, fontWeight: '500', letterSpacing: 0.5}}>Popular Events</Text>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={eventList} 
                listKey="EventList" 
                keyExtractor={item => `EventList-${item.id}`} 
                contentContainerStyle={{marginVertical: 20}} 
                renderItem={({item, index}) => (
                    <EventList 
                        key={index}
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