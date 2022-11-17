import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons'

export default function Home({navigation}) {
    const [like, setLike] = useState(false)
    const [bookmark, setBookmark] = useState(false)
    const [readMore, setReadMore] = useState(false)

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
                <TouchableOpacity activeOpacity={0.5} style={styles.containerTwo}>
                    <Image style={{width: 40, height: 40, borderRadius: 50}} source={require('../../assets/me.jpg')}  />
                </TouchableOpacity>
            </View>
            <Text style={{marginHorizontal: 20, marginBottom: 10, color: 'gray', fontSize: 15, fontWeight: '700'}}>Members' Ranking</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.bodyContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('ranking')} style={[styles.sectionBox, {justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}]}>
                    <Text style={{padding: 2,  color: '#fff', fontWeight: '500'}}>View All</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.sectionBox}>
                    <Image source={require('../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 12}} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.sectionBox}>
                    <Image source={require('../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 12}} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.sectionBox}>
                    <Image source={require('../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 12}} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.sectionBox}>
                    <Image source={require('../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 12}} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.sectionBox}>
                    <Image source={require('../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 12}} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.sectionBox}>
                    <Image source={require('../../assets/me.jpg')} style={{width: 50, height: 50, borderRadius: 12}} />
                </TouchableOpacity>
            </ScrollView>

            {/* Body SECTION */}
            <Text style={{marginLeft: 20, marginTop: 15, marginBottom: -20}}>Explore</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalView}>
                <View style={styles.viewOne}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 20}} source={require('../../assets/me.jpg')}  />
                </View>
                <View style={styles.viewOne}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 20}} source={require('../../assets/me.jpg')}  />
                </View>
                <View style={styles.viewOne}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 20}} source={require('../../assets/2.jpg')}  />
                </View>
                <View style={styles.viewOne}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 20}} source={require('../../assets/2.jpg')}  />
                </View>
                <View style={styles.viewOne}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 20}} source={require('../../assets/2.jpg')}  />
                </View>
            </ScrollView>

            <View>
                <Text style={{fontWeight: '700', fontSize: 18, marginLeft: 20, color: 'gray'}}>News Portal</Text>
                <View style={styles.actualPost}>
                    <View style={styles.postHeader}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.postUploader}>
                            <Image style={{width: 40, height: 40, borderRadius: 50}} source={require('../../assets/2.jpg')}  />
                            <View style={styles.names}>
                                <Text style={styles.name1}>Alonzo Lee</Text>
                                <Text style={styles.name2}>23 seconds ago</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.moreIcon}>
                            <Text style={styles.follow}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainPost}>
                        <TouchableOpacity activeOpacity={0.95} style={styles.heartIcon}>
                            {!like ? (
                                <Icon onPress={() => setLike(true)} name='heart' size={24} color='#fff' />
                            ):(
                                <Icon onPress={() => setLike(false)} name='heart' size={24} color='red' />
                            )}
                        </TouchableOpacity>

                        {/* POST SECTION */}
                        <View style={styles.messageSection}>
                            <Text style={styles.message}>Good to try this react native development again...</Text>
                            <Text onPress={() => setShowMore(true)} style={{color: 'lightblue'}}>Read More</Text>
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

    sectionBox: {
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 15,
        borderWidth: 2,
        padding: 2,
        borderColor: 'pink',
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

    names: {
        marginLeft: 10
    },

    name1: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700',
    },

    name2: {
        color: 'gray'
    },

    moreIcon: {
        borderWidth: 1,
        borderColor: '#1c164c',
        backgroundColor: '#1c164c',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    follow: {
        color: '#fff'
    },

    mainPost: {
        backgroundColor: 'whitesmoke',
        borderRadius: 10, 
        marginTop: 10
    },

    heartIcon: {
        backgroundColor: 'lightgray',
        width: 40,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderBottomRightRadius: 10,
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