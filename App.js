/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar
} from 'react-native';
import Home from './src/pages/Home';

export default function App(){

  return(
    <>
    <StatusBar barStyle='light-content' backgroundColor='#121015' animated />
    <Home />
    </>
  )
}