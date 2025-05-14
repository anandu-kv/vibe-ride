import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Star, Clock, User } from 'lucide-react-native';

interface RideCardProps {
  name: string;
  avatar: string;
  organization: string;
  rating: number;
  time: string;
  walkingDistance: string;
  travelDistance: string;
  destinationDistance: string;
  points: number;
  matchPercentage: number;
  isNew?: boolean;
  isVerified?: boolean;
  onOfferSeat?: () => void;
}

const RideCard: React.FC<RideCardProps> = ({
  name,
  avatar,
  organization,
  rating,
  time,
  walkingDistance,
  travelDistance,
  destinationDistance,
  points,
  matchPercentage,
  isNew,
  isVerified,
  onOfferSeat,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          {isVerified && <View style={styles.verifiedBadge} />}
        </View>
        
        <View style={styles.userDetails}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            {isNew && (
              <View style={styles.newBadge}>
                <Text style={styles.newText}>New</Text>
              </View>
            )}
          </View>
          
          <View style={styles.organizationContainer}>
            <User size={14} color="#6B7280" />
            <Text style={styles.organization}>{organization}</Text>
          </View>
          
          <View style={styles.ratingContainer}>
            <Star size={14} color="#F59E0B" fill="#F59E0B" />
            <Text style={styles.rating}>{rating}</Text>
            <Clock size={14} color="#6B7280" />
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
      </View>

      <View style={styles.distanceInfo}>
        <Text style={styles.distance}>🚶‍♂️ {walkingDistance}</Text>
        <Text style={styles.arrow}>→</Text>
        <Text style={styles.distance}>🚗 {travelDistance}</Text>
        <Text style={styles.arrow}>→</Text>
        <Text style={styles.distance}>🚶‍♂️ {destinationDistance}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.pointsContainer}>
          <Text style={styles.points}>🌿 {points} Points</Text>
        </View>

        <View style={styles.matchContainer}>
          <Text style={styles.matchText}>
            {matchPercentage === 100 ? 'Full match' : `${matchPercentage}% match`}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.offerButton}
          onPress={onOfferSeat}
        >
          <Text style={styles.offerButtonText}>Offer a seat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  verifiedBadge: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  userDetails: {
    marginLeft: 12,
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  newBadge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 8,
  },
  newText: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '500',
  },
  organizationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  organization: {
    marginLeft: 4,
    color: '#6B7280',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    marginLeft: 4,
    marginRight: 12,
    color: '#6B7280',
    fontSize: 14,
  },
  time: {
    marginLeft: 4,
    color: '#6B7280',
    fontSize: 14,
  },
  distanceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  distance: {
    fontSize: 14,
    color: '#4B5563',
  },
  arrow: {
    marginHorizontal: 8,
    color: '#9CA3AF',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    fontSize: 14,
    color: '#059669',
    fontWeight: '500',
  },
  matchContainer: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  matchText: {
    fontSize: 12,
    color: '#4B5563',
  },
  offerButton: {
    backgroundColor: '#22C55E',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  offerButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default RideCard;