import { Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Recommen from '../Home/Recommen'
import FoundPage from './FoundPage'

export default function LostAndFound({navigation}) {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState("LOST")

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#fff'}}>
      <StatusBar barStyle="light-content" backgroundColor='#f25fb9' />
      {/* Header Section (Back Icon and `Title`) */}
      <View style={{ backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
          {Platform.OS === "android" ? (
            <Ionicons name="arrow-back" size={24} color='#fff' /> 
          ): Platform.OS === "ios" (
            <Ionicons name="chevron-back" size={24} color='#fff' />
          )}
        </TouchableOpacity> 
        <View style={{}}>
          <Text style={{fontSize: 18, letterSpacing: 0.1, marginLeft: 20, fontWeight: '700', color: '#fff'}}>LOST AND FOUND</Text>
        </View> 
        <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#fff', padding: 5, paddingHorizontal: 10, borderRadius: 4}} onPress={() => navigation.navigate("postitem")}>
          <Text style={{fontSize: 12, fontWeight: '500', color: '#ef018a'}}>POST</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 20}}>     
        <View style={{marginVertical: 20, backgroundColor: 'whitesmoke', borderWidth: 1, borderColor: 'lightgray', borderRadius: 20, flexDirection: 'row', alignItems: 'center',  paddingHorizontal: 10}}>
          <Ionicons name="search" size={20} color="gray"/>
          <TextInput
            placeholder="What are you looking for?..."
            style={{padding: 5, flex: 1, marginLeft: 10}}
            value={search}
            onChangeText={(text) => searchFilter(text)}
          />
        </View>
        <View style={{backgroundColor: 'lightgray', height: 1, }} />
          <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "LOST" ? (
            
            <View style={{ padding: 5, borderWidth: 1, borderColor: 'lightgray', borderRadius: 10}}>
                <View style={{margin: 10}}>
                  <Text style={{fontSize: 15, fontWeight: '500'}}>An White Android Phone</Text>
                  <Text style={{color: 'gray', fontSize: 12, fontWeight: '500'}}>ICT Building</Text>
                </View>
                <View style={{width: 300, height: 300}}>
                  <Image source={require('../../../assets/boat2.png')} style={{width: '100%', height: '100%', borderRadius: 4, margin: 5}} />
                </View>
                <View style={{margin: 10}}>
                  <Text>This was found at the front of ICT building. The owner should message me or call me.</Text>
                </View>
            </View>
            
          ):(
            <View style={{flex: 1, marginTop: 250, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
                <Text style={{fontWeight: '700', fontSize: 30, textAlign: 'center', paddingHorizontal: 10, color: 'lightgray', letterSpacing: 0.2}}>Come Back Later</Text>
            </View>
          )}
      <View style={{height: 50}} />
      </ScrollView>
    </SafeAreaView>
  )
}

export function HeaderTabs(props) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
      <HeaderButton title="LOST" btnColor="black" txtColor="white" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
      <HeaderButton title="FOUND" btnColor="white" txtColor="black" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
    </View>
  )
}

export function HeaderButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => props.setActiveTab(props.title)} style={{width: 80, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: props.activeTab === props.title ? "black" : "whitesmoke", borderRadius: 30}}>
      <Text style={{color: props.activeTab === props.title ? "white" : "black", fontSize: 15, fontWeight: '500'}}>{props.title}</Text>
    </TouchableOpacity>
  )
}