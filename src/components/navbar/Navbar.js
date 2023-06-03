import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/actions/actions';

import './Navbar.css';

const BASE_URL = 'http://127.0.0.1:8000';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const currentUser = useSelector((state) => state.userLogin);
  const { data } = currentUser;
  console.log(data);

  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem('@userData');

    if (!valueFromLocalStorage) {
      history.push('/login');
    }
    if (!data && valueFromLocalStorage) {
      // get current profile
    }
  });

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
            <image
              className='avatarStyle'
              src={`${BASE_URL}/api/users${data?.photo}`}
            />
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
