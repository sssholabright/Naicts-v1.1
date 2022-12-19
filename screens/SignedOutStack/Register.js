import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { updateProfile } from 'firebase/auth'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { ActivityIndicator, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth, db } from './authHooks/firebase'
import useAuth from './authHooks/useAuth'

export default function Register({navigation}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const { register } = useAuth()

    const handleRegister = async () => {
        if (password !== confirmPassword) { 
            alert("Passwords don't match")
            return
        }
        setLoading(true)
        await register(email, password)
        await setDoc(doc(db, "users", auth.currentUser.uid), {    
            firstName: firstName,
            lastName: lastName,
            email: email,
            createdAt: Timestamp.now().toDate().toString().slice(0, 24),
        })
        await updateProfile(auth.currentUser, {
            displayName: firstName,
            photoURL: null,
        })
        .then(() => {
            // Update successful   
        })
        .catch((error) => {
            alert(error.message)
        })
        setLoading(false)
    }


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../assets/Applogo.png')} style={{width: 100, height: 100}} />
                </View>
                <View style={{flex: 1, paddingHorizontal: 20}}>
                    <Text style={{fontSize: 30, fontWeight: '700', color: '#f25fb9'}}>Welcome</Text>
                    <Text style={{fontSize: 12, fontWeight: '500', color: 'gray', marginTop: 5}}>Register a new account</Text>
                
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <FontAwesome name="user" color="gray" size={20} />
                        <TextInput
                            style={{borderBottomWidth: 1, width: 130,  marginLeft: 10, borderBottomColor: 'lightgray'}}
                            placeholder="First Name"
                            placeholderTextColor="gray"
                            value={firstName}
                            onChangeText={(firstName) => setFirstName(firstName)}
                        />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <FontAwesome name="user" color="gray" size={20} />
                        <TextInput
                            style={{borderBottomWidth: 1, width: 130, marginLeft: 10, borderBottomColor: 'lightgray'}}
                            placeholder="Last Name" 
                            placeholderTextColor="gray"
                            value={lastName}
                            onChangeText={(lastName) => setLastName(lastName)}
                        />
                    </View>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <FontAwesome name="at" color="gray" size={20} />
                        <TextInput
                            style={{borderBottomWidth: 1, marginLeft: 10, flex: 1, borderBottomColor: 'lightgray'}}
                            placeholder="Email Address"
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
                            secureTextEntry={true} 
                        />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <Ionicons name="lock-closed-outline" color="gray" size={20} />
                        <TextInput
                            style={{marginLeft: 10, flex: 1, borderBottomWidth: 1, borderBottomColor: 'lightgray'}}
                            placeholder="Confirm Password"
                            placeholderTextColor="gray"
                            value={confirmPassword}
                            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                            secureTextEntry={true} 
                            
                        />
                    </View>
                    <View style={{marginTop: 20, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
                            <Text style={{}}>By signing up, you've agree to our </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                                <Text style={{fontSize: 13, fontWeight: '500', color: '#f25fb9'}}>Terms & Conditions </Text>
                            </TouchableOpacity>
                            <Text style={{}}>and </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                                <Text style={{fontSize: 13, fontWeight: '500', color: '#f25fb9'}}>Privacy Policy</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity activeOpacity={0.9} onPress={handleRegister} style={{backgroundColor: '#f25fb9', width: '100%', alignItems: 'center', justifyContent: 'center', padding: 10, marginTop: 20, borderRadius: 5}}>
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={{fontSize: 15, fontWeight: '500', color: '#fff'}}>Continue</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 12, fontWeight: '500', color: 'gray'}}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.replace("login")}>
                            <Text style={{fontSize: 12, fontWeight: '500', color: '#f25fb9', marginLeft: 5}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 100}} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

