/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './src/Navigation';
import {configureStyles} from './src/Styles';
import {StoreContext, store} from './src/Store';

configureStyles();
const App = () => {
  return (
    <NavigationContainer>
      <StoreContext.Provider value={store}>
        <AppNavigation />
      </StoreContext.Provider>
    </NavigationContainer>
  );
};

export default App;
