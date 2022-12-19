import { FlatList, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import NewFiles, { Folder } from './NewFiles'
import { folders, newFiles } from '../AllTempData'

export default function DocumentScreen({navigation}) {

  return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="whitesmoke" />
            <ScrollView>
                {/* Header Section (Back Icon and `Event`) */}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                        {Platform.OS === "android" ? (
                            <Ionicons name="arrow-back" size={24} color='#000' /> 
                        ): Platform.OS === "ios" (
                            <Ionicons name="chevron-back" size={24} color='#000' />
                        )}
                    </TouchableOpacity> 
                    <View>
                        <Text style={{fontWeight: '700', fontSize: 20}}>Document</Text>
                    </View>
                    <Text>{'      '}</Text>
                </View>


                {/* Search SECTION */}
                <View style={[{ marginVertical: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: 'lightgray', borderRadius: 50, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15}, styles.shadow]}>
                    <Ionicons name="search" size={18} color="gray" />
                    <TextInput 
                        style={{padding: 5, marginLeft: 10}}
                        placeholder="Search Something..."
                    />
                </View>

                
                {/* Recent Files SECTION */}
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

                {/* Folder SECTION */}
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 20
    },

    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: .3,
        shadowRadius: 20,
        elevation: 2
    }
})