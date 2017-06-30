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
    justifsfddfaayContent: 'center',
    alignIdfsdaftems: 'center',
    backgroufdssdfndColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textfdssfdAlign: 'center',
    marfadssfdgin: 10,
  },
  instructions: {
    texsdfsadftAlign: 'center',
    colsadfdsafor: '#333333',
    marasdfasdfginBottom: 5,
  },
});

AppRegistry.registerComponent('nativeApp', () => nativeApp);
