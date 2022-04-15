import {observer} from 'mobx-react-lite';
import React from 'react';
import * as RN from 'react-native';
import {Ticker as TickerModel} from '../../../Models/Ticker';
import {useStore} from '../../../Store';
import {Ticker} from './Ticker';

import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {shallowCompare} from '../Utils';

export const TickerList: React.FC = observer(() => {
  const {marketStore} = useStore();

  const tickersList = React.useMemo(
    () => Object.values(marketStore.tickers).sort((t1, t2) => t1.id - t2.id),
    [marketStore.tickers],
  );

  const dataProvider = React.useMemo(
    () =>
      new DataProvider((r1, r2) => {
        return shallowCompare(r1, r2);
      }).cloneWithRows(tickersList),
    [tickersList],
  );

  return (
    <RecyclerListView
      layoutProvider={layoutProvider}
      dataProvider={dataProvider}
      rowRenderer={rowRenderer}
    />
  );
});

const screenWidth = RN.Dimensions.get('screen').width;

const layoutProvider = new LayoutProvider(
  _ => {
    return 0;
  },
  (_, dim) => {
    dim.height = 53 + 4;
    dim.width = screenWidth;
  },
);

function rowRenderer(_, item: TickerModel) {
  return <Ticker ticker={item} />;
}

// function getItemLayout(data: TickerModel[] | null | undefined, index: number) {
//   return {length: 53, offset: 53 * index, index};
// }

// function keyExtractor(ticker: TickerModel) {
//   return ticker.id.toString();
// }

// function renderItem({item}: RN.ListRenderItemInfo<TickerModel>) {
//   return <Ticker ticker={item} />;
// }

// function Separator() {
//   return <Spacer height={20} />;
// }
