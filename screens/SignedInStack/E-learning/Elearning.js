import {  FlatList, Image, ImageBackground, Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categories, courses_list_1, courses_list_2 } from './dummyData'
import { Entypo, Ionicons } from '@expo/vector-icons'
import Courses from './components/Courses'
import Section from './components/Section'
import Categories from './components/Categories'
import CoursesCard from './components/CoursesCard'
import { auth, db } from '../../SignedOutStack/authHooks/firebase';
import { collection, addDoc, getDoc, doc, getDocs, query, where, setDoc, onSnapshot, orderBy, limit } from 'firebase/firestore'
        
export default function Elearning({navigation}) {
/*    const user = auth.currentUser
    const [courses, setCourses] = useState([])
    const [categorie, setCategorie] = useState([])
    const [favorite, setFavorite] = useState([])

    return (
        <SafeAreaView style={{ backgroundColor: '#f2f2f2', paddingHorizontal: 20}}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            {/* Header /}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={{uri: user.photoURL}} style={{width: 40, height: 40, borderRadius: 20}} />
                        <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold'}}>Hi, {user.displayName}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Entypo name="dots-three-vertical" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
                {/* Search /}
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 15, padding: 10, marginTop: 10}}>
                    <Ionicons name="search" size={20} color="gray" />
                    <Text style={{marginLeft: 10, fontSize: 15, color: 'gray'}}>Search for courses</Text>
                </View>

                {/* Start Learning /}
                <ImageBackground source={require('../../../assets/crs.png')} imageStyle={{borderRadius: 15}} style={{alignItems: 'flex-start', marginTop: 10, padding: 15}}>
                        {/* info section /}
                        <View>
                            <Text style={{color: '#fff'}}>HOW TO</Text>
                            <Text style={{color: "#fff"}}>Make your brand more visible</Text>
                            <Text style={{color: "#fff", marginTop: 10}}>By Scott Harris</Text>
                        </View>
                            
                        {/* Button section /}
                        <TouchableOpacity activeOpacity={0.5} style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: 10, borderRadius: 25, marginTop: 20}} disabled={false}>
                            <Text style={{}}>Start Learning</Text>
                        </TouchableOpacity>
                    </ImageBackground>


                {/* Categories /}
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Categories</Text>
                    <FlatList 
                        data={categories}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <Categories category={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{marginTop: 10}}
                    />
                </View>

                {/* Popular Courses /}
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Popular Courses</Text>
                    <FlatList
                        data={courses_list_1}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <Courses course={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{marginTop: 10}}
                    />
                </View>

                {/* Recommended Courses /}
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Recommended Courses</Text>
                    <FlatList
                        data={courses_list_2}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <CoursesCard card={item} />}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{marginTop: 10}}
                    />
                </View>                
            </ScrollView>
        </SafeAreaView>
    )
}*/
    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <StatusBar barStyle="light-content" backgroundColor='#f25fb9' />
            <View style={{flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, color: '#fff', fontWeight: '700'}}>E-LEARNING</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
                <Text style={{fontWeight: '700', fontSize: 30, textAlign: 'center', paddingHorizontal: 10, color: 'lightgray', letterSpacing: 0.2}}>E-Learning is not available for now, Come Back Later</Text>
            </View>
        </View>
    )
} 