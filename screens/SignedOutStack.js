import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from './SignedOutStack/Register'
import Login from './SignedOutStack/Login'
import ForgotPassword from './SignedOutStack/ForgotPassword'
import ResetPassword from './SignedOutStack/ResetPassword'

const Stack = createNativeStackNavigator()

export default function SignedOutStack() {
    return (
        <Stack.Navigator initialRouteName="">
            <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="resetpassword" component={ResetPassword} options={{headerShown: true}}/>
            <Stack.Screen name="forgotpassword" component={ForgotPassword} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}