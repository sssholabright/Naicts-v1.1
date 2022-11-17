import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons'

export default function CreateDiscussion() {
    const [discuss, setDiscuss] = useState("")
    const [discussDetails, setDiscussDetails] = useState("")
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.discussionContainer}>
                <TouchableOpacity activeOpacity={0.9}>
                    <Icon name="chevron-back" size={24} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.imageContainer}>
                    <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>M</Text>
                    <View style={{backgroundColor: '#fff', borderRadius: 25, padding: 10, position: 'absolute', right: 0}}>
                        <Icon name="pencil" size={20} />
                    </View>
                </TouchableOpacity>
                <View />
            </View>
            <View>
                <TextInput 
                    style={styles.discussInput} 
                    placeholder="Create Discussion" 
                    value={discuss} 
                    onChangeText={(discuss) => setDiscuss(discuss)} 
                />
            </View>
            <View>
                <TextInput 
                    style={[styles.discussInput, {height: 100}]} 
                    placeholder="Discussion Details" 
                    placeholderTextColor={"gray"}
                    multiline={true}
                    value={discussDetails} 
                    onChangeText={(discussDetails) => setDiscussDetails(discussDetails)} 
                />
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.9} style={{width: '100%', backgroundColor: 'black', padding: 15, borderRadius: 10}}>
                    <Text style={{color: '#fff', textAlign: 'center'}}>Create Discussion</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        padding: 20
    },

    discussionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    imageContainer: {
        backgroundColor: 'blue',
        borderWidth: 5,
        borderColor: 'whitesmoke',
        borderRadius: 50,
        padding: 35,
        // Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    },

    discussInput: {
        backgroundColor: 'lightgray',
        marginVertical: 10,
        borderRadius: 10,
        paddingLeft: 10,
        padding: 5,
        fontSize: 29
    }
})