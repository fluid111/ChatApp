import React ,{useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomePage from './src/screens/home';
import  ChatList  from './src/screens/ChatScreen/index'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/screens/login';
import { AuthProvider } from './src/context/authContext';
// const MyStack = createNativeStackNavigator({
//   screens: {
//     Home: HomePage,
//     ChatPage: ChatList,
//   },
// });

const Stack = createNativeStackNavigator();


const App = () => {

  const[LoginStatus, setLogin]= useState(0);
  return (  
  <AuthProvider>
    <HomePage />
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
   </NavigationContainer>
  </AuthProvider>
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