import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomePage from './src/screens/home';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <HomePage></HomePage>
    </View>
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

export default LotsOfStyles;