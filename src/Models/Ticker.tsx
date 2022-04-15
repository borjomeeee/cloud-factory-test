export interface Ticker {
  id: number;

  name: string;
  exchangeToName: string;

  highestBid?: string;
  price?: string;

  changePercent?: string;
}
