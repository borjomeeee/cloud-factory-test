import {makeAutoObservable} from 'mobx';
import {Ticker} from '../Models/Ticker';

export class MarketStore {
  sub?: () => void;
  tickers: Record<string, Ticker> = {};

  constructor() {
    makeAutoObservable(this);
  }

  setTickers(tickers: Record<string, Ticker>) {
    this.tickers = tickers;
  }

  isSubscribed() {
    return !!this.sub;
  }

  subscribe(sub: () => void) {
    this.sub = sub;
  }

  unsubscribe() {
    this.sub?.();
    this.sub = undefined;
  }
}
