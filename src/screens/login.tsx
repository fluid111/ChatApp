import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
const LoginPage = ({route, navigation}: any) => {
    const {LoginPageData} = route.params; 
    return (
        <View>
        <Text>
        Welcome to the Login page
        </Text>
        <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
            <Text>

            Home
        {LoginPageData}
            </Text>

        </TouchableOpacity>
        </View>
    );
};

export default LoginPage;