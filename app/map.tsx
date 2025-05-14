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
import { useLocationStore } from '@/store/locationStore';
import { ArrowLeft, MapPin } from 'lucide-react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Region } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default function MapPage() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const type = params.type === 'drop' ? 'Drop' : 'Pickup';
  const ride = params.ride === 'find' ? 'Find' : 'Offer';
  const mapRef = useRef<MapView>(null);
  const [currentRegion, setCurrentRegion] = useState<Region | null>(null);
  const [destination, setDestination] = useState(
    useLocationStore.getState().pickupCoordinates
  );

  const [origin, setOrigin] = useState({
    latitude: 10.011066756200517, // Default to Kerala
    longitude: 76.36568197980523,
  });
  const defaultRegion: Region = {
    latitude: 10.0261, // Default to Kerala
    longitude: 76.3125,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  useEffect(() => {
    if (type === 'Drop') {
      setOrigin(useLocationStore.getState().pickupCoordinates);
    }

    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;

        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });

        mapRef.current?.animateToRegion(
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
          1000
        );
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
          onRegionChangeComplete={(region) => {
            console.log('Pin is now at:', region.latitude, region.longitude);
            setCurrentRegion(region);
          }}
        >
          {type === 'Drop' && (
            <>
              <MapViewDirections
                origin={origin}
                destination={destination}
                apikey="AIzaSyBtw7f9P4UWEbIEzu54yXEDlPyaNXZ6wi4"
                strokeWidth={4}
                strokeColor="red"
                mode={'DRIVING'}
              />
              <Marker coordinate={origin} title="Starting Point" />
              <Marker coordinate={destination} title="Destination Point" />
            </>
          )}
        </MapView>

        <View style={styles.pinContainer}>
          <MapPin size={32} color="rgb(56 131 56)" fill="rgb(56 131 56)" />
        </View>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          if (currentRegion) {
            // Get the address using reverse geocoding
            Location.reverseGeocodeAsync({
              latitude: currentRegion.latitude,
              longitude: currentRegion.longitude,
            }).then((addresses) => {
              const address = addresses[0];
              const locationText = address
                ? `${address.street || ''} ${address.city || ''} ${
                    address.region || ''
                  }`
                : `${currentRegion.latitude.toFixed(
                    6
                  )}, ${currentRegion.longitude.toFixed(6)}`;

              // Update the store based on the type
              if (type === 'Pickup') {
                useLocationStore.getState().setPickupLocation(locationText, {
                  latitude: currentRegion.latitude,
                  longitude: currentRegion.longitude,
                });
                router.back();
              } else {
                setDestination({
                  latitude: currentRegion.latitude,
                  longitude: currentRegion.longitude,
                });
                useLocationStore.getState().setDropLocation(locationText, {
                  latitude: currentRegion.latitude,
                  longitude: currentRegion.longitude,
                });
              }
            });
          }
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
