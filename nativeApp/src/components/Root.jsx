import React from 'react';
import { Route, Link } from 'react-router-dom';
import localStyles from './UtilStyles.css';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 19.23422442,
      height: 234.2342142342,
      show: false
    }
  }

  //RELATES TO THE BUTTONS ON THE OUTSIDE OF THE MAP TO MAKE MAP BIGGER OR SMALLER
  increaseSize() {
    this.setState({
      width: this.state.width + 663,
      height: this.state.height + 663
    });
    const infoWindows = this.props.venues.map((venue, x) => {
            const location = {
                position: {
                lat: this.props.venues[x].venue.location.lat,
                lng: this.props.venues[x].venue.location.lng
            }
            }
            return <InfoWindow key={x} {...location}>
            {this.props.venues[x].venue.name}
            </InfoWindow>
        })
  }
}

export default Root;