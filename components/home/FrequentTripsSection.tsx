import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MapPin, Clock, ChevronRight } from 'lucide-react-native';

export default function FrequentTripsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>YOUR FREQUENT TRIPS</Text>
      
      <View style={styles.tripCard}>
        <View style={styles.tripHeader}>
          <View style={styles.locationInfo}>
            <View style={styles.locationContainer}>
              <MapPin size={18} color="#4B5563" />
              <Text style={styles.locationText}>Infopark</Text>
            </View>
            <View style={styles.timeContainer}>
              <Clock size={18} color="#4B5563" />
              <Text style={styles.timeText}>10:00 AM</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.findPoolButton}>
            <Text style={styles.findPoolText}>FIND POOL</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.tripDetails}>
          <View style={styles.locationPill}>
            <MapPin size={16} color="#10B981" />
            <Text style={styles.locationPillText}>2nd Infopark, Kakkanad</Text>
          </View>
          <ChevronRight size={16} color="#9CA3AF" />
          <View style={styles.locationPill}>
            <MapPin size={16} color="#EF4444" />
            <Text style={styles.locationPillText}>Lulu Mall</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 12,
  },
  tripCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    marginBottom: 16,
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationInfo: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 6,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    color: '#4B5563',
    marginLeft: 6,
  },
  findPoolButton: {
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  findPoolText: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '500',
  },
  tripDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  locationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  locationPillText: {
    fontSize: 14,
    color: '#4B5563',
    marginLeft: 4,
  },
});