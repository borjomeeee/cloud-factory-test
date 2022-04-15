import s from '@borjomeeee/rn-styles';
import {observer} from 'mobx-react-lite';
import React from 'react';
import Animated, {SlideInUp, SlideOutUp} from 'react-native-reanimated';
import {Text} from '../../../Components/Text';
import {View} from '../../../Components/View';
import {useStore} from '../../../Store';

export const ErrorBlock: React.FC = observer(() => {
  const {marketStore} = useStore();

  if (!marketStore.lastError) {
    return null;
  }

  return (
    <View style={s(`abs t:20 r:0 l:0`)}>
      <Animated.View
        entering={SlideInUp}
        exiting={SlideOutUp}
        style={s(`bgc:#FF5252 pv:13 ph:15 br:15`)}>
        <Text style={s(`c:#fff bold fsz:18`)}>Something went wrong ...</Text>
        <Text style={s(`c:#ffffff90 bold`)}>{marketStore.lastError}</Text>
      </Animated.View>
    </View>
  );
});
