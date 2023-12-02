import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Homepage/HomePage';
import StartLearning from './Homepage/StartLearning';
import AboutUs from './Homepage/AboutUs';
import LevelSelection from './Level/LevelSelection';
import QAPage from './quiz/QAPage';
import Settings from './settings/Settings';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="🏠" component={HomePage} />
        <Stack.Screen name="StartLearning" component={StartLearning} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="LevelSelection" component={LevelSelection} />
        <Stack.Screen name="QAPage" component={QAPage} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
