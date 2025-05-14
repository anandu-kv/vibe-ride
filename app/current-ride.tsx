import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Bell, MoreVertical, Users, Edit2 } from 'lucide-react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import { useLocationStore } from '@/store/locationStore';
import { Region } from 'react-native-maps';

export default function CurrentRide() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const type = params.type === 'drop' ? 'Drop' : 'Pickup';
  const mapRef = useRef<MapView>(null);
  const [currentRegion, setCurrentRegion] = useState<Region | null>(null);
  const { pickupLocation, dropLocation } = useLocationStore();
  const rideId = '108758509';
  
  // Sample route coordinates (you should replace these with actual route data)
  const routeCoordinates = [
    { latitude: 10.5276, longitude: 76.2144 },  // Perinjanam
    { latitude: 9.9312, longitude: 76.2673 },   // Kochi
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>14 May, 7:18 PM</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={24} color="#111827" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MoreVertical size={24} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 10.2276,
            longitude: 76.2144,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        >
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#000"
            strokeWidth={3}
          />
          <Marker
            coordinate={routeCoordinates[0]}
            pinColor="green"
          />
          <Marker
            coordinate={routeCoordinates[1]}
            pinColor="red"
          />
        </MapView>
      </View>

      <View style={styles.rideDetails}>
        <View style={styles.rideMatchesSection}>
          <View style={styles.leftColumn}>
            <Text style={styles.sectionTitle}>RIDE MATCHES</Text>
            <View style={styles.noMatchesContainer}>
              <Text style={styles.noMatchesText}>No carpool takers are available at this time. </Text>
              <TouchableOpacity>
                <Text style={styles.inviteLink}>Invite by contact</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rightColumn}>
            <TouchableOpacity style={styles.rideTakersCircle} onPress={() => router.push('/ride-list')}>
              <Users size={24} color="#666" />
            </TouchableOpacity>
            <Text style={styles.rideTakersLabel}>Ride Takers</Text>
          </View>
        </View>


        <Text style={styles.sectionTitle}>RIDE DETAILS</Text>
        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            <View style={[styles.locationDot, styles.pickupDot]} />
            <Text style={styles.locationText}>{pickupLocation || 'Select pickup location'}</Text>
            <TouchableOpacity onPress={() => router.push('/map?type=pickup')}>
              <Edit2 size={20} color="#666" />
            </TouchableOpacity>
          </View>
          <View style={styles.locationRow}>
            <View style={[styles.locationDot, styles.dropDot]} />
            <Text style={styles.locationText}>{dropLocation || 'Select drop location'}</Text>
            <TouchableOpacity onPress={() => router.push('/map?type=drop')}>
              <Edit2 size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.distanceRow}>
          <Text style={styles.distanceText}>Distance: 48 KM</Text>
        </View>

        <TouchableOpacity style={styles.startRideButton}>
          <Text style={styles.startRideText}>START RIDE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rideMatchesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  leftColumn: {
    flex: 1,
    marginRight: 16,
  },
  rightColumn: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 4,
  },
  rideTakersWrapper: {
    alignItems: 'center',
  },
  rideTakersCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rideTakersLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
    padding: 4,
  },
  mapContainer: {
    height: '40%',
    backgroundColor: '#F3F4F6',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  rideDetails: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginBottom: 12,
  },
  noMatchesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    flexWrap: 'wrap',
  },
  noMatchesText: {
    color: '#666',
  },
  inviteLink: {
    color: '#2196F3',
    marginLeft: 4,
  },
  locationContainer: {
    marginBottom: 16,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  pickupDot: {
    backgroundColor: '#4CAF50',
  },
  dropDot: {
    backgroundColor: '#F44336',
  },
  locationText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginRight: 8,
  },
  distanceRow: {
    marginBottom: 24,
  },
  distanceText: {
    color: '#666',
    fontSize: 14,
  },
  startRideButton: {
    backgroundColor: '#00C853',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  startRideText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  rideTakersButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rideTakersText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
});
