import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import Root from '../src/components';

export default class nativeApp extends Component {
  render () {
    return (
      <MapView />   
      <Root />
    )
  }
}

AppRegistry.registerComponent('nativeApp', () => nativeApp);
