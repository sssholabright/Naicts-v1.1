import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SignedInStack from './screens/SignedInStack';
import SignedOutStack from './screens/SignedOutStack';

export default function App() {
  const user = 'mujeeb';

  return (
    <NavigationContainer>
      {user === 'mujeeb' ? <SignedInStack /> : <SignedOutStack />}
    </NavigationContainer>
  );
};

