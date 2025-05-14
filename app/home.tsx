import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from '@/components/screens/HomeScreen';

export default function Home() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});