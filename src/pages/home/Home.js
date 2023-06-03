import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { listProfiles } from '../../store/actions/actions';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Card from '../../components/card/Card';
import './Home.css';

const Home = () => {
  const [param, setParam] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname.substring(1);
  let pathTitle;
  if (path === 'startup') {
    pathTitle = 'Startups';
  } else {
    pathTitle = 'Corporations';
  }

  const listProfilesReducer = useSelector((state) => state.listProfiles);
  const { data, loading, error } = listProfilesReducer;

  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem('@userData');

    if (!valueFromLocalStorage) {
      history.push('/login');
    }
  }, []);

  useEffect(() => {
    dispatch(listProfiles(path, null));
    setParam(null);
  }, [path]);

  const handleFilter = (param) => {
    setParam(param);
    dispatch(listProfiles(path, param));
  };

  const navigate = (section) => {
    history.push(`/${section}`);
  };

  const navNavigate = (companyType) => {
    setParam(null);
    dispatch(listProfiles(companyType, null));
    history.push(`/${companyType}`);
  };

  return (
    <div className='homeScreen'>
      <Navbar navigate={navNavigate} />
      <div className='contentSection'>
        <SideBar navigate={navigate} handleFilter={(f) => handleFilter(f)} />
        <div className='cards'>
          <p className='cardsTitle'>{`${pathTitle} ${
            param ? ' - ' + param : ''
          }`}</p>
          {error && <p>Something went wrong</p>}
          {loading && <p>Loading...</p>}
          {data && data.length <= 0 && <p>{`No ${pathTitle} found ;(`}</p>}
          {data &&
            data.length > 0 &&
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
