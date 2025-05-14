import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronRight, Shield } from 'lucide-react-native';

interface UserProfileProps {
  name: string;
  avatar: string;
  verified: boolean;
  onPress?: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  avatar,
  verified,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.verificationContainer}>
          <Shield size={16} color="#9CA3AF" />
          <Text style={styles.verificationText}>
            {verified ? 'Verified' : 'Not Verified'}
          </Text>
        </View>
      </View>
      <ChevronRight size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#FEF3C7',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
  },
  verificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  verificationText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#6B7280',
  },
});

export default UserProfile;
