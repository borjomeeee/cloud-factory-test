import s from '@borjomeeee/rn-styles';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenTitle} from '../../Components/ScreenTitle';
import {Spacer} from '../../Components/Spacer';
import {View} from '../../Components/View';
import {useMarketController} from './Controller';
import {BackButton} from './Views/BackButton';
import {ErrorBlock} from './Views/Error';
import {TickerList} from './Views/TickerList';

export const Market = () => {
  const {subscribeToTickers, unsubscribeFromTickers} = useMarketController();

  React.useEffect(() => {
    subscribeToTickers();

    return () => unsubscribeFromTickers();
  }, [subscribeToTickers, unsubscribeFromTickers]);

  return (
    <SafeAreaView style={s(`fill container bgc:#fff`)}>
      <View style={s(`fill`)}>
        <ScreenTitle label={'Welcome to market! 🤘'} />

        <TickerList />
        <Spacer height={20} />
        <BackButton />
        <Spacer height={20} />

        <ErrorBlock />
      </View>
    </SafeAreaView>
  );
};
