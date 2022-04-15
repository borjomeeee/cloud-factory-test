import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {useMarketService} from '../../../Services/Market';

export const useMarketController = () => {
  const navigation = useNavigation();
  const {subscribeToTickers, unsubscribeFromTickers} = useMarketService();

  const handlePressGoBack = React.useCallback(() => {
    navigation.canGoBack() && navigation.goBack();
  }, [navigation]);

  return {subscribeToTickers, unsubscribeFromTickers, handlePressGoBack};
};
