import { Entypo, Ionicons } from '@expo/vector-icons'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import React, { useLayoutEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog'
import TypingText from 'react-native-typical'
import { auth, db } from '../../SignedOutStack/authHooks/firebase'
import { events } from '../AllTempData'
import Categories from '../E-learning/components/Categories'
import { categories } from '../E-learning/dummyData'
import EventList from '../Event/EventList'
import Recommen from './Recommen'

export default function Home({navigation}) {
    return (
        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
        <Text style={{fontWeight: '700', fontSize: 30, textAlign: 'center', paddingHorizontal: 10, color: 'lightgray', letterSpacing: 0.2}}>The Home Screen is on production mode. Come Back Later</Text>
    </View>
    )
}
    /*const [visible, setVisible] = useState(false)

    /*useLayoutEffect(() => {
        const unsubscribe = onSnapshot(doc(db, 'users', auth.currentUser.uid), (snapshot) => {
            if (snapshot.data().photoURL != null) {
                null;
            } else {
                navigation.navigate("addprofile")
            }
        })
        return unsubscribe
    }, [auth.currentUser])/



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor='#fff' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={0.5} style={{alignSelf: 'flex-end'}}>
                    <Ionicons name="notifications-outline" size={24} color='#000' />
                </TouchableOpacity>
                <View style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 25, fontWeight: '500'}}>Hi, {auth.currentUser.displayName}</Text>
                    <TypingText 
                        steps={[
                            "What would you like to do today? ", 
                            "Create Discussions?", 
                            "Checkout some events?", 
                            "Take Courses?", 
                            "Search below 👇"
                        ]} 
                        loop="infinite" 
                        style={{fontSize: 18, textAlign: 'center', fontWeight: '500'}} 
                    />
                </View>
                <View style={{borderRadius: 10, borderWidth: 1, borderColor: 'lightgray', marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput
                        placeholder="Start searching"
                        style={{width: '85%', paddingHorizontal: 10}}
                    />
                    <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#ef018a', padding: 5, margin: 5, borderRadius: 5}}>
                        <Ionicons name="search" size={24} color='#fff' />
                    </TouchableOpacity>
                </View>



                <Dialog visible={visible} dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})} onTouchOutside={() => setVisible(false)}>
			        <DialogContent>
					    <View>
                            <View>
                                <Image source={require('../../../assets/2.jpg')} style={{width: 120, height: 120, borderRadius: 50}} />
                            </View>
                            <View>
                                <Text style={{}}>Glad to have you join in the discussion!</Text>
                                <Text style={{}}>Thank you for joining our discussion. This Circle is only about `Topic` </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} style={{}}>
                                <Text style={{}}>Enter Discussion</Text>
                            </TouchableOpacity>
					    </View>
			    	</DialogContent>
			    </Dialog>    
            



                <View>
                    <Recommen title="Events" onPress={() => navigation.navigate("event")} />
                    <FlatList 
                        showsHorizontalScrollIndicator={false}
                        data={events} 
                        horizontal
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
                </View>

                <View>
                    <Recommen title="Group Discussion On Going" onPress={() => navigation.navigate("event")} />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
                        <ImageBackground imageStyle={{borderRadius: 10}} source={require('../../../assets/thumbnail_4.png')} style={{padding: 20, backgroundColor: 'white', width: 250, marginRight: 10, marginVertical: 30 }}>
                            <View>
                                <Text style={{fontSize: 30, fontWeight: '900', color: 'red'}}>•<Text style={{fontSize: 14, color: 'red'}}>Live</Text></Text>
                            </View>
                            <Text>Cheating President</Text>
                            <Text style={{color: 'gray', fontSize: 12, }}>How the mass communicatio president eluded with a sum of 1 million naira</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15}}>
                                <View style={{}}>
                                    <Image 
                                        source={require('../../../assets/me.jpg')}
                                        style={{width: 30, height: 30, borderRadius: 5}}
                                    />
                                </View>
                                <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', alignItems: 'center',}} onPress={() => navigation.navigate('discussionpage', {post})}>
                                    <Text style={{ color: '#ef018a'}}>Join Forum </Text>
                                    <Entypo name="triangle-right" size={15} color='#ef018a'/>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>

                        <ImageBackground imageStyle={{borderRadius: 10}} source={require('../../../assets/crs.png')} style={{padding: 20, backgroundColor: 'white', width: 250, marginVertical: 30 }}>
                            <View>
                                <Text style={{fontSize: 30, fontWeight: '900', color: 'red'}}>•<Text style={{fontSize: 14, color: 'red'}}>Live</Text></Text>
                            </View>
                            <Text>Cheating President</Text>
                            <Text style={{color: 'gray', fontSize: 12, }}>How the mass communicatio president eluded with a sum of 1 million naira</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15}}>
                                <View style={{}}>
                                    <Image 
                                        source={require('../../../assets/me.jpg')}
                                        style={{width: 30, height: 30, borderRadius: 5}}
                                    />
                                </View>
                                <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', alignItems: 'center',}} onPress={() => navigation.navigate('discussionpage', {post})}>
                                    <Text style={{ color: '#ef018a'}}>Join Forum </Text>
                                    <Entypo name="triangle-right" size={15} color='#ef018a'/>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>

                    </ScrollView>

                    <Recommen title="Take Courses" />
                    <View style={{marginTop: 20}}>
                        <FlatList 
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            data={categories} 
                            listKey="Categories" 
                            keyExtractor={item => `Catergories-${item.id}`} 
                            contentContainerStyle={{marginTop: 10}} 
                            renderItem={({item, index}) => (
                                <Categories 
                                    category={item}
                                    containerStyle={{
                                        marginLeft: index == 0 ? 5 : 15,
                                        marginRight: index == categories.length - 1 ? 10 : 0,
                                    }}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
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
        // Shadow
        shadowOffset: {width: 0, height: 10},
        shadowColor: 'gray',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    },

})*/