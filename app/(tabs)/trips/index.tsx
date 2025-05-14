import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TripCard from '@/components/trips/TripCard';

const trips = [
  {
    id: '1',
    from: 'Smart City, Kakkanad',
    to: 'Infopark, Kochi',
    date: '23 May 2025',
    time: '09:30 AM',
    status: 'Completed',
    distance: '12.5 km',
    co2Saved: '2.4 kg'
  },
  {
    id: '2',
    from: 'Lulu Mall',
    to: 'Marine Drive',
    date: '21 May 2025',
    time: '06:15 PM',
    status: 'Completed',
    distance: '8.3 km',
    co2Saved: '1.8 kg'
  },
  {
    id: '3',
    from: 'MG Road',
    to: 'Edappally',
    date: '18 May 2025',
    time: '11:45 AM',
    status: 'Cancelled',
    distance: '10.1 km',
    co2Saved: '0 kg'
  }
];

export default function Trips() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Trips</Text>
      </View>
      <FlatList
        data={trips}
        renderItem={({ item }) => <TripCard trip={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  listContent: {
    padding: 16,
  },
});