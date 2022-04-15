import s from '@borjomeeee/rn-styles';
import React from 'react';
import * as RN from 'react-native';

export const Text: React.FC<React.ComponentProps<typeof RN.Text>> = ({
  style,
  ...props
}) => {
  const memoStyles = React.useMemo(() => [s(`text`), style], [style]);
  return <RN.Text style={memoStyles} {...props} />;
};
