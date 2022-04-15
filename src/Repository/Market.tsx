import React from 'react';
import {Ticker} from '../Models/Ticker';
import {BadDataError, FatalRequestError} from '../Utils/Exceptions';

export const useMarketRepository = () => {
  const loadTickers = React.useCallback(() => {
    return fetch('https://poloniex.com/public?command=returnTicker')
      .catch(e => {
        throw new FatalRequestError(e.message);
      })
      .then(response => response.json())
      .catch(e => {
        throw new BadDataError(e.message);
      })
      .then(transformTickers);
  }, []);
  return {loadTickers};
};

function transformTickers(data: any): Record<string, Ticker> {
  if (typeof data !== 'object') {
    throw new BadDataError(`Expected object but get: ${typeof data}`);
  }

  if (Math.random() > 0.5) {
    throw new BadDataError(`Expected object but get: ${typeof data}`);
  }

  const res: Record<string, Ticker> = {};

  for (const pair in data) {
    const stock = data[pair];

    if (typeof stock.id !== 'number') {
      console.warn('get incorrect stock: ', pair, stock);
      continue;
    }

    const [name, exchangeToName] = pair.split('_');
    if (!name || !exchangeToName) {
      console.warn('get incorrect stock: ', pair, stock);
      continue;
    }

    try {
      res[stock.id] = {
        id: stock.id,

        name,
        exchangeToName,

        highestBid: stock.highestBid || '',
        changePercent: stock.percentChange || '',
        price: stock.highestBid || '',
      };
    } catch (e) {
      console.warn('get incorrect stock: ', pair, stock);
      continue;
    }
  }

  return res;
}
