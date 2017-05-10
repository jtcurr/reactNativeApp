import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class nativeApp extends Component {
  render () {
    return (
        <Text>All the tests</Text>
    )
  }
}

AppRegistry.registerComponent('nativeApp', () => nativeApp);
