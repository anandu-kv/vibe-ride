import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { DivideIcon as LucideIcon } from 'lucide-react-native';

interface MenuItemProps {
  icon: typeof LucideIcon;
  label: string;
  iconColor: string;
  iconBgColor: string;
  onPress?: () => void;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon: Icon,
  label,
  iconColor,
  iconBgColor,
  onPress,
  active = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, active && styles.activeContainer]}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        <Icon size={20} color={iconColor} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  activeContainer: {
    backgroundColor: '#F3F4F6',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
});

export default MenuItem;
