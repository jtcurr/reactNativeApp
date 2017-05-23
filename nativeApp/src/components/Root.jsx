import React from 'react';
import { Route, Link } from 'react-router-dom';
import localStyles from './UtilStyles.css';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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