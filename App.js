import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import tailwind from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';
import MainApp from './MainApp/MainApp';

export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView style={tailwind('h-full bg-black pt-12 pb-6')}>
    <StatusBar style="light" />
    <View style={tailwind('h-full bg-white  mx-2 p-1 rounded-lg')}>
    <MainApp />
    </View>
  
  </SafeAreaView>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
