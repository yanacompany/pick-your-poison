import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';
import PlayScreen from '../screens/PlayScreen';

const Stack = createStackNavigator();

export default class MainApp extends Component {
    render() {
        return (
            <Stack.Navigator
            initialRouteName="Auth"
            mode="modal"
            headerMode="none"
            screenOptions={{ 
                cardStyle: { 
                    backgroundColor: 'transparent'
                }
            }}
            >
            <Stack.Screen 
            name="Home" 
            component={HomeScreen} />
            <Stack.Screen 
            name="Auth" 
            component={AuthScreen} />
            <Stack.Screen 
            name="Play" 
            component={PlayScreen} />
          </Stack.Navigator>
        )
    }
}
