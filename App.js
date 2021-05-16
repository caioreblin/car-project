import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Info from './views/info';

export default function App() {
  const props_info = {
    appName: 'Astra App',
    devName: 'Reblin'
  };
  return (
    <View style={styles.container}>
      <Info {...props_info} ></Info>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});