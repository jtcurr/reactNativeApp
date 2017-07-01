/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class nativeApp extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    back11groundColor: '#F5FCFF',
  },
  welcome: {
    fon1tSize: 20,
    tex1tAlign: 'center',
    mar1gin: 10,
  },
  instructions: {
    text1Align: 'center',
    colo1r: '#333333',
    marg1sdafsdfinBottom: 5,
  },
});

AppRegistry.registerComponent('nativeApp', () => nativeApp);
