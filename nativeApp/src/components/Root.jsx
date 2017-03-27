import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import localStyles from './UtilStyles.css';

const Nav = ({ app, user }) => {
  const navList = [
    { displayName: 'Map',      endPoint: '/map',      iconName: 'map',    className: localStyles.mapNav    },
    { displayName: 'Group',    endPoint: '/group',    iconName: 'users',  className: localStyles.groupNav  },
    { displayName: 'Agenda',   endPoint: '/agenda',   iconName: 'signup', className: localStyles.agendaNav },
    { displayName: 'Schedule', endPoint: '/schedule', iconName: 'clock',  className: localStyles.schedNav  },
  ];
  const chat = { displayName: 'Chat', href: 'https://m.me/', iconName: 'chat', className: localStyles.chatNav }

  return (
        {navList.map((item, index) => (
          <Menu.Item
            className={ item.className }
            key={ index }
            as={ Link }
            to={ item.endPoint }>
            <Icon name={ item.iconName } /> { item.displayName }
          </Menu.Item>
        ))}

        <Menu.Item
          href={ chat.href }
          className={ chat.className }>
          <Icon name={ chat.iconName } /> { chat.displayName }
        </Menu.Item>
        <p><span style={{ color: 'white' }}>Test v0.4.7</span></p>
        <Segment basic className='remove-borders'>
          <div>
            <Route exact path="/" component={HomeView}/>
          </div>
        </Segment>
    </Sidebar.Pushable>
  );
}

export default Nav;