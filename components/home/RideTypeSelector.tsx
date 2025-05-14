import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function RideTypeSelector() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.typeButton}>
        <View style={styles.iconContainer}>
          <View style={styles.carIcon} />
        </View>
        <Text style={styles.typeText}>Taxi</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.typeButton, styles.activeTypeButton]}>
        <View style={[styles.iconContainer, styles.activeIconContainer]}>
          <View style={styles.carpoolIcon} />
        </View>
        <Text style={[styles.typeText, styles.activeTypeText]}>Carpool</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    height: 60,
    zIndex: 3,
  },
  typeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
  },
  activeTypeButton: {
    backgroundColor: '#10B981',
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  activeIconContainer: {
    tintColor: '#fff',
  },
  carIcon: {
    width: 24,
    height: 16,
    backgroundColor: '#6B7280',
    borderRadius: 4,
  },
  carpoolIcon: {
    width: 24,
    height: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  typeText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '500',
  },
  activeTypeText: {
    color: '#fff',
  },
});