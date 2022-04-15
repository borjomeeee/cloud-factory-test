import React from 'react';
import {MarketStore} from './Market';

export const store = {
  marketStore: new MarketStore(),
};

export const StoreContext = React.createContext(store);
export const useStore = () => {
  return React.useContext(StoreContext);
};
