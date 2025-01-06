import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomePage from './src/screens/home';
import  ChatList  from './src/screens/ChatScreen/index'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/screens/login';

// const MyStack = createNativeStackNavigator({
//   screens: {
//     Home: HomePage,
//     ChatPage: ChatList,
//   },
// });

const Stack = createNativeStackNavigator();


const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default App;