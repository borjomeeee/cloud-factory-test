import s from '@borjomeeee/rn-styles';
import React from 'react';
import * as RN from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Pressable} from './Pressable';
import {Text} from './Text';
import {View} from './View';

interface ButtonProps
  extends Omit<React.ComponentProps<typeof RN.TouchableOpacity>, 'children'> {
  label: string;
}

export const Button = ({
  label,
  onPressIn,
  onPressOut,
  ...props
}: ButtonProps) => {
  const isPressed = useSharedValue(false);

  const handlePressIn = React.useCallback(
    (e: RN.GestureResponderEvent) => {
      isPressed.value = true;
      onPressIn?.(e);
    },
    [isPressed, onPressIn],
  );

  const handlePressOut = React.useCallback(
    (e: RN.GestureResponderEvent) => {
      isPressed.value = false;
      onPressOut?.(e);
    },
    [isPressed, onPressOut],
  );

  const animatedStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(
      +isPressed.value,
      [0, 1],
      [1, 0.97],
      Extrapolate.CLAMP,
    );

    return {
      transform: [
        {
          scale: withTiming(scaleValue, {
            duration: 200,
            easing: Easing.bezier(0.01, 1.05, 0.59, 0.89),
          }),
        },
      ],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        activeOpacity={1}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...props}>
        <View style={s(`container pv:13 br:15 bw:1 bgc:#39CA73 bc:#2CB864`)}>
          <Text style={s(`c:#fff tac medium`)}>{label}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};
