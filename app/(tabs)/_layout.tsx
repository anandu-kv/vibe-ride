import { Tabs } from 'expo-router';
import { Chrome as Home, CircleUser as UserCircle, Clock, Settings, CarIcon, CarFrontIcon } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          height: 60,
          borderRadius: 20,
        },
        tabBarItemStyle: {
          borderRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="taxi"
        options={{
          title: 'Taxi',
          tabBarIcon: ({ color, size }) => <CarIcon size={size} color={color} />,
          tabBarActiveBackgroundColor: 'rgb(51 181 51)',
        }}
      />
      <Tabs.Screen
        name="carpool"
        options={{
          title: 'Carpool',
          tabBarIcon: ({ color, size }) => <CarFrontIcon size={size} color={color} />,
          tabBarActiveBackgroundColor: 'rgb(56 131 56)',
        }}
      />
    </Tabs>
  );
}