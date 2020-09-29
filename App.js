import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import { MainScreen } from './src/screens';


export default function App() {
  const [loaded] = Font.useFonts({
    Inter: require('./src/assets/fonts/Inter-Regular-slnt.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <MainScreen>
        <Text style={styles.credits}>MoskKir 2020</Text>
      </MainScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter',
  },
  credits: {
    marginTop: 20,
    marginLeft: -20,
    marginBottom: 20,
    textAlign: 'center',
  }
});
