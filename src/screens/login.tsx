import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';


import { useNavigation } from '@react-navigation/native';

import HomePage from './home';

import { useAuth } from '../context/authContext';

import { styles } from '../Styles/ChatList.stylesheet';



const LoginPage = ({route}: any) => {
    const LoginPageData = route?.params?.LoginPageData || ''; 

    const navigation = useNavigation();
    const { isLoggedIn, logIn, logOut } = useAuth();

    return (
    <View style={styles.SafeAreaViewContainer}>
                 {isLoggedIn ? (
                     <>
                <Text>
                Welcome to the Chat List
                </Text>
                    </>)
                    :<>
                    <TouchableOpacity onPress={logIn}>
                        <Text style={styles.LoginButton}>LOGIN</Text>
                    </TouchableOpacity>
                     <TouchableOpacity>
                    <Text>CLICK TO LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>CLICK TO LOGIN</Text>
          </TouchableOpacity>
                    </>
    }
            </View>
                );
};

export default LoginPage;