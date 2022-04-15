import React from 'react';
import {useMarketRepository} from '../Repository/Market';
import {useStore} from '../Store';

export const useMarketService = () => {
  const {marketStore} = useStore();
  const {loadTickers} = useMarketRepository();

  const getTickers = React.useCallback(async () => {
    try {
      const tickers = await loadTickers();
      marketStore.setTickers(tickers);
      marketStore.clearError();
    } catch (e) {
      marketStore.setError('Update list of stoks failed');
    }
  }, [marketStore, loadTickers]);

  const subscribeToTickers = React.useCallback(async () => {
    if (marketStore.isSubscribed()) {
      return;
    }

    getTickers();
    const intervalId = setInterval(getTickers, 5000);

    marketStore.subscribe(() => clearInterval(intervalId));
  }, [getTickers, marketStore]);

  const unsubscribeFromTickers = React.useCallback(() => {
    marketStore.unsubscribe();
  }, [marketStore]);

  return {subscribeToTickers, unsubscribeFromTickers};
};
