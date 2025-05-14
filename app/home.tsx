import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CarpoolScreen from '@/components/screens/CarpoolScreen';

export default function Home() {
  return <CarpoolScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});