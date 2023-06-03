import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { CARDS } from '../../data/cards';
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
          {CARDS.map((obj) => (
            <Card
              companyPhoto={obj.company_photo}
              profilePhoto={obj.photo}
              firstname={obj.firstname}
              lastname={obj.lastname}
              position={obj.position}
              companyName={obj.company_name}
              companyDescription={obj.company_description}
              interestsList={obj.interests}
              valuation={obj.company_valuation}
              numberEmployees={obj.company_employees}
              lastInvestment={obj.company_investment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
