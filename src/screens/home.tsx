import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { styles } from '../Styles/ChatList.stylesheet';

import { useNavigation } from '@react-navigation/native';

// the {navigation}: any should be fixed , its just temporary solution for fixing "any error" 
const HomePage = ({ navigation }: any) => {
    // const navigation = useNavigation();
    return (
        <View style={styles.SafeAreaViewContainer}>
            <Text>
            Welcome to the Chat App
            </Text>
            <TouchableOpacity>
                <Text>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>SIGNUP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate("Login")}>
                <Text>continue for testing....</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomePage;