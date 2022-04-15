import s from '@borjomeeee/rn-styles';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {lowerThen} from '../Utils';

interface TickerPriceProps {
  price: string;
}
export const TickerPrice: React.FC<TickerPriceProps> = React.memo(({price}) => {
  const lastPrice = useSharedValue<string | undefined>(undefined);
  const animValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        animValue.value,
        [-1, 0, 1],
        ['#FF5252', '#000000', '#4CDA8D'],
      ),
    };
  });

  const memoStyle = React.useMemo(
    () => [s(`text bold c:#333333`), animatedStyle],
    [animatedStyle],
  );

  const makeUpAnimation = React.useCallback(() => {
    animValue.value = withTiming(1, {}, isFinished => {
      if (isFinished) {
        animValue.value = withTiming(0);
      }
    });
  }, [animValue]);

  const makeDownAnimation = React.useCallback(() => {
    animValue.value = withTiming(-1, {}, isFinished => {
      if (isFinished) {
        animValue.value = withTiming(0);
      }
    });
  }, [animValue]);

  React.useLayoutEffect(() => {
    if (!lastPrice.value) {
      lastPrice.value = price;
      return;
    }

    if (equals(lastPrice.value, price)) {
      return;
    }

    if (lowerThen(lastPrice.value, price)) {
      makeUpAnimation();
    } else {
      makeDownAnimation();
    }
  }, [lastPrice, price, makeUpAnimation, makeDownAnimation]);

  return <Animated.Text style={memoStyle}>{price}</Animated.Text>;
});

function equals(num1: string, num2: string) {
  return num1 === num2;
}
