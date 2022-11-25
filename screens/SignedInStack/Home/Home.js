import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import Activeing from './Activeing'
import { categories } from '../E-learning/dummyData'
import Categories from '../E-learning/components/Categories'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { activeUser } from '../AllTempData'
import useAuth from '../../SignedOutStack/authHooks/useAuth'

export default function Home({navigation}) {
    const [bookmark, setBookmark] = useState(false)

    const { logout } = useAuth()

    let today = new Date().toUTCString().slice(0, 16)

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor='#fff' />
        <ScrollView>
            {/* Header Component consists of Welcome, name, and image of the user */}
            <View style={styles.headerContainer}>
                <View>
                    <Text style={{color: 'gray'}}>Hello,</Text>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>Bright! 🥰👋</Text>
                    <Text style={{color: 'gray', fontWeight: '400'}}>{today}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.containerTwo} onPress={logout}>
                    <Image style={{width: 40, height: 40, borderRadius: 50}} source={require('../../../assets/me.jpg')}  />
                </TouchableOpacity>
            </View>
            
            {/* Active Users Section */}
            <Text style={{marginHorizontal: 20, marginBottom: 10, color: 'gray', fontSize: 15, fontWeight: '700'}}>Active Members</Text>
            <View style={styles.bodyContainer}>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={activeUser} 
                    listKey="Activeing" 
                    keyExtractor={item => `Activeing-${item.id}`} 
                    contentContainerStyle={{marginTop: 0}} 
                    renderItem={({item, index}) => (
                        <Activeing    
                            imag={item} 
                            containerStyle={{
                                marginVertical: 10, 
                                marginTop: index == 0 ? 15 : 10
                            }}
                        />
                    )}
                />
            </View>
            

            {/* Body SECTION */}
            <Text style={{marginHorizontal: 20, marginTop: 20, color: 'gray', fontSize: 15, fontWeight: '700'}}>Explore</Text>
            <View style={{paddingHorizontal: 20}}>
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

            {/* Post SECTION */}
            <View>
                <Text style={{fontWeight: '700', fontSize: 18, marginTop: 25, marginLeft: 20, color: 'gray'}}>News Portal</Text>
                <View style={styles.actualPost}>
                    <View style={styles.postHeader}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.postUploader}>
                            <Image style={{width: 40, height: 40, borderRadius: 50}} source={require('../../../assets/2.jpg')}  />
                            <View style={{marginLeft: 10}}>
                                <Text 
                                    style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '700',
                                    }}>
                                    Shola Bright
                                </Text>
                                <Text style={{color: 'gray'}}>23 seconds ago</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Ionicons name="ellipsis-vertical" size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainPost}>
                        {/* POST SECTION */}
                        <View style={styles.messageSection}>
                            <Text style={styles.message}>Good to try this react native development again...</Text>
                        </View>
                                    
                        {/* COMMENT SECTION */}
                        <View style={styles.commentSection}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.commentBox} onPress={() => navigation.navigate('comment')}>
                                <Icon name='chatbubble' size={24} color='#cccccc' />
                                <Text style={styles.comment}>5 Comments</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={styles.bookmark}>
                                {bookmark ? (
                                    <Icon onPress={() => setBookmark(false)} name='bookmark' size={24} color='gray' />
                                ):(
                                    <Icon onPress={() => setBookmark(true)} name='bookmark-outline' size={24} color='gray' />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff'
    },

    headerContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,  
    },

    containerTwo: {
        width: 50,
        height: 50,
    },

    bodyContainer: {
        flexDirection: 'row', 
        marginVertical: 5,
        marginHorizontal: 10,
    },


    horizontalView: {
        flexDirection: 'row',
        paddingHorizontal: 10
        //justifyContent: 'space-evenly'
    },

    viewOne: {
        width: 150,
        height: 200,
        //borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 30
    },

    actualPost: {
        backgroundColor: 'lightgray',
        margin: 20,
        marginTop: 10,
        padding: 20,
        borderRadius: 10
    },

    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    postUploader: {
        flexDirection: 'row',
    },


    mainPost: {
        backgroundColor: 'whitesmoke',
        borderRadius: 10, 
        marginTop: 10
    },

    messageSection: {
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 20
    },

    message: {
        color: 'gray', 
        fontSize: 15,
        fontWeight: '500'
    },

    commentSection: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    commentBox: {
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        alignItems: 'center', 
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    comment: {
        marginLeft: 5, 
        color: "#fff",
    },
})