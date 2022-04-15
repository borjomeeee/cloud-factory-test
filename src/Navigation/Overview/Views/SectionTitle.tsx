import s from '@borjomeeee/rn-styles';
import React from 'react';
import {Text} from '../../../Components/Text';
import {View} from '../../../Components/View';

interface SectionTitleProps {
  children: string;
}
export const SectionTitle: React.FC<SectionTitleProps> = ({children}) => {
  return (
    <View style={s(`rel pb:3`)}>
      <Text style={s(`medium`)}>{children}</Text>
      <View style={s(`abs l:0 b:0 h:3 w:100 bgc:#000`)} />
    </View>
  );
};
