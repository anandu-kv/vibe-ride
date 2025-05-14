import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import UserProfile from './UserProfile';
import MenuItem from './MenuItem';
import {
  Car,
  Calendar,
  Wallet,
  Ticket,
  Truck,
  Heart,
  Users,
  MessageSquare,
  PercentCircle,
  Gift,
  Settings,
  HelpCircle,
  LogOut,
  Repeat,
} from 'lucide-react-native';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const menuItems = [
    {
      icon: Car,
      label: 'Post Ride',
      iconColor: '#FFFFFF',
      iconBgColor: '#22C55E',
    },
    {
      icon: Calendar,
      label: 'My Rides',
      iconColor: '#FFFFFF',
      iconBgColor: '#3B82F6',
    },
    {
      icon: Wallet,
      label: 'Payments',
      iconColor: '#FFFFFF',
      iconBgColor: '#8B5CF6',
    },
    {
      icon: Repeat,
      label: 'Subscription',
      iconColor: '#FFFFFF',
      iconBgColor: '#F59E0B',
    },
    {
      icon: Truck,
      label: 'My Vehicle',
      iconColor: '#FFFFFF',
      iconBgColor: '#2563EB',
    },
    {
      icon: MessageSquare,
      label: 'My Contribution',
      iconColor: '#FFFFFF',
      iconBgColor: '#14B8A6',
    },
    {
      icon: Users,
      label: 'My Community',
      iconColor: '#FFFFFF',
      iconBgColor: '#84BD00',
    },
    {
      icon: Heart,
      label: 'My Favorites',
      iconColor: '#FFFFFF',
      iconBgColor: '#22C55E',
    },
    {
      icon: PercentCircle,
      label: 'Offers',
      iconColor: '#FFFFFF',
      iconBgColor: '#3B82F6',
    },
    {
      icon: Gift,
      label: 'Refer & Rewards',
      iconColor: '#FFFFFF',
      iconBgColor: '#16A34A',
    },
    {
      icon: Settings,
      label: 'Settings',
      iconColor: '#FFFFFF',
      iconBgColor: '#6B7280',
    },
    {
      icon: HelpCircle,
      label: 'Help',
      iconColor: '#FFFFFF',
      iconBgColor: '#3B82F6',
    },
    {
      icon: LogOut,
      label: 'Logout',
      iconColor: '#FFFFFF',
      iconBgColor: '#F87171',
    },
  ];

  return (
    <View style={styles.container}>
      <UserProfile
        name="Shanidh"
        avatar="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
        verified={false}
        onPress={() => setActiveItem('profile')}
      />
      <ScrollView style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            iconColor={item.iconColor}
            iconBgColor={item.iconBgColor}
            active={activeItem === item.label}
            onPress={() => setActiveItem(item.label)}
          />
        ))}
      </ScrollView>
      <View style={styles.bottomIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  menuContainer: {
    flex: 1,
  },
  bottomIndicator: {
    height: 4,
    width: 128,
    backgroundColor: '#D1D5DB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 32,
  },
});

export default Sidebar;
