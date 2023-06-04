import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { listInvitations, listProfiles } from '../../store/actions/actions';
import { CARDS } from '../../data/cards';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Card from '../../components/card/Card';
import './Invitations.css';
import InvitationCard from '../../components/invitation/InvitationCard';

const Invitations = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const invitationsReducer = useSelector((state) => state.listInvitations);
  const {
    data: invitations,
    loading: loadingInvitations,
    error: errorInvitations,
  } = invitationsReducer;

  useEffect(() => {
    dispatch(listInvitations());
  }, []);

  const handleFilter = (param) => {
    history.push(`/startup`);
  };

  const navigate = (section) => {
    history.push(`/${section}`);
  };

  const navNavigate = (companyType) => {
    dispatch(listProfiles(companyType, null));
    history.push(`/${companyType}`);
  };

  console.log({ ...invitations });

  return (
    <div className='homeScreen'>
      <Navbar navigate={navNavigate} />
      <div className='contentSection'>
        <SideBar navigate={navigate} handleFilter={(f) => handleFilter(f)} />
        <div className='cards'>
          <p className='cardsTitle'>Invitations for meetings</p>
          {loadingInvitations && (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress color='inherit' />
            </Box>
          )}
          {invitations?.length === 0 && <p>No invitations</p>}
          {invitations?.length > 0 &&
            invitations?.map((obj) => (
              <InvitationCard
                companyPhoto={obj.company_photo}
                profilePhoto={obj.photo}
                firstname={obj.firstname}
                lastname={obj.lastname}
                position={obj.position}
                companyName={obj.company_name}
                companyDescription={obj.company_description}
                valuation={obj.company_valuation}
                numberEmployees={obj.company_employees}
                lastInvestment={obj.company_investment}
                interest={obj.interest}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Invitations;
