import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, MapPin, Crosshair } from 'lucide-react-native';
import * as Location from 'expo-location';
import MapView, { Region } from 'react-native-maps';

export default function MapPage() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const type = params.type === 'drop' ? 'Drop' : 'Pickup';
  const mapRef = useRef<MapView>(null);
  const defaultRegion: Region = {
    latitude: 10.0261,  // Default to Kerala
    longitude: 76.3125,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;

        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced
        });

        mapRef.current?.animateToRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }, 1000);
      } catch (error) {
        console.log('Error getting location:', error);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Location</Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={defaultRegion}
          showsCompass
          rotateEnabled
          zoomEnabled
          scrollEnabled
          showsUserLocation
          showsMyLocationButton
        />
        <View style={styles.pinContainer}>
          <MapPin size={32} color="rgb(56 131 56)" />
        </View>
      </View>


        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={() => {
            // TODO: Get coordinates from map center and pass back
            router.back();
          }}
        >
          <Text style={styles.confirmButtonText}>CONFIRM POINT</Text>
        </TouchableOpacity>
          </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationButton: {
    position: 'absolute',
    bottom: 80,
    right: 16,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  pinContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -16 }, { translateY: -32 }],
  },
  confirmButton: {
    position: 'absolute',
    bottom: 16,
    left: 60,
    right: 60,
    backgroundColor: 'rgb(56 131 56)',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
