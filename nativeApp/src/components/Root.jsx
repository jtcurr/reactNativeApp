import React from 'react';
import { Route, Link } from 'react-router-dom';
import localStyles from './UtilStyles.css';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 21.3453453,
      height: 173.43535322,
      show: false
    }
  }

  //RELATES TO THE BUTTONS ON THE OUTSIDE OF THE MAP TO MAKE MAP BIGGER OR SMALLER
  increaseSize() {
    this.setState({
      width: this.state.width + 175,
      height: this.state.height + 175
    });
    const infoWindows = this.props.venues.map((venue, x) => {
            const location = {
                position: {
                lat: this.props.venues[x].venue.location.lat,
                lng: this.props.venues[x].venue.location.lng
            }
            }
            </InfoWindow>
        })
  }
}

export default Root;