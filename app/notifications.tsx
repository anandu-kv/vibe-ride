import NotificationsScreen from '@/components/screens/NotificationsScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

export default function NotificationsWrapper() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NotificationsScreen />
    </SafeAreaView>
  );
}

