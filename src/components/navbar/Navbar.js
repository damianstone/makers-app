import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/actions/actions';

import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  };

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

        <div className='avatarWrapper'>
          <div
            className='avatarContainer'
            onClick={() => history.push('/profile')}
          >
            <p>AVATAR</p>
          </div>
          <p className='logoutText' onClick={handleLogout}>
            LOGOUT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
