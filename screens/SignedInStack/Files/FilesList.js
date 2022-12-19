import { FlatList, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { newFiles } from '../AllTempData';
import Documents from './Documents';

export default function FilesList({route, navigation}) {
    const files = route.params.files;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
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
                        <Text style={{fontWeight: '700', fontSize: 20}}>{files.title}</Text>
                    </View>
                    <Text>{'            '}</Text>
                </View>

                {/* Search SECTION */}
                <View style={[{ marginVertical: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: 'lightgray', borderRadius: 50, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15}, styles.shadow]}>
                    <Ionicons name="search" size={18} color="gray" />
                    <TextInput 
                        style={{padding: 5, marginLeft: 10}}
                        placeholder="Search Something..."
                    />
                </View>

                {/* Files List */}
                <Text style={{fontSize: 18, fontWeight: '500', letterSpacing: 0.5, marginTop: 20}}>Materials</Text>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={newFiles} 
                    listKey="Documents" 
                    keyExtractor={item => `Documents-${item.id}`} 
                    contentContainerStyle={{marginTop: 10, marginBottom: 20, flexDirection: 'row', flexWrap: 'wrap'}} 
                    renderItem={({item, index}) => (
                        <Documents
                            document={item}
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
        backgroundColor: '#fff',
        height: '100%',
        padding: 20
    }
})