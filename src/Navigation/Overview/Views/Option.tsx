import React from 'react';

import s from '@borjomeeee/rn-styles';
import {Text} from '../../../Components/Text';

interface OptionProps {
  label: string;
}
export const Option = ({label}: OptionProps) => {
  return <Text style={s(`pb:5`)}>- {label}</Text>;
};
