import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react-native';

interface Trip {
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  status: string;
  distance: string;
  co2Saved: string;
}

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const isCompleted = trip.status === 'Completed';
  
  return (
    <View style={styles.tripCard}>
      <View style={styles.tripHeader}>
        <View style={styles.statusContainer}>
          <View 
            style={[
              styles.statusIndicator, 
              isCompleted ? styles.completedIndicator : styles.cancelledIndicator
            ]} 
          />
          <Text 
            style={[
              styles.statusText, 
              isCompleted ? styles.completedText : styles.cancelledText
            ]}
          >
            {trip.status}
          </Text>
        </View>
        <Text style={styles.distanceText}>{trip.distance}</Text>
      </View>
      
      <View style={styles.tripLocations}>
        <View style={styles.locationItem}>
          <MapPin size={16} color="#10B981" />
          <Text style={styles.locationText}>{trip.from}</Text>
        </View>
        
        <View style={styles.locationConnector}>
          <View style={styles.connectorLine} />
          <ArrowRight size={14} color="#9CA3AF" />
        </View>
        
        <View style={styles.locationItem}>
          <MapPin size={16} color="#EF4444" />
          <Text style={styles.locationText}>{trip.to}</Text>
        </View>
      </View>
      
      <View style={styles.tripDetails}>
        <View style={styles.detailItem}>
          <Calendar size={14} color="#6B7280" />
          <Text style={styles.detailText}>{trip.date}</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Clock size={14} color="#6B7280" />
          <Text style={styles.detailText}>{trip.time}</Text>
        </View>
        
        {isCompleted && (
          <View style={styles.savingsContainer}>
            <Text style={styles.savingsText}>CO2 Saved: </Text>
            <Text style={styles.savingsValue}>{trip.co2Saved}</Text>
          </View>
        )}
      </View>
      
      <View style={styles.tripActions}>
        <TouchableOpacity 
          style={[
            styles.actionButton,
            isCompleted ? styles.repeatButton : styles.reBookButton
          ]}
        >
          <Text 
            style={[
              styles.actionButtonText,
              isCompleted ? styles.repeatButtonText : styles.reBookButtonText
            ]}
          >
            {isCompleted ? 'Repeat Ride' : 'Re-book'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tripCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  completedIndicator: {
    backgroundColor: '#10B981',
  },
  cancelledIndicator: {
    backgroundColor: '#EF4444',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  completedText: {
    color: '#10B981',
  },
  cancelledText: {
    color: '#EF4444',
  },
  distanceText: {
    fontSize: 14,
    color: '#6B7280',
  },
  tripLocations: {
    marginBottom: 12,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 16,
    color: '#111827',
    marginLeft: 8,
  },
  locationConnector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    marginBottom: 8,
  },
  connectorLine: {
    width: 8,
    height: 1,
    backgroundColor: '#9CA3AF',
    marginRight: 4,
  },
  tripDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  savingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  savingsText: {
    fontSize: 14,
    color: '#6B7280',
  },
  savingsValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10B981',
  },
  tripActions: {
    flexDirection: 'row',
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginRight: 12,
  },
  repeatButton: {
    backgroundColor: '#F0FDF4',
  },
  reBookButton: {
    backgroundColor: '#FEF2F2',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  repeatButtonText: {
    color: '#10B981',
  },
  reBookButtonText: {
    color: '#EF4444',
  },
  detailsButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  detailsButtonText: {
    fontSize: 14,
    color: '#6B7280',
  },
});