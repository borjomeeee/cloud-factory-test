import {observer} from 'mobx-react-lite';
import React from 'react';
import * as RN from 'react-native';
import {FlatList} from '../../../Components/FlatList';
import {Spacer} from '../../../Components/Spacer';
import {Ticker as TickerModel} from '../../../Models/Ticker';
import {useStore} from '../../../Store';
import {Ticker} from './Ticker';

export const TickerList: React.FC = observer(() => {
  const {marketStore} = useStore();

  const tickersList = React.useMemo(
    () => Object.values(marketStore.tickers).sort((t1, t2) => t1.id - t2.id),
    [marketStore.tickers],
  );

  return (
    <FlatList
      data={tickersList}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
      getItemLayout={getItemLayout}
    />
  );
});

function getItemLayout(data: TickerModel[] | null | undefined, index: number) {
  return {length: 53, offset: 53 * index, index};
}

function keyExtractor(ticker: TickerModel) {
  return ticker.id.toString();
}

function renderItem({item}: RN.ListRenderItemInfo<TickerModel>) {
  return <Ticker ticker={item} />;
}

function Separator() {
  return <Spacer height={20} />;
}
