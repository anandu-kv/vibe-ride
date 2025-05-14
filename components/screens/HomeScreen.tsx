import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {
  MessageCircle,
  Bell,
  Search,
  MapPin,
  Award,
  Share2,
  ChevronRight,
} from 'lucide-react-native';
import ReferralSection from '@/components/home/ReferralSection';
import OfferSection from '@/components/home/OfferSection';
import FrequentTripsSection from '@/components/home/FrequentTripsSection';
import LocationButtons from '@/components/home/LocationButtons';
import RideTypeSelector from '@/components/home/RideTypeSelector';
import ContributionCard from '@/components/home/ContributionCard';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 100;

export default function HomeScreen() {
  const translateY = useSharedValue(0);
  const scrollEnabled = useSharedValue(false);
  const isLocked = useSharedValue(false);

  const context = useSharedValue({ y: 0 });

  const Y_THRESHOLD = -200; // Height where the draggable component locks in
  const POSITION_BOTTOM = 0;

  const gesture = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      const nextY = ctx.startY + event.translationY;

      // Prevent dragging upward beyond Y_THRESHOLD
      if (nextY < Y_THRESHOLD) {
        translateY.value = Y_THRESHOLD;
      } else {
        translateY.value = Math.min(POSITION_BOTTOM, nextY); // Prevent dragging below initial
      }
    },
    onEnd: (_) => {
      if (translateY.value <= Y_THRESHOLD + 50) {
        translateY.value = withSpring(Y_THRESHOLD, { damping: 50 });
        scrollEnabled.value = true;
        isLocked.value = true; // now scrollable
      } else {
        translateY.value = withSpring(POSITION_BOTTOM, { damping: 50 });
        scrollEnabled.value = false;
        isLocked.value = false;
      }
    },
  });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  const backDropOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translateY.value, [0, MAX_TRANSLATE_Y], [0, 0.7]),
    };
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const [selected, setSelected] = useState<'find' | 'offer' | null>(null);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />

        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.menuIcon}>
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
            </View>
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <MessageCircle size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconButton, styles.notificationButton]}
            >
              <Bell size={24} color="#fff" />
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.heroContent}>
          <Text style={styles.heroText}>
            You are helping to reduce traffic congestion inside the city
          </Text>
        </View>

        <Animated.View style={[styles.backdrop, backDropOpacity]} />

        {/* <PanGestureHandler onGestureEvent={gesture}> */}
        <Animated.View style={[styles.bottomSheet, rBottomSheetStyle]}>
          <PanGestureHandler onGestureEvent={gesture}>
            <Animated.View style={styles.grabber}>
              <View style={styles.bottomSheetHandle} />
            </Animated.View>
          </PanGestureHandler>

          <Animated.ScrollView
            style={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  selected === 'find' && styles.activeButton,
                ]}
                onPress={() => setSelected('find')}
              >
                <Text
                  style={[
                    styles.actionButtonText,
                    selected === 'find' && styles.activeButtonText,
                  ]}
                >
                  Find Pool
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.actionButton,
                  styles.outlineButton,
                  selected === 'offer' && styles.activeButton,
                ]}
                onPress={() => setSelected('offer')}
              >
                <Text
                  style={[
                    styles.outlineButtonText,
                    selected === 'offer' && styles.activeButtonText,
                  ]}
                >
                  Offer Pool
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputField}>
              <View style={styles.iconWrapper}>
                <View style={styles.greenDot} />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Pickup Location"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputField}>
              <Search size={20} color="#0284C7" style={styles.iconWrapper} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Drop Location"
                placeholderTextColor="#999"
              />
            </View>
            <ReferralSection />
            <OfferSection />
            <FrequentTripsSection />
            <LocationButtons />
            <ContributionCard />

            <View style={styles.infoSection}>
              <Text style={styles.sectionTitle}>WHAT'S NEW</Text>
              <View style={styles.referralCard}>
                <View style={styles.referralCardContent}>
                  <View style={styles.referralImage}>
                    <Image
                      source={{
                        uri: 'https://images.pexels.com/photos/7709046/pexels-photo-7709046.jpeg',
                      }}
                      style={styles.referralPhoto}
                    />
                  </View>
                  <View style={styles.referralTextContainer}>
                    <Text style={styles.referralTitle}>
                      Referral | The strength of Carpool network
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.helpSection}>
              <Text style={styles.helpTitle}>NEED HELP?</Text>
              <Text style={styles.helpText}>
                You can look for answers in our help center or contact our
                support agents by phone or email
              </Text>
            </View>

            <View style={styles.socialSection}>
              <Text style={styles.socialTitle}>
                For latest updates, follow us
              </Text>
              <View style={styles.socialIcons}>
                {/* Social icons would go here */}
              </View>
            </View>

            <View style={styles.statsSection}>
              <Text style={styles.rideTogetherText}>Ride Together</Text>
              <Text style={styles.statsSloganText}>
                Save money. Reduce carbon footprint & Grow your network
              </Text>

              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>1.5 Million+</Text>
                  <Text style={styles.statLabel}>Users</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>35 Million+</Text>
                  <Text style={styles.statLabel}>Carpools</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>30 Kgs/Ton</Text>
                  <Text style={styles.statLabel}>CO2 Prevented</Text>
                </View>
              </View>
            </View>

            <View style={styles.footer}>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg',
                }}
                style={styles.footerImage}
              />
            </View>
          </Animated.ScrollView>
        </Animated.View>
        {/* </PanGestureHandler> */}

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: '#eee',
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginRight: 10,
  },
  actionButtonText: {
    color: '#333',
    fontWeight: '600',
  },
  outlineButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  outlineButtonText: {
    color: '#333',
    fontWeight: '600',
  },
  activeButton: {
    backgroundColor: '#4CAF50', // green
    borderColor: '#4CAF50',
  },
  activeButtonText: {
    color: 'white',
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 20,
    justifyContent: 'space-between',
    height: 14,
  },
  menuLine: {
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 1,
  },
  headerRight: {
    flexDirection: 'row',
  },
  notificationButton: {
    marginLeft: 12,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  notificationText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  heroText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: -60,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 300,
    bottom: -100,
    height: SCREEN_HEIGHT,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    zIndex: 2,
    paddingBottom: 60,
  },
  bottomSheetHandle: {
    width: 60,
    height: 5,
    backgroundColor: '#CBD5E1',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 10,
  },
  grabber: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  locationField: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  locationIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#10B981',
  },
  locationText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 16,
    color: '#0284C7',
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  infoSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 12,
  },
  referralCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  referralCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  referralImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 12,
  },
  referralPhoto: {
    width: '100%',
    height: '100%',
  },
  referralTextContainer: {
    flex: 1,
  },
  referralTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  helpSection: {
    marginTop: 24,
    paddingVertical: 16,
  },
  helpTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 8,
  },
  helpText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  socialSection: {
    marginTop: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  socialTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 12,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  statsSection: {
    marginTop: 24,
    paddingVertical: 16,
  },
  rideTogetherText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#10B981',
    textAlign: 'center',
  },
  statsSloganText: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  footer: {
    marginTop: 24,
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 40,
  },
  footerImage: {
    width: '100%',
    height: '100%',
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 4, // Decrease space between text and underline
    marginVertical: 6, // Reduce gap between the two input fields
    marginHorizontal: 16,
  },
  iconWrapper: {
    marginRight: 8,
  },

  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
