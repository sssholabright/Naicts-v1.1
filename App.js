import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SignedInStack from './screens/SignedInStack';
import SignedOutStack from './screens/SignedOutStack';
import useAuth, { AuthProvider } from './screens/SignedOutStack/authHooks/useAuth';

export default function App() {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      {/* HOC => Higher Order Component */}
      <AuthProvider>
        {/* Passes down the auth stuffs to children */}
        {user ? <SignedInStack /> : <SignedOutStack />}
      </AuthProvider>
    </NavigationContainer>
  );
};

