import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import RideCard from './RideCard';
import InviteSection from './InviteSection';

const rideData = [
  {
    name: 'Ben Elias Prasad',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    organization: 'Tcs',
    rating: 5,
    time: '6:57 pm',
    walkingDistance: '350 m',
    travelDistance: '5.49 km',
    destinationDistance: '130 m',
    points: 27,
    matchPercentage: 100,
    isVerified: true,
  },
  {
    name: 'Sidharth Ganesh',
    avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg',
    organization: 'Not Verified',
    rating: 5,
    time: '6:57 pm',
    walkingDistance: '100 m',
    travelDistance: '3.53 km',
    destinationDistance: '10 m',
    points: 21,
    matchPercentage: 100,
  },
  // Add more ride data as needed
];

const RideList = () => {
  const handleOfferSeat = () => {
    // Handle offer seat action
  };

  const handleInvite = () => {
    // Handle invite action
  };

  const handleShare = () => {
    // Handle share action
  };

  return (
    <ScrollView style={styles.container}>
      {rideData.map((ride, index) => (
        <RideCard
          key={index}
          {...ride}
          onOfferSeat={handleOfferSeat}
        />
      ))}
      
      <InviteSection
        contact={{
          name: 'Mithun',
          avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg',
        }}
        onInvite={handleInvite}
        onShare={handleShare}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
});

export default RideList;