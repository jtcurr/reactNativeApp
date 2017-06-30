import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class nativeApp extends Component {
  render () {
    return ( 
    	<MapView />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('nativeApp', () => nativeApp);
