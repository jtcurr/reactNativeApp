import React from 'react';
import { Route, Link } from 'react-router-dom';
import localStyles from './UtilStyles.css';

class Root extends React.Component {
  render () {
    return (
        <Text>All the tests</Text>
        {props.list.map( (venue, key) => <ListEntry venueName={venue} key={key}/>)}
    )
  }
}

export default Root;