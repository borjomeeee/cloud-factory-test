import React from 'react';
import {Text} from '../../../Components/Text';
import {View} from '../../../Components/View';
import {Ticker as TickerModel} from '../../../Models/Ticker';

import SwapIcon from '../../../Assets/Svg/Swap';
import s from '@borjomeeee/rn-styles';

import {TickerPrice} from './TickerPrice';
import {shallowCompare} from '../Utils';

interface TickerProps {
  ticker: TickerModel;
}
export const Ticker: React.FC<TickerProps> = React.memo(
  ({ticker}) => {
    return (
      <View
        style={s(`h:53 br:10 bw:1 bc:#E7E7E7 bgc:#FDFDFD`, `row aic ph:16`)}>
        <View style={s(`fill row aic`)}>
          <Text style={s(`bold c:#333333`)}>{ticker.name}</Text>
          <SwapIcon />
          <Text style={s(`bold c:#333333`)}>{ticker.exchangeToName}</Text>
        </View>
        <View style={s(`aife`)}>
          <TickerPrice price={ticker.price || '0'} />
          <Text style={s(`bold c:#BEBEBE`)}>HB {ticker.highestBid}</Text>
        </View>
      </View>
    );
  },
  (props, prevProps) => shallowCompare(props.ticker, prevProps.ticker),
);

// a simple implementation of the shallowCompare.
// only compares the first level properties and hence shallow.
// state updates(theoretically) if this function returns true.
