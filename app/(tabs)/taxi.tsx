import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Taxi() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Taxi Service</Text>
      <Text style={styles.subtext}>Coming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
  },
});