import React from 'react';
import { Route, Link } from 'react-router-dom';
import localStyles from './UtilStyles.css';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 500,
      location: {
        lat:37.7831708,
        lng: -122.4100967
      },
      show: false
    }
  }

  //RELATES TO THE BUTTONS ON THE OUTSIDE OF THE MAP TO MAKE MAP BIGGER OR SMALLER
  increaseSize() {
    this.setState({
      width: this.state.width + 50,
      height: this.state.height + 50
    });
  }
}

export default Root;