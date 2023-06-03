import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout, getUser, listProfiles } from '../../store/actions/actions';

import './Navbar.css';

const BASE_URL = 'http://127.0.0.1:8000';

const Navbar = ({ navigate }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const currentUser = useSelector((state) => state.userLogin);
  const { data, loading, error } = currentUser;

  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem('@userData');

    if (!valueFromLocalStorage || error) {
      dispatch(logout());
      history.push('/login');
    }
    if (!data && valueFromLocalStorage) {
      dispatch(getUser());
    }
  }, [error]);

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
          <div className='itemContainer' onClick={() => navigate('startup')}>
            <p>Startups</p>
          </div>
          <div
            className='itemContainer'
            onClick={() => navigate('corporation')}
          >
            <p>Corporations</p>
          </div>

          <div className='itemContainer'>
            <p>{data?.firstname}</p>
          </div>
        </div>

        <div className='avatarWrapper'>
          <div
            className='avatarContainer'
            onClick={() => history.push('/profile')}
          >
            {loading && <p>Loading</p>}
            {data?.photo && !loading && (
              <img
                className='avatarStyle'
                src={`${BASE_URL}/static${data.photo}`}
                alt='profile'
              />
            )}
            {!data?.photo && !loading && <p>${data.email}</p>}
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
