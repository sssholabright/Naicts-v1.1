import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register, { Registration } from './SignedOutStack/Register'
import ProfileRegistration, { ImageUpload } from './SignedOutStack/ProfileRegistration'
import Login from './SignedOutStack/Login'

const Stack = createNativeStackNavigator()

export default function SignedOutStack() {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="profilereg" component={ProfileRegistration} options={{headerShown: true}}/>
            <Stack.Screen name="uploadimg" component={ImageUpload} options={{headerShown: true}}/>
        </Stack.Navigator>
    )
}