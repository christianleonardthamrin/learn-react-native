import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PublicNavigation from './navigation/PublicNavigation';
import { I18nProvider, LOCALES } from './src/i18n';

export default function App() {

  return (
    <I18nProvider locale={LOCALES.INDONESIA}>
      <SafeAreaProvider style={styles.container}>
        <PublicNavigation />
      </SafeAreaProvider>
    </I18nProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#f9fbfc'
  },
});
