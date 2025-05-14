import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Car, Leaf, Award } from 'lucide-react-native';

interface ProfileStatsCardProps {
  rides: number;
  co2Reduction: number;
  points: number;
}

export default function ProfileStatsCard({ rides, co2Reduction, points }: ProfileStatsCardProps) {
  return (
    <View style={styles.statsCard}>
      <View style={styles.statItem}>
        <View style={styles.statIconContainer}>
          <Car size={20} color="#10B981" />
        </View>
        <View style={styles.statContent}>
          <Text style={styles.statValue}>{rides}</Text>
          <Text style={styles.statLabel}>Rides</Text>
        </View>
      </View>
      
      <View style={styles.statDivider} />
      
      <View style={styles.statItem}>
        <View style={styles.statIconContainer}>
          <Leaf size={20} color="#10B981" />
        </View>
        <View style={styles.statContent}>
          <Text style={styles.statValue}>{co2Reduction} kg</Text>
          <Text style={styles.statLabel}>CO2 Reduced</Text>
        </View>
      </View>
      
      <View style={styles.statDivider} />
      
      <View style={styles.statItem}>
        <View style={styles.statIconContainer}>
          <Award size={20} color="#10B981" />
        </View>
        <View style={styles.statContent}>
          <Text style={styles.statValue}>{points}</Text>
          <Text style={styles.statLabel}>Points</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statsCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  statContent: {
    justifyContent: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#E5E7EB',
    marginHorizontal: 8,
  },
});