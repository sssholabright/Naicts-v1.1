import React, {useState, useLayoutEffect} from 'react'
import { Dimensions, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'

export default function ProfileRegistration({navigation}) {
    const [firstName, setFirstName] = useState('')
    const [otherName, setOtherName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    
    const inputed = firstName && lastName && username && phoneNumber

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.container}>
                <View style={styles.textSection}>
                    <Text style={styles.text1}>Personal Details</Text>
                    <Text style={styles.text2}>Join <Text style={{fontWeight: '700', fontSize: 16}}>TheK</Text> with a few details. Your password must have at least 8 characters including letters and a number.</Text>
                </View>
                <View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>First Name</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='John' 
                            placeholderTextColor="gray"
                            value={firstName}
                            onChangeText={(firstName) => setFirstName(firstName)} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Other Name (Optional)</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Nicholas' 
                            placeholderTextColor="gray"
                            value={otherName}
                            onChangeText={(otherName) => setOtherName(otherName)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Last Name</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Doe' 
                            placeholderTextColor="gray"
                            value={lastName}
                            onChangeText={(lastName) => setLastName(lastName)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Username</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='johndoe334' 
                            placeholderTextColor="gray"
                            value={username}
                            onChangeText={(username) => setUsername(username)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Phone Number</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='(+234) 456 789 0911' 
                            placeholderTextColor="gray"
                            textContentType='telephoneNumber'
                            value={phoneNumber}
                            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                        />
                    </View>
                </View>
                <View style={styles.otherSection}>
                   
                </View>
            </View>
        </SafeAreaView>
    )
}

export function ImageUpload({navigation}) {

    const inputed = 'img';

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerStyle: {
                backgroundColor: '#fff', 
                shadowOffset: {width: 0, height: 1},
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 10,
                elevation: 5
            },
            headerLeft: () => (
                <View style={{marginLeft: 10}}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Icon name="chevron-back" size={35} color='#1c1c1c' /> 
                    </TouchableOpacity>  
                </View> 
            ),
            headerRight: () => (
                <>
                    {inputed ? (
                        <View style={{marginRight: 20, backgroundColor: '#1c164c', padding: 7, paddingHorizontal: 20, borderRadius: 5}}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('')}>
                                <Text style={{color: 'whitesmoke'}}>Next</Text>
                            </TouchableOpacity>  
                        </View> 
                    ):(
                        <View style={{marginRight: 20, backgroundColor: '#cccccc', padding: 7, paddingHorizontal: 20, borderRadius: 5}}>
                            <Text style={{color: 'white'}}>Next</Text>
                        </View>
                    )}
                </>
            )
        })
    })
    return (
        <View style={styles.container}>
            <View style={styles.imageUpload}>
                <Image style={{width: '100%', height: '100%', borderRadius: 100}} source={require('../../assets/2.jpg')}  />
            </View>
            <TouchableOpacity activeOpacity={0.9} style={styles.uploadButton}>
                <Text style={{color: '#fff', fontWeight: '700'}}>Upload Image</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        minHeight: Dimensions.get('window').height,
    },

    textSection: {
        margin: 10,
        marginHorizontal: 20
    },

    text1: {
        color: '#1c1c1c', 
        fontSize: 20,
        fontWeight: '700'
    },

    text2: {
        color: '#1c1c1c', 
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0.5,
        marginTop: 5
    },

    inputContainer: {
        marginHorizontal: 20,
        marginBottom: 20
    },

    inputText: {
        color: '#1c1c1c',
    },  

    input: {
        color: '#1c1c1c',
        borderColor: 'transparent',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: 50,
        fontSize: 15,
        paddingLeft: 10,
        marginTop: 3,
        borderRadius: 5,
        // Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    },

    otherSection: {
        marginVertical: 20,
        marginTop: 20,
        justifyContent: 'center',
    },

    imageUpload: {
        width: 150, 
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 50
    },

    uploadButton: {
        marginTop: 50,
        backgroundColor: '#1c1c1c',
        paddingVertical: 10,
        marginHorizontal: 30,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})