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


AppRegistry.registerComponent('nativeApp', () => nativeApp);
