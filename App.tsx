import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PublicNavigation from './navigation/PublicNavigation';
import LogInScreen from './src/screens/public/LogInScreen/LogInScreen';
import SignUpScreen from './src/screens/public/SignUpScreen/SignUpScreen';

export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
      <PublicNavigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#f9fbfc'
  },
});
