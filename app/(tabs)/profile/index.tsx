import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight, CreditCard, Mail, Phone, Award, MapPin } from 'lucide-react-native';
import ProfileStatsCard from '@/components/profile/ProfileStatsCard';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Image 
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
              style={styles.profileImage} 
            />
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Anandu S</Text>
              <View style={styles.levelBadge}>
                <Text style={styles.levelText}>Level 1</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>90% Profile Completeness</Text>
              <Text style={styles.progressAction}>Add details to complete now</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '90%' }]} />
            </View>
          </View>
        </View>
        
        <ProfileStatsCard 
          rides={3}
          co2Reduction={15}
          points={275}
        />
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <View style={styles.infoItem}>
            <Mail size={20} color="#6B7280" />
            <Text style={styles.infoText}>anandu.s@example.com</Text>
            <ChevronRight size={20} color="#6B7280" />
          </View>
          
          <View style={styles.infoItem}>
            <Phone size={20} color="#6B7280" />
            <Text style={styles.infoText}>+91 98765 43210</Text>
            <ChevronRight size={20} color="#6B7280" />
          </View>
          
          <View style={styles.infoItem}>
            <CreditCard size={20} color="#6B7280" />
            <Text style={styles.infoText}>Payment Methods</Text>
            <ChevronRight size={20} color="#6B7280" />
          </View>
          
          <View style={styles.infoItem}>
            <Award size={20} color="#6B7280" />
            <Text style={styles.infoText}>Rewards & Referrals</Text>
            <ChevronRight size={20} color="#6B7280" />
          </View>
          
          <View style={styles.infoItem}>
            <MapPin size={20} color="#6B7280" />
            <Text style={styles.infoText}>Saved Locations</Text>
            <ChevronRight size={20} color="#6B7280" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  profileSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginRight: 12,
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
  progressContainer: {
    marginTop: 8,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  progressAction: {
    fontSize: 14,
    color: '#10B981',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 4,
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  infoText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
  },
});