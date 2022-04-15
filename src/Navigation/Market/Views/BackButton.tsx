import React from 'react';
import {Button} from '../../../Components/Button';
import {useMarketController} from '../Controller';

export const BackButton = () => {
  const {handlePressGoBack} = useMarketController();
  return <Button label="Go back" onPress={handlePressGoBack} />;
};
