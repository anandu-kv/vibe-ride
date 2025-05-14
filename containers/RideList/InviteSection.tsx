import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Share2 } from 'lucide-react-native';

interface InviteSectionProps {
  contact: {
    name: string;
    avatar: string;
  };
  onInvite: () => void;
  onShare: () => void;
}

const InviteSection: React.FC<InviteSectionProps> = ({
  contact,
  onInvite,
  onShare,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invite your contacts to join the ride</Text>
      
      <View style={styles.contactRow}>
        <Image source={{ uri: contact.avatar }} style={styles.avatar} />
        <Text style={styles.contactName}>{contact.name}</Text>
        <TouchableOpacity style={styles.inviteButton} onPress={onInvite}>
          <Text style={styles.inviteButtonText}>INVITE</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
        <Share2 size={20} color="#22C55E" />
        <Text style={styles.shareText}>Share Ride URL</Text>
      </TouchableOpacity>
      <Text style={styles.shareDescription}>
        Invite through WhatsApp, Contacts & Groups.
      </Text>

      <View style={styles.referSection}>
        <Text style={styles.referTitle}>Want more ride takers?</Text>
        <View style={styles.referCard}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg' }}
            style={styles.referImage}
          />
          <Text style={styles.referText}>
            Refer Quick Ride to your colleagues, friends and neighbours
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  contactName: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  inviteButton: {
    backgroundColor: '#22C55E',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  inviteButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  shareText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#22C55E',
    fontWeight: '500',
  },
  shareDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
  },
  referSection: {
    marginTop: 16,
  },
  referTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 12,
  },
  referCard: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  referImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  referText: {
    flex: 1,
    fontSize: 14,
    color: '#4B5563',
  },
});

export default InviteSection;