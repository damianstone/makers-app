import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { listProfiles } from '../../store/actions/actions';
import { CARDS } from '../../data/cards';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Card from '../../components/card/Card';
import './Invitations.css';

const Invitations = () => {
  const [param, setParam] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFilter = (param) => {
    console.log(param);
    setParam(param);
  };

  const navigate = (section) => {
    history.push(`/${section}`);
  };

  const navNavigate = (companyType) => {
    dispatch(listProfiles(companyType, null));
    history.push(`/${companyType}`);
  };

  return (
    <div className='homeScreen'>
      <Navbar navigate={navNavigate} />
      <div className='contentSection'>
        <SideBar navigate={navigate} handleFilter={(f) => handleFilter(f)} />
        <div className='cards'>
          <p className='cardsTitle'>Invitations for meetings</p>
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

export default Invitations;
