import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { listProfiles } from '../../store/actions/actions';
import { CARDS } from '../../data/cards';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Card from '../../components/card/Card';
import './Home.css';

const Home = () => {
  const [param, setParam] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  let path = location.pathname.substring(1);
  path = path.charAt(0).toUpperCase() + path.slice(1);

  const listProfilesReducer = useSelector((state) => state.listProfiles);
  const { data, loading, error } = listProfilesReducer;

  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem('@userData');

    if (!valueFromLocalStorage) {
      history.push('/login');
    }
  }, []);

  useEffect(() => {
    dispatch(listProfiles());
  }, []);

  const handleFilter = (param) => {
    console.log(param);
    setParam(param);
  };

  const navigate = (section) => {
    history.push(`/${section}`);
  };

  console.log(data, loading, error);

  return (
    <div className='homeScreen'>
      <Navbar />
      <div className='contentSection'>
        <SideBar navigate={navigate} handleFilter={(f) => handleFilter(f)} />
        <div className='cards'>
          <p className='cardsTitle'>{`${path} ${
            param ? ' - ' + param : ''
          }`}</p>
          {loading && <p>Loading...</p>}
          {data &&
            data.map((obj) => (
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
