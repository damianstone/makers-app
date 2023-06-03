import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import { SIDEBAR } from '../../data/sidebar';
import * as f from '../../store/actions/actions';
import './Home.css';

const Home = () => {
  const history = useHistory();
  const [auth, setAuth] = useState(null);

  const handleCreate = () => {
    history.push('/create-proposal');
  };

  const renderSideCard = () => {
    return SIDEBAR.map((item) => {
      if (item.type === 'section') {
        return (
          <div key={item.id} className='sideButton'>
            <p>{item.label}</p>
          </div>
        );
      }
      if (item.type === 'filter') {
        return (
          <div>
            <p>Industries</p>
            {item.filter_values.map((filter) => (
              <div>
                <p>{filter.label}</p>
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
