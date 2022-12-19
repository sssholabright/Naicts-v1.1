import React, { useState } from 'react'
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import useAuth from './authHooks/useAuth'

export default function ForgotPassword({navigation}) {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const { forgotPassword } = useAuth()

    const handleForgotPassword = async () => {
        setLoading(true)
        try {
            await forgotPassword(email)
            navigation.replace("login")
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
                    <Text style={{fontSize: 30, fontWeight: '700', color: '#f25fb9'}}>Forgot{'\n'}Password?</Text>
                    <Text style={{fontSize: 14, fontWeight: '500', color: 'gray', marginTop: 5}}>Don't worry! it happens. Enter the email associated with your account.</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <Icon name="at" color="gray" size={20} />
                        <TextInput
                            style={{borderBottomWidth: 1, marginLeft: 10, flex: 1, borderBottomColor: 'lightgray'}}
                            placeholder="Email ID"
                            placeholderTextColor="gray"
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.8} style={{marginTop: 20, backgroundColor: '#f25fb9', paddingVertical: 15, borderRadius: 10, alignItems: 'center'}}>
                        {loading ? <ActivityIndicator color="#fff" /> : <Text style={{color: '#fff', fontSize: 18, fontWeight: '700'}}>Reset Password</Text>}
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            <View style={{height: 100}} />
        </SafeAreaView>
    )
}