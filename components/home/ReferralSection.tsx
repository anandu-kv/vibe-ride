import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function ReferralSection() {
  return (
    <View style={styles.referralSection}>
      <Text style={styles.sectionTitle}>REFER AND EARN</Text>
      <Text style={styles.referralText}>
        Refer to earn 50 points plus 2% commission on every ride
      </Text>
      
      <View style={styles.referralContentRow}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg' }}
          style={styles.referralImage}
        />
        
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Anandu S</Text>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>Level 1</Text>
          </View>
        </View>
      </View>
      
      <Text style={styles.referTarget}>
        Refer 10 more people to reach Level 2
      </Text>
      
      <View style={styles.referralActions}>
        <TouchableOpacity style={styles.referButton}>
          <Text style={styles.referButtonText}>Refer Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  referralSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 8,
  },
  referralText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  referralContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  referralImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginRight: 8,
  },
  levelBadge: {
    backgroundColor: '#0D9488',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
  },
  referTarget: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 16,
  },
  referralActions: {
    flexDirection: 'row',
  },
  referButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#10B981',
    borderRadius: 8,
    marginRight: 16,
  },
  referButtonText: {
    color: '#10B981',
    fontSize: 14,
    fontWeight: '500',
  },
  moreButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  moreButtonText: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '500',
  },
});