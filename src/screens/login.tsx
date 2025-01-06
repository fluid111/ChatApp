import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
const LoginPage = ({navigation}: any) => {
    return (
        <View>
        <Text>
        Welcome to the Login page
        </Text>
        <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
            <Text>

            Home
            </Text>
        </TouchableOpacity>
        </View>
    );
};

export default LoginPage;