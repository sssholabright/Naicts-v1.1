import { FlatList, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { addDoc, collection, getDocs, Timestamp, doc, setDoc } from 'firebase/firestore'
import { db } from '../../SignedOutStack/authHooks/firebase'
import EventCard from './EventCard'
import EventList from './EventList'

export default function Event({navigation}) {
    const [search, setSearch] = useState("")
    const [searched, setSearched] = useState(false)
    const [filterData, setFilterData] = useState([])
    const [eventList, setEventList] = useState([])  
    const [refreshing, setRefreshing] = useState(false)

    const getEvents = async () => {
        const q = collection(db, "events")
        const getEvent = async () => {
            try {
                const querySnapshot = await getDocs(q)
                const events = []
                querySnapshot.forEach((doc) => {
                    events.push(doc.data())
                })
                setEventList(events)
            } catch (error) {
                alert(error)
            }
        }
        getEvent()
    }

    const addEvent = async () => {
        const q = collection(db, "events")
        const addEvent = async () => {
            try {
                await addDoc(q, {
                    title: "Event 1",
                    description: "This is a test event",
                    date: Timestamp.fromDate(new Date()),
                    location: "Singapore",
                    image: "https://images.unsplash.com/photo-1626126090008-8b8f2e8b2f2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                    host: "John Doe",
                    hostImage: "https://images.unsplash.com/photo-1626126090008-8b8f2e8b2f2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                    attendees: 0,
                    attendeesList: [],
                    id: "1"
                })
            } catch (error) {
                alert(error)
            }
        }
        addEvent()
    }

    const attendingEvent = async (id) => { // when user clicks on `Attend` button in EventCard component  // id is the event id from firebase firestore database // this function will update the attendees and attendeesList in firebase firestore database
        const q = collection(db, "events")
        const updateEvent = async () => {
            try {
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((snapshot) => {
                    if (snapshot.id === id) { // if the event id from firebase firestore database matches the id passed in as a parameter
                        setDoc(doc(db, "events", snapshot.id), { // update the attendees and attendeesList in firebase firestore database
                            attendees: 1,
                            attendeesList: ["John Doe"]
                        }, {merge: true})
                    }
                    })
            } catch (error) {
                alert(error)
            }
        }
        updateEvent()
    }
    
    const searchFilter = (text) => {
        if (text) {
            const newData = eventList.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setFilterData(newData)
            setSearch(text)
            setSearched(true)
        } else {
            setFilterData(eventList)
            setSearch(text)
            setSearched(false)
        }
    }

    const onRefresh = () => {
        setRefreshing(true)
        getEvents()
        setRefreshing(false)
    }

    useEffect(() => {
        getEvents()
    }, [])


    const styles = StyleSheet.create({
        container: {
            height: '100%',
            backgroundColor: 'whitesmoke',
        },
        
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginHorizontal: 20,
            paddingVertical: 10,
            borderWidth: 1,
            borderRadius: 10,
            marginVertical: 10,
            borderColor: 'lightgrey'
        },
        
        searchInput: {
            flex: 1,
            marginLeft: 10,
            fontSize: 16,
            backgroundColor: 'white'
        },

        eventList: {
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 10
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor='#f25fb9' />
            {/* Header Section (Back Icon and `Event`) /*/}
            <View style={{ backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 1, fontWeight: '700', color: '#fff'}}>EVENTS</Text>
                </View> 
                <TouchableOpacity activeOpacity={0.5} onPress={attendingEvent}>
                    <Entypo name="plus" size={24} color='#fff' />
                </TouchableOpacity>
            </View>

            {/* Search Bar Section */}
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="gray" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search events"
                    value={search}
                    onChangeText={(text) => searchFilter(text)}
                />
            </View>

            <ScrollView style={styles.eventList}>
                {searched ? (
                    <>
                        <Text style={{marginTop: 20, marginBottom: -20, fontSize: 18, fontWeight: '500', letterSpacing: 0.5}}>Popular Events</Text>
                        <FlatList 
                            showsVerticalScrollIndicator={false}
                            data={filterData} 
                            listKey="EventList" 
                            keyExtractor={item => item.id} 
                            contentContainerStyle={{marginVertical: 20}} 
                            renderItem={({item, index}) => (
                                <EventList 
                                    key={index}
                                    list={item}  
                                    onPress={() => navigation.navigate('eventdetail', {detail: item})}
                                />
                            )}
                        />
                    </>
                ) : (
                    <View>
                        {/* Events Container */}
                        <View>
                            <Text style={{fontSize: 18, fontWeight: '500', letterSpacing: 0.5}}>Upcoming Events</Text>
                            <FlatList 
                                horizontal 
                                showsHorizontalScrollIndicator={false}
                                data={eventList} 
                                keyExtractor={item => item.id} 
                                contentContainerStyle={{marginTop: 10, paddingBottom: 10}} 
                                renderItem={({item, index}) => (
                                    <EventCard 
                                        key={index}
                                        card={item}
                                        onPress={() => navigation.navigate('eventdetail', {detail: item})}
                                    />
                                )}
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        </View>

                        {/* Popular Events */}
                        <View>
                            <Text style={{marginTop: 20, fontSize: 18, fontWeight: '500', letterSpacing: 0.5}}>Popular Events</Text>
                            <FlatList 
                                showsVerticalScrollIndicator={false}
                                data={eventList} 
                                listKey="EventList" 
                                keyExtractor={item => item.id} 
                                contentContainerStyle={{marginBottom: 10}} 
                                renderItem={({item, index}) => (
                                    <EventList 
                                        key={index}
                                        list={item}
                                        onPress={() => navigation.navigate('eventdetail', {detail: item})}  
                                    />
                                )}
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        </View>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}