import {makeAutoObservable} from 'mobx';
import {Ticker} from '../Models/Ticker';

export class MarketStore {
  sub?: () => void = undefined;

  lastError?: string = undefined;
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

  setError(message: string) {
    this.lastError = message;
  }

  clearError() {
    this.lastError = undefined;
  }

  subscribe(sub: () => void) {
    this.sub = sub;
  }

  unsubscribe() {
    this.sub?.();
    this.sub = undefined;
  }
}
