import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function OfferSection() {
  return (
    <View style={styles.offersSection}>
      <Text style={styles.sectionTitle}>OFFERS FOR YOU</Text>
      
      <View style={styles.offersScrollView}>
        <View style={styles.offerCard}>
          <View style={styles.offerBadge}>
            <Text style={styles.offerBadgeText}>Quick Ride</Text>
          </View>
          <View style={styles.offerContent}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/3943746/pexels-photo-3943746.jpeg' }}
              style={styles.offerImage}
            />
            <View style={styles.offerInfo}>
              <Text style={styles.offerTitle}>Share Experience</Text>
              <Text style={styles.offerPoints}>Get 25 Points.</Text>
              <Text style={styles.offerDescription}>Share digital Memento</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  offersSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 12,
  },
  offersScrollView: {
    marginBottom: 8,
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  offerBadge: {
    position: 'absolute',
    top: 12,
    left: 0,
    backgroundColor: '#93C5FD',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    zIndex: 1,
  },
  offerBadgeText: {
    color: '#1E40AF',
    fontSize: 12,
    fontWeight: '500',
  },
  offerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  offerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  offerInfo: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  offerPoints: {
    fontSize: 14,
    fontWeight: '500',
    color: '#10B981',
    marginBottom: 2,
  },
  offerDescription: {
    fontSize: 14,
    color: '#4B5563',
  },
});