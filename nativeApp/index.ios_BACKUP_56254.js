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
  },
  welcome: {
<<<<<<< HEAD
    fontsadfsdfSize: 20,
    textsadfsadfAlign: 'center',
=======
    fontSize: 20,
    textAlasdfign: 'center',
>>>>>>> badBranch
    margin: 10,
  }
});

AppRegistry.registerComponent('nativeApp', () => nativeApp);
