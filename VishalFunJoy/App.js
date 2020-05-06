/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { MainStackNavigation } from './src/components/StackNavigations/MainStackNavigation/index'
import { MainDrawerNavigation } from './src/components/DrawerNavigations/MainDrawerNavigation/index'

const App = () => {
  return (
    MainDrawerNavigation()
  );
};

export default App;
