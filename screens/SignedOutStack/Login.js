import React, { useState } from 'react'
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import useAuth from './authHooks/useAuth'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

export default function Login({navigation}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const { login } = useAuth()

    const handleLogin = async () => {
        setLoading(true)
        try {
            await login(email, password)
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../assets/Applogo.png')} style={{width: 100, height: 100}} />
                </View>
                <View style={{flex: 1, paddingHorizontal: 20}}>
                    <Text style={{fontSize: 30, fontWeight: '700', color: '#f25fb9'}}>Welcome Back</Text>
                    <Text style={{fontSize: 12, fontWeight: '500', color: 'gray', marginTop: 5}}>Login to your account</Text>
                
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <FontAwesome name="at" color="gray" size={20} />
                        <TextInput
                            style={{borderBottomWidth: 1, marginLeft: 10, flex: 1, borderBottomColor: 'lightgray'}}
                            placeholder="Email ID"
                            placeholderTextColor="gray"
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <Ionicons name="lock-closed-outline" color="gray" size={20} />
                        <TextInput
                            style={{marginLeft: 10, flex: 1, borderBottomWidth: 1, borderBottomColor: 'lightgray'}}
                            placeholder="Password"
                            placeholderTextColor="gray"
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                            secureTextEntry={showPassword ? true : false } 
                        />
                        {password ? (
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} activeOpacity={0.8} style={{ position: 'absolute', right: 10, marginTop: 30 }}>
                                <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color='gray' />
                            </TouchableOpacity>
                        ) : (<></>)}
                    </View>
                    <View style={{marginTop: 20, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate("forgotpassword")}>
                            <Text style={{fontSize: 13, fontWeight: '500', color: '#f25fb9'}}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} onPress={handleLogin} style={{backgroundColor: '#f25fb9', width: '100%', alignItems: 'center', justifyContent: 'center', padding: 10, marginTop: 20, borderRadius: 5}}>
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={{fontSize: 15, fontWeight: '500', color: '#fff'}}>Login</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 12, fontWeight: '500', color: 'gray'}}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.replace("register")}>
                            <Text style={{fontSize: 12, fontWeight: '500', color: '#f25fb9', marginLeft: 5}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}






