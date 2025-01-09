import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';


import { useNavigation } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';

import LoginPage from './login';

import { useAuth } from '../context/authContext';

import { styles } from '../Styles/ChatList.stylesheet';
// the {navigation}: any should be fixed , its just temporary solution for fixing "any error" 


const HomePage = () => {
    const navigation = useNavigation();
    const { isLoggedIn, logIn, logOut } = useAuth();
    return (
        <View style={styles.SafeAreaViewContainer}>
             {isLoggedIn ? (
                <>
            {/* <Text> */}
            
            {/* </Text> */}
            
            <LoginPage/>
            <TouchableOpacity onPress={logOut}>
                <Text>LOGOUT</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate("Login", {
                LoginPageData: " This is the login page data passed from home",
                })}>
                <Text>continue for testing....</Text>
                </TouchableOpacity> */}
                </>)
                :<>
                <TouchableOpacity onPress={logIn}>
                    <Text style={styles.LoginButton}>LOGIN</Text>
                </TouchableOpacity>
                 <TouchableOpacity>
                <Text>CLICK TO LOGIN skhf</Text>
            </TouchableOpacity>
                </>
}
        </View>
    );
};

export default HomePage;