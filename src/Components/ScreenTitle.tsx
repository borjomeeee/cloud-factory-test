import s from '@borjomeeee/rn-styles';
import React from 'react';

import {Text} from './Text';
import {View} from './View';

interface ScreenTitleProps {
  label: string;
}
export const ScreenTitle: React.FC<ScreenTitleProps> = ({label}) => {
  return (
    <View style={s(`h:112 jcfe mb:30`)}>
      <Text style={s(`bold fsz:28`)}>{label}</Text>
    </View>
  );
};
