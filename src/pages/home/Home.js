import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import InvitationModal from '../../components/modal/InvitationModal';
import { listProfiles, sendInvitation } from '../../store/actions/actions';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Card from '../../components/card/Card';
import './Home.css';

const Home = () => {
  const [param, setParam] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [changedProperties, setChangedProperties] = useState({});
  const [invitedId, setInvitedId] = useState();

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

  const sendInvitationReducer = useSelector((state) => state.sendInvitation);
  const {
    data: sendInvitationSuccess,
    loading: loadingSendInvitation,
    error: errorSendInvitation,
  } = sendInvitationReducer;

  console.log({ ...errorSendInvitation });

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

  useEffect(() => {
    if (sendInvitationSuccess) {
      alert('Invitation sent!');
      setOpenModal(false);
      setChangedProperties({});
      if (param) {
        dispatch(listProfiles(path, param));
      } else {
        dispatch(listProfiles(path, null));
      }
    }
    if (errorSendInvitation) {
      alert('Something went wrong ;(');
    }
    dispatch({ type: 'SEND_INVITATION_RESET' });
  }, [dispatch, sendInvitationSuccess, errorSendInvitation]);

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

  const handleSendInvitation = () => {
    if (changedProperties.message && changedProperties.interest && invitedId) {
      dispatch(sendInvitation(invitedId, changedProperties));
    }
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
          {loading ||
            (loadingSendInvitation && (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            ))}
          {data?.length <= 0 && <p>{`No ${pathTitle} found`}</p>}
          {data?.length > 0 &&
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
                handleSendInvitation={() => {
                  setOpenModal(true);
                  setInvitedId(obj.id);
                }}
              />
            ))}
          {openModal && (
            <InvitationModal
              open={openModal}
              handleClose={() => setOpenModal(false)}
              changedProperties={changedProperties}
              setChangedProperties={setChangedProperties}
              handleSend={handleSendInvitation}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
