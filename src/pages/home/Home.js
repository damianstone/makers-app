import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Card from '../../components/card/Card';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFilter = (param) => {
    // dispatch
  };

  const navigate = (section) => {
    history.push(`/${section}`);
  };

  return (
    <div className='homeScreen'>
      <Navbar />
      <div className='contentSection'>
        <SideBar navigate={navigate} handleFilter={handleFilter} />
        <div className='cards'>
          <p className='cardsTitle'>Startups - Agriculture</p>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
