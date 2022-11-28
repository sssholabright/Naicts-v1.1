import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Platform, TextInput, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../SignedOutStack/authHooks/firebase';
import AwesomeLoading from 'react-native-awesome-loading';

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const disabled = !name && !email && !message;

    const sendMessage = async () => {
        setLoading(true);
        const messageSent = {
            name: name,
            email: email,
            message: message,
        }
        const messageRef = await addDoc(collection(db, "contact_us"), messageSent)
        setLoading(false)
        console.log("Document written with ID: ", messageRef.id);
        console.error("Error adding document: ", error);
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <KeyboardAvoidingView behaviour={"padding"} style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#000' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#000' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.5, fontWeight: '700'}}>CONTACT US</Text>
                </View> 
                <Text>{'        '}</Text>
            </View>

            {/* Contact Us Section */}
            <View style={{marginTop: 30}}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>Talk to Us</Text>
                <Text style={{marginTop: 10, color: 'gray', fontSize: 16}}>If you have any questions, complains or suggestions, please contact us and we will be in touch shortly.</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Full Name"
                    value={name}
                    onChangeText={(name) => setName(name)}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Email Address"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    style={[styles.input, {height: 100}]}
                    placeholder="Message"
                    multiline
                    textAlignVertical="top"
                    value={message}
                    onChangeText={(message) => setMessage(message)}
                />

                <AwesomeLoading 
                 indicatorId={8} size={50} isActive={true} text="loading" 
                />

                <TouchableOpacity activeOpacity={0.5} onPress={sendMessage} disabled={disabled} style={!disabled ? {backgroundColor: '#ef018a', padding: 10, borderRadius: 5, marginTop: 20}: {backgroundColor: 'gray', padding: 10, borderRadius: 5, marginTop: 20}}>
                    <Text style={{color: '#fff', fontSize: 16, fontWeight: '700', textAlign: 'center'}}>{loading ? 'Loading...': 'Send Message'}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    input: {
        marginVertical: 10, 
        borderWidth: 1, 
        borderColor: 'lightgray', 
        borderRadius: 5, 
        padding: 10, 
        fontSize: 16
    }
})

