import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ContributionCard() {
  return (
    <View style={styles.contributionSection}>
      <Text style={styles.sectionTitle}>YOUR CONTRIBUTION</Text>
      <Text style={styles.subtitle}>According to travel statistics and CO2 reduction</Text>
      
      <View style={styles.contributionCard}>
        <View style={styles.leafContainer}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg' }}
            style={styles.leafImage}
          />
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.statsValue}>3 Rides</Text>
          <Text style={styles.separator}>-</Text>
          <Text style={styles.statsValue}>15 kg of CO2 reduced</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contributionSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  contributionCard: {
    backgroundColor: '#10B981',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leafContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },
  leafImage: {
    width: '100%',
    height: '100%',
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  statsValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  separator: {
    color: '#fff',
    marginHorizontal: 8,
  },
});