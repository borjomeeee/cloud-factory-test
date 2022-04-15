import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Overview} from './Overview';
import {Market} from './Market';
import {AppPaths} from './Paths';
import {navigatorOptions} from './navigationOptions';

const Stack = createNativeStackNavigator();
export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={navigatorOptions}
      initialRouteName={AppPaths.Overview}>
      <Stack.Screen name={AppPaths.Overview} component={Overview} />
      <Stack.Screen name={AppPaths.Market} component={Market} />
    </Stack.Navigator>
  );
};
