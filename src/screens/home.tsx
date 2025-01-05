import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
const HomePage = () => {
    return (
        <View>
        <Text>
        Welcome to the Chat App
        </Text>
        <TouchableOpacity>
            Click to chat
        </TouchableOpacity>
        </View>
    );
};

export default HomePage;