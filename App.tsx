import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import LogInScreen from './src/screens/LogInScreen/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';

export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#f9fbfc'
  },
});
