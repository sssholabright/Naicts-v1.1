import { FlatList, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import NewFiles, { Folder } from './NewFiles'
import { folders, newFiles } from '../AllTempData'
import { WebView } from 'react-native-webview'
import AssociationPay from '../Payment/AssociationPay'

export default function DocumentScreen({navigation}) {
    const [search, setSearch] = useState("")
    const [filterData, setFilterData] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        setFilterData(newFiles)
    }, [])

    const refreshFiles = async () => {
        setRefreshing(true)
        setFilterData(newFiles)
        setRefreshing(false)
    }

    const searchFiles = (text) => {
        if (text) {
            const newData = newFiles.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setFilterData(newData)
            setSearch(text)
        } else {
            setFilterData(newFiles)
            setSearch(text)
        }

    }

    const customHTML = `
      <body style="display:flex; flex-direction: column;justify-content: center; 
        align-items:center; background-color: black; color:white; height: 100%;">
          <h1 style="font-size:100px; padding: 50px; text-align: center;" 
          id="h1_element">
            This is simple html
          </h1>
          <h2 style="display: block; font-size:80px; padding: 50px; 
          text-align: center;" id="h2_element">
            This text will be changed later!
          </h2>
       </body>`;



    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9" />
            {/*<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 10, backgroundColor: '#f25fb9'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.1, fontWeight: '700', color: '#fff'}}>DOCUMENTS</Text>
                </View>  
                <Text>{'        '}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Search SECTION /}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 10, backgroundColor: '#f25fb9'}}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="gray"
                        style={{backgroundColor: '#fff', color: '#fff', paddingLeft: 10, fontSize: 14, borderRadius: 15, fontWeight: '500', width: '80%'}}
                        value={search}
                        onChangeText={(text) => searchFiles(text)}
                    />
                    <TouchableOpacity activeOpacity={0.5} onPress={() => refreshFiles()}>
                        <Ionicons name="refresh" size={24} color='#fff' />
                    </TouchableOpacity>
                </View>

                
                {/* Recent Files SECTION /}
                <Text style={{fontSize: 18, fontWeight: '500', letterSpacing: 0.5}}>Recent Files</Text>
                <FlatList 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    data={newFiles} 
                    listKey="NewFiles" 
                    keyExtractor={item => `NewFiles-${item.id}`} 
                    contentContainerStyle={{marginTop: 10, paddingBottom: 10}} 
                    renderItem={({item, index}) => (
                        <NewFiles
                            file={item}
                            //onPress={path}
                        />
                    )}
                />

                <View style={{height: 10, backgroundColor: '#f25fb9'}}>*/}
                    <WebView
                        source={{uri: 'https://www.cleverprogrammer.com/'}}
                    />
                {/*</View>

                {/* Folder SECTION /}
                <Text style={{fontSize: 18, fontWeight: '500', letterSpacing: 0.5, marginTop: 20}}>Folders</Text>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={folders} 
                    listKey="Folder" 
                    keyExtractor={item => `Folder-${item.id}`} 
                    contentContainerStyle={{marginTop: 10, marginBottom: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}} 
                    renderItem={({item, index}) => (
                        <Folder
                            folder={item}
                            onPress={() => navigation.navigate('fileslist', {files: item})}
                        />
                    )}
                />
            </ScrollView>
            <AssociationPay />*/}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },

    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: .3,
        shadowRadius: 20,
        elevation: 2
    }
})