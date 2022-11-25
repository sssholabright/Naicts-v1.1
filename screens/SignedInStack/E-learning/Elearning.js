import { Animated, FlatList, Image, ImageBackground, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import constants from './constants'
import { categories, courses_list_1, courses_list_2 } from './dummyData'
import { Entypo, Ionicons } from '@expo/vector-icons'
import Courses from './components/Courses'
import Section from './components/Section'
import Categories from './components/Categories'
import CoursesCard from './components/CoursesCard'

export default function Elearning({navigation}) {
    return (
        <View style={{padding: 20, backgroundColor: '#fff', flex: 1}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#000' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#000' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, fontWeight: '700'}}>E-LEARNING</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
                <Text style={{fontWeight: '700', fontSize: 30, textAlign: 'center', paddingHorizontal: 10, color: 'lightgray', letterSpacing: 0.2}}>E-Learning is not available for now, Come Back Later</Text>
            </View>
        </View>
    )} 
        {/*<View style={{ backgroundColor: '#fff', paddingHorizontal: 20}}>
            {/* Header *
            <View style={{marginVertical: 20}}>
                <Text style={{fontSize: 20}}>Hello, BrightProgrammers</Text>
                <Text style={{color: "gray"}}>Thursday</Text>
            </View>
        
            {/* Start Learning *
            <ScrollView contentContainerStyle={{paddingBottom: 15}} showsVerticalScrollIndicator={true}>
            <ImageBackground source={require('../../../assets/crs.png')} imageStyle={{borderRadius: 15}} style={{alignItems: 'flex-start', marginTop: 10, padding: 15}}>
                {/* info section *
                <View>
                    <Text style={{color: '#fff'}}>HOW TO</Text>
                    <Text style={{color: "#fff"}}>Make your brand more visible</Text>
                    <Text style={{color: "#fff", marginTop: 10}}>By Scott Harris</Text>
                </View>
                {/* Image section * /}
                <Image source={require('../../../assets/Documents.png')} style={{width: "100%", height: 110, marginTop: 10}} />
                    
                {/* Button section *
                <TouchableOpacity activeOpacity={0.5} style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: 10, borderRadius: 25, marginTop: 20}} disabled={false}>
                    <Text style={{}}>Start Learning</Text>
                </TouchableOpacity>
            </ImageBackground>

            {/* Courses SECTION *
            <FlatList 
                horizontal 
                data={courses_list_1} 
                listKey="Courses" 
                keyExtractor={item => `Courses-${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginTop: 15}}
                renderItem={({item, index}) => (
                    <Courses
                        containerStyle={{
                            marginRight: index == 0 ? 10 : 15, marginRight: index == courses_list_1.length - 1 ? 10 : 0
                        }}
                        course={item}
                    />
                )}
            />
            <View style={{height: 2, width: '100%', backgroundColor: 'gray', marginVertical: 10}} />

            {/* categories SECTION *
            <View style={{}}>
                <Section title="Categories" />
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
            <View style={{}}>
                <Section title="Popular Courses" containerStyle={{marginTop: 30}}>
                <FlatList 
                    data={courses_list_2} 
                    listKey="Popular Courses" 
                    keyExtractor={item => `Popular Courses-${item.id}`} 
                    contentContainerStyle={{marginTop: 0}} 
                    renderItem={({item, index}) => (
                        <CoursesCard    
                            card={item} 
                            containerStyle={{
                                marginVertical: 10, 
                                marginTop: index == 0 ? 15 : 10
                            }}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{height: 2, width: '100%', backgroundColor: 'gray', marginVertical: 10}} />
                    )}
                />
                </Section>
            </View>
            </ScrollView>

            {/* Content *    

                    </View>*/}
    
const styles = StyleSheet.create({})