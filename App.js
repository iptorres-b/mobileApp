import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BadgesStack from './src/components/BadgesScreen/BadgesStack';

const App = () => {
  return <NavigationContainer>
    <BadgesStack />
  </NavigationContainer>

};

export default App;