import { useSharedValue, useAnimatedStyle, withSpring, interpolate, Extrapolate } from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import { useAnimatedGestureHandler } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 100;

export function useBottomSheet() {
  const translateY = useSharedValue(0);
  const scrollEnabled = useSharedValue(false);
  
  const gesture = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx: any) => {
      translateY.value = Math.max(
        MAX_TRANSLATE_Y,
        ctx.startY + event.translationY
      );
    },
    onEnd: (_) => {
      if (translateY.value < -SCREEN_HEIGHT / 3) {
        translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 });
        scrollEnabled.value = true;
      } else {
        translateY.value = withSpring(0, { damping: 50 });
        scrollEnabled.value = false;
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
      opacity: interpolate(
        translateY.value,
        [0, MAX_TRANSLATE_Y],
        [0, 0.7]
      ),
    };
  });

  return {
    translateY,
    scrollEnabled,
    gesture,
    rBottomSheetStyle,
    backDropOpacity,
    MAX_TRANSLATE_Y,
  };
}