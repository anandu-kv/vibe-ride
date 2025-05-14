import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  ChevronLeft,
  MapPin,
  Clock,
  Users,
  Percent,
  ArrowRight,
  ChevronUp,
} from 'lucide-react-native';
import MapView, { Polyline, Marker, Region } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useLocationStore } from '@/store/locationStore';

interface TabProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active, onPress }) => (
  <TouchableOpacity
    style={[styles.tab, active && styles.activeTab]}
    onPress={onPress}
  >
    <Text style={[styles.tabText, active && styles.activeTabText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const CarpoolScreen = () => {
  const [activeTab, setActiveTab] = useState<'find' | 'offer'>('find');
  const [recurringRide, setRecurringRide] = useState(false);

  const defaultRegion: Region = {
    latitude: 10.0261, // Default to Kerala
    longitude: 76.3125,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Carpool</Text>
      </View>

      {/* Map View */}
      <View style={styles.mapContainer}>
        <MapView
          // ref={mapRef}
          style={styles.map}
          initialRegion={defaultRegion}
          showsCompass
          rotateEnabled
          zoomEnabled
          scrollEnabled
          showsUserLocation
          showsMyLocationButton
          onRegionChangeComplete={(region) => {
            console.log('Pin is now at:', region.latitude, region.longitude);
            // setCurrentRegion(region);
          }}
        >
          <>
            <MapViewDirections
              origin={useLocationStore.getState().pickupCoordinates}
              destination={useLocationStore.getState().dropCoordinates}
              apikey="AIzaSyBtw7f9P4UWEbIEzu54yXEDlPyaNXZ6wi4"
              strokeWidth={4}
              strokeColor="red"
              mode={'DRIVING'}
            />
            <Marker
              coordinate={useLocationStore.getState().pickupCoordinates}
              title="Starting Point"
            />
            <Marker
              coordinate={useLocationStore.getState().dropCoordinates}
              title="Destination Point"
            />
          </>
        </MapView>
        <TouchableOpacity style={styles.routeButton}>
          <Text style={styles.routeButtonText}>Route</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <Tab
          label="Find Pool"
          active={activeTab === 'find'}
          onPress={() => setActiveTab('find')}
        />
        <Tab
          label="Offer Pool"
          active={activeTab === 'offer'}
          onPress={() => setActiveTab('offer')}
        />
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Location Details */}
        <View style={styles.locationContainer}>
          <View style={styles.locationItem}>
            <View style={[styles.locationDot, styles.sourceDot]} />
            <Text style={styles.locationText}>
              Infopark Main Gate, Infopark Campus, Infopark, ...
            </Text>
          </View>
          <View style={styles.locationItem}>
            <View style={[styles.locationDot, styles.destinationDot]} />
            <Text style={styles.locationText}>
              DD Diamond Valley, DD Diamond Valley Road, Ed...
            </Text>
          </View>
        </View>

        {/* Ride Details */}
        <View style={styles.rideDetails}>
          <View style={styles.rideDetailItem}>
            <Clock size={20} color="#666" />
            <Text style={styles.rideDetailText}>14 May, 7:18 PM</Text>
          </View>
          <View style={styles.rideDetailItem}>
            <Users size={20} color="#666" />
            <Text style={styles.rideDetailText}>1 Seat</Text>
          </View>
          <TouchableOpacity style={styles.offerButton}>
            <Percent size={20} color="#2196F3" />
          </TouchableOpacity>
        </View>

        {/* Recurring Ride */}
        <TouchableOpacity
          style={styles.recurringRide}
          onPress={() => setRecurringRide(!recurringRide)}
        >
          <View style={styles.recurringRideLeft}>
            <ArrowRight size={20} color="#2196F3" />
            <Text style={styles.recurringRideText}>
              Recurring Ride - Mo, Tu, We, Th, Fr
            </Text>
          </View>
          <View style={[styles.toggle, recurringRide && styles.toggleActive]} />
        </TouchableOpacity>

        {/* Quick Ride Wallet (Only for Find Pool) */}
        {activeTab === 'find' && (
          <TouchableOpacity style={styles.walletButton}>
            <Text style={styles.walletButtonText}>Quick Ride Wallet</Text>
            <ChevronUp size={20} color="#22C55E" />
          </TouchableOpacity>
        )}

        {/* Action Button */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>
            {activeTab === 'find' ? 'FIND POOL' : 'OFFER POOL'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 8,
  },
  mapContainer: {
    height: 300,
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  routeButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    elevation: 2,
  },
  routeButtonText: {
    color: '#000',
    fontWeight: '500',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#22C55E',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#22C55E',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  locationContainer: {
    marginBottom: 16,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  sourceDot: {
    backgroundColor: '#22C55E',
  },
  destinationDot: {
    backgroundColor: '#EF4444',
  },
  locationText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
  },
  rideDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rideDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  rideDetailText: {
    marginLeft: 8,
    color: '#374151',
  },
  offerButton: {
    marginLeft: 'auto',
  },
  recurringRide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  recurringRideLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recurringRideText: {
    marginLeft: 8,
    color: '#2196F3',
  },
  toggle: {
    width: 40,
    height: 24,
    backgroundColor: '#D1D5DB',
    borderRadius: 12,
  },
  toggleActive: {
    backgroundColor: '#22C55E',
  },
  walletButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    marginBottom: 16,
  },
  walletButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  actionButton: {
    backgroundColor: '#22C55E',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CarpoolScreen;
