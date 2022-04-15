import s from '@borjomeeee/rn-styles';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../../Components/Button';
import {ScreenTitle} from '../../Components/ScreenTitle';
import {ScrollView} from '../../Components/ScrollView';
import {Spacer} from '../../Components/Spacer';
import {useOverviewController} from './Controller';
import {Option} from './Views/Option';
import {SectionTitle} from './Views/SectionTitle';

export const Overview = () => {
  const {handlePressGoToMarket} = useOverviewController();

  return (
    <SafeAreaView style={s(`fill container bgc:#fff`)}>
      <ScrollView style={s(`fill`)}>
        <ScreenTitle label={'Hi, everyone! 👋'} />

        <SectionTitle>This project writen with:</SectionTitle>
        <Spacer height={20} />

        <Option label="react-native" />
        <Option label="mobx + mobx-react-lite" />
        <Option label="react-native-reanimated" />

        <Spacer height={100} />
      </ScrollView>

      <Spacer height={20} />
      <Button onPress={handlePressGoToMarket} label={'Go to market'} />
      <Spacer height={20} />
    </SafeAreaView>
  );
};
