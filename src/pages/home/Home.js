import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import { SIDEBAR } from '../../data/sidebar';
import './Home.css';
import SideBar from '../../components/sidebar/SideBar';

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

  return (
    <div className='homeScreen'>
      <Navbar />
      <div className='contentSection'>
        <SideBar navigate={navigate} handleFilter={handleFilter} />
        <div className='cards'>
          <div>
            <div>COMPANY PHOTO</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
