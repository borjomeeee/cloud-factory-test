import React from 'react';
import {StackActions, useNavigation} from '@react-navigation/core';
import {AppPaths} from '../../Paths';

export const useOverviewController = () => {
  const navigation = useNavigation();

  const handlePressGoToMarket = React.useCallback(() => {
    navigation.dispatch(StackActions.push(AppPaths.Market));
  }, [navigation]);

  return {handlePressGoToMarket};
};
