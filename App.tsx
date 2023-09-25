import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <AppRoutes />
    </View>
  );
}

