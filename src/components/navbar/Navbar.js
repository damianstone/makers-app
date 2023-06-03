import React from 'react';
import { useHistory } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const history = useHistory();

  return (
    <div className='navbar'>
      <div className='titleContainer'>
        <p>Startups x Corporations</p>
      </div>
      <div className='navBarContainer'>
        <div className='navBarItemsContainer'>
          <div
            className='itemContainer'
            onClick={() => history.push('/startups')}
          >
            <p>Startups</p>
          </div>
          <div
            className='itemContainer'
            onClick={() => history.push('/corporations')}
          >
            <p>Corporations</p>
          </div>
        </div>

        <div
          className='avatarContainer'
          onClick={() => history.push('/profile')}
        >
          <div className='avatar'>
            <p>AVATAR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
