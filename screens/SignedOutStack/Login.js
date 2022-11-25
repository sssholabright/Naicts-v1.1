import React, { useState } from 'react'
import { Dimensions, Image, KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import useAuth from './authHooks/useAuth'


export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    
    const { login, loading } = useAuth()

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <KeyboardAvoidingView behaviour={"height"} style={styles.container}>
                <View style={styles.logoSection}>
                    <Image style={{width: 70, height: 70}} source={require('../../assets/naicts.jpg')} />    
                </View>
                <View style={styles.textSection}>
                    <Text style={{fontWeight: '700', fontSize: 30}}>Hey, </Text>
                    <Text style={{fontWeight: '700', fontSize: 30}}>Login now</Text>

                    <View style={{alignItems: 'center', flexDirection: 'row', marginVertical: 10}}>
                        <Text style={{color: 'gray'}}>If you are new / </Text>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.replace('register')}>
                            <Text>Create New</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Email Address</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Email Address' 
                            placeholderTextColor="gray"
                            value={email}
                            onChangeText={(email) => setEmail(email)} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Enter Password</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Password' 
                            placeholderTextColor="gray"
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                            secureTextEntry={!showPassword ? false : true} />
                            {password ? (
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} activeOpacity={0.8} style={{ position: 'absolute', right: 15, marginTop: 30 }}>
                                    <Icon name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color='gray' />
                                </TouchableOpacity>
                            ): (<></>)}
                    </View>
                </View>
                <View style={styles.otherSection}>
                    <View style={{alignItems: 'center', flexDirection: 'row', marginVertical: 10}}>
                        <Text style={{color: 'gray'}}>Forgot Password / </Text>
                        <TouchableOpacity>
                            <Text>reset</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity activeOpacity={0.8} style={styles.buttonBox} onPress={() => login(email, password)}>
                        <Text style={{fontSize: 18, fontWeight: '500'}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        minHeight: Dimensions.get('window').height,
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
        backgroundColor: '#ef018a',
        padding: 15,
        marginVertical: 20,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})