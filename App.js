import React from 'react';
import { Button, Text, View } from 'react-native';
import Info from './views/info';
import {css} from './assets/css/css';
import { useState, useEffect } from 'react';

export default function App() {
  const [name,setName]=useState('Nome');

  useEffect(() =>{
    setName('Nome 2')
  });

  const props_info = {
    appName: 'Astra App',
    devName: 'Reblin'
  };

  return (
    <View style={css.container}>
      <Button title="adicionar quantidade"></Button>
      <Text>{name}</Text>
      <Info {...props_info} ></Info>
    </View>
  );
}