import React, { useLayoutEffect, useState } from 'react'
import { Button, Dimensions, Image, KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import useAuth from './authHooks/useAuth'


export default function Register({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)

    const { loading, register } = useAuth()

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logoSection}>
                    <Image style={{width: 50, height: 50}} source={require('../../assets/naicts.jpg')} />    
                </View>
                <View style={styles.textSection}>
                    <Text style={{fontWeight: '700', fontSize: 30}}>Hey, </Text>
                    <Text style={{fontWeight: '700', fontSize: 30}}>Sign Up</Text>

                    <View style={{alignItems: 'center', flexDirection: 'row', marginVertical: 10}}>
                        <Text style={{color: 'gray'}}>Existing member / </Text>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.replace('login')}>
                            <Text>login</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder='Email Address' 
                            placeholderTextColor="gray"
                            value={email}
                            onChangeText={(email) => setEmail(email)} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder='Password' 
                            placeholderTextColor="gray"
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                            secureTextEntry={!showPassword ? false : true} />
                            {password ? (
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} activeOpacity={0.8} style={{ position: 'absolute', right: 15, marginTop: 15 }}>
                                    <Icon name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color='gray' />
                                </TouchableOpacity>
                            ): (<></>)}
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder='Confirm Password' 
                            placeholderTextColor="gray"
                            value={confirmPassword}
                            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                            secureTextEntry={!showConfirmPassword ? false : true} />
                            {confirmPassword ? (
                                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} activeOpacity={0.8} style={{ position: 'absolute', right: 15, marginTop: 15 }}>
                                    <Icon name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={24} color='gray' />
                                </TouchableOpacity>
                            ): (<></>)}
                    </View>
                </View>
                <View style={styles.otherSection}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.buttonBox} onPress={() => register(email, password)} >
                        {loading && <Text style={{fontSize: 18, fontWeight: '500'}}>Register</Text>}
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: Dimensions.get('window').height,
    },

    logoSection: {
        margin: 20,
    },

    textSection: {
        marginVertical: 20,
        marginHorizontal: 20
    },

    inputContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
    },

    input: {
        color: '#1c1c1c',
        borderColor: 'transparent',
        borderWidth: 1,
        backgroundColor: 'whitesmoke',
        height: 50,
        fontSize: 15,
        paddingLeft: 15,
        marginTop: 3,
        borderRadius: 10,
        // Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    },

    otherSection: {
        margin: 20,
        marginTop: 20,
        justifyContent: 'center',
    },

    buttonBox: {
        backgroundColor: 'pink',
        padding: 15,
        marginVertical: 20,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})