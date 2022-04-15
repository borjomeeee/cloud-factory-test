import React from 'react';
import * as RN from 'react-native';

export const Pressable = (
  props: React.ComponentProps<typeof RN.TouchableOpacity>,
) => {
  return <RN.TouchableOpacity activeOpacity={0.7} {...props} />;
};
