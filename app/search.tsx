import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Search as SearchIcon, Map, Crosshair } from 'lucide-react-native';

export default function SearchPage() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const type = params.type === 'drop' ? 'Drop' : 'Pickup';

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

      <View style={styles.searchBar}>
        <SearchIcon size={20} color="#6B7280" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder={`Enter ${type} Location`}
          placeholderTextColor="#999999"
          autoFocus
        />
      </View>

      <TouchableOpacity 
        style={styles.mapOption}
        onPress={() => router.push(`/map?type=${params.type}`)}
      >
        <View style={styles.mapOptionContent}>
          <Map size={20} color="#6B7280" />
          <Text style={styles.mapOptionText}>Select location by map</Text>
          <Crosshair size={20} color="#6B7280" />
        </View>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mapOption: {
    marginHorizontal: 16,
    marginTop: 8,
    padding: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  mapOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mapOptionText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#4B5563',
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
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    margin: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#111827',
  },
});
