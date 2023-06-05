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

  const handleOpenCalendar = (link) => {
    if (!link.match(/^[a-zA-Z]+:\/\//)) {
      link = 'https://' + link;
    }
    window.open(link, '_blank', 'noopener,noreferrer');
  };

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
                companyPhoto={obj.sender.company_photo}
                profilePhoto={obj.sender.photo}
                firstname={obj.sender.firstname}
                lastname={obj.sender.lastname}
                position={obj.sender.position}
                companyName={obj.sender.company_name}
                companyDescription={obj.sender.company_description}
                valuation={obj.sender.company_valuation}
                numberEmployees={obj.sender.company_employees}
                lastInvestment={obj.sender.company_investment}
                message={obj.message}
                interest={obj.interest}
                handleOpenCalendar={() =>
                  handleOpenCalendar(obj.sender.meeting_link)
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Invitations;
