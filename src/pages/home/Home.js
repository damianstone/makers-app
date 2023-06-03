import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import { SIDEBAR } from '../../data/sidebar';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [auth, setAuth] = useState(null);

  const handleFilter = (param) => {
    // dispatch
  };

  const navigate = (section) => {
    history.push(`/${section}`);
  };

  const renderSideCard = () => {
    return SIDEBAR.map((item) => {
      if (item.type === 'section') {
        return (
          <div
            key={item.id}
            className='sideButton'
            onClick={() => navigate(item.value)}
          >
            <p>{item.label}</p>
          </div>
        );
      }
      if (item.type === 'filter') {
        return (
          <div>
            <p className='industries'>Industries</p>
            {item.filter_values.map((filter) => (
              <div
                className='filterParam'
                onClick={() => handleFilter(filter.value)}
              >
                <p className='filterParamText'>{filter.label}</p>
              </div>
            ))}
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className='homeScreen'>
      <Navbar />
      <div className='contentSection'>
        <div className='sideBar'>{renderSideCard()}</div>
        <div className='cards'>CARDS</div>
      </div>
    </div>
  );
};

export default Home;
