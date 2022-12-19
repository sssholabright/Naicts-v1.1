import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import SignedInStack from './screens/SignedInStack';
import SignedOutStack from './screens/SignedOutStack';
import { auth } from './screens/SignedOutStack/authHooks/firebase';
import useAuth, { AuthProvider } from './screens/SignedOutStack/authHooks/useAuth';
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  const [user, setUser] = useState()
  const [initializing, setInitializing] = useState(true)
  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  if (initializing) {
    return null
  }
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
