import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { styles } from '../Styles/ChatList.stylesheet';

import { useNavigation } from '@react-navigation/native';
import LoginPage from './login';
import { useAuth } from '../context/authContext';

// the {navigation}: any should be fixed , its just temporary solution for fixing "any error" 
const HomePage = ({ navigation }: any) => {
    // const navigation = useNavigation();
    const { isLoggedIn, logIn, logOut } = useAuth();
    return (
        <View style={styles.SafeAreaViewContainer}>
             {isLoggedIn ? (
                <>
            <Text>
            Welcome to the Chat App
            </Text>
            <TouchableOpacity>
                <Text>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>SIGNUP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate("Login", {
                LoginPageData: " This is the login page data passed from home",
            })}>
                <Text>continue for testing....</Text>
            </TouchableOpacity>
                </>)
                :<>
                 <TouchableOpacity>
                <Text>YOU ARE LOGGED IN </Text>
            </TouchableOpacity>
                </>
        </View>
    );
};

export default HomePage;