import s from '@borjomeeee/rn-styles';
import React from 'react';
import {View} from './View';

interface SpacerProps {
  width?: number;
  height?: number;
}

export const Spacer = ({width, height}: SpacerProps) => {
  return <View style={s(`w:${width || 0} h:${height || 0}`)} />;
};
