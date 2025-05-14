import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Chrome as Home, Briefcase } from 'lucide-react-native';

export default function LocationButtons() {
  return (
    <View style={styles.locationButtonsContainer}>
      <Text style={styles.sectionTitle}>ADD LOCATION</Text>
      <Text style={styles.subtitle}>
        Add your home, work location, university and important office so you can add with ease
      </Text>
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.locationButton}>
          <Home size={20} color="#fff" />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.locationButton, styles.officeButton]}>
          <Briefcase size={20} color="#fff" />
          <Text style={styles.buttonText}>Office</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  locationButtonsContainer: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationButton: {
    flex: 1,
    backgroundColor: '#10B981',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 8,
  },
  officeButton: {
    backgroundColor: '#0EA5E9',
    marginRight: 0,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 8,
  },
});