import React from 'react';
import { View, Text } from 'react-native';

export default function Info(props){
    return (
        <View>
            <Text>App: {props.appName} / Desenvolvido por: {props.devName}</Text>
        </View>    
    );
}