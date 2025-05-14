import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

type Notification = {
  id: string;
  message: string;
  time: string;
  image: string;
};

export default function NotificationsScreen() {
  const router = useRouter();
  
  const notifications: Notification[] = [
    {
      id: '1',
      message: 'Ride cancelled due to bad weather',
      time: '10:30 AM, May 14',
      image: 'https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg'
    },
    {
      id: '2',
      message: 'New ride request from John',
      time: 'Yesterday, 4:45 PM',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      id: '3',
      message: 'Payment received for your last ride',
      time: 'May 12, 11:20 AM',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>

      <ScrollView style={styles.content}>
        {notifications.map(notification => (
          <View key={notification.id} style={styles.notificationItem}>
            <Image 
              source={{ uri: notification.image }}
              style={styles.notificationImage}
            />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
    justifyContent: 'center',
  },
  notificationMessage: {
    fontSize: 16,
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#888',
  },
});
