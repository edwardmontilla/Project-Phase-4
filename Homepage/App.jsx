import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import StartLearning from './StartLearning';
import AboutUs from './AboutUs';
import LevelSelection from './LevelSelection';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="🏠" component={HomePage} />
        <Stack.Screen name="StartLearning" component={StartLearning} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="LevelSelection" component={LevelSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
