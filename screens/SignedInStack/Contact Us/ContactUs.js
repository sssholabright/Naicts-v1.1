import { ActivityIndicator, Linking, View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Platform, TextInput, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../SignedOutStack/authHooks/firebase';

export default function ContactUs({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        if (!name || !email || !message) {
            setError('Please fill in all fields');
            return;
        }
        setError('');
        setLoading(true);
        try {
            await addDoc(collection(db, 'contact'), {
                name,
                email,
                message,
            });
            setLoading(false);
            setName('');
            setEmail('');
            setMessage('');
            Linking.openURL('mailto: brightprogrammer1@gmail.com ?subject=Contact Us&body=Name: ' + name + '%0D%0AEmail: ' + email + '%0D%0AMessage: ' + message);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar barStyle="light-content" backgroundColor="#f25fb9"/>
                <View style={{flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingTop: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                        {Platform.OS === "android" ? (
                            <Ionicons name="arrow-back" size={24} color='#fff' /> 
                        ): Platform.OS === "ios" (
                            <Ionicons name="chevron-back" size={24} color='#fff' />
                        )}
                    </TouchableOpacity> 
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 18, letterSpacing: 0.1, color: '#fff', fontWeight: '700'}}>CONTACT US</Text>
                    </View>  
                    <View style={{ width: 24 }} />
                </View>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                    <View style={{ marginBottom: 20, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Talk to Us!</Text>
                        <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 10 }}>If you have any questions or complaints. Please fill in the form below and we will get back to you as soon as possible.</Text>
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 20 }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>Name</Text>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>Email</Text>
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>Message</Text>
                            <TextInput
                                style={styles.input}
                                value={message}
                                onChangeText={setMessage}
                                multiline
                                numberOfLines={4}
                                textAlignVertical="top"
                            />
                        </View>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#f25fb9', paddingVertical: 15, alignItems: 'center', borderRadius: 5 }}
                            onPress={handleSubmit}
                        >
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Submit</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    {error ? (
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: 'red' }}>{error}</Text>
                        </View>
                    ) : null}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

// The code above is the ContactUs.js file. It is a simple form that allows the user to enter their name, email, and message. The user can then submit the form and it will send an email to the developer. The code below is the styles for the form.

const styles = StyleSheet.create({
    input: {
        marginVertical: 10, 
        borderWidth: 1, 
        borderColor: 'lightgray', 
        borderRadius: 5, 
        padding: 10, 
        fontSize: 16
    }
})
