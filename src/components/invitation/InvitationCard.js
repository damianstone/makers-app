import React from 'react';

import { getImage } from '../../utils/gets';
import './InvitationCard.css';

const InvitationCard = ({
  companyPhoto,
  profilePhoto,
  firstname,
  lastname,
  position,
  companyName,
  companyDescription,
  valuation,
  numberEmployees,
  lastInvestment,
  interest,
  message,
  handleOpenCalendar
}) => {
  return (
    <div className='invitationCard'>
      <div className='companyPhoto'>
        <div className='companyPhotoContainerINV'>
          <img
            className='companyImageStyle'
            src={getImage(companyPhoto)}
            alt='Profile'
          />
        </div>
      </div>
      <div className='cardContent'>
        <div className='profileInfo'>
          <div className='profilePhotoContainerINV'>
            <img
              className='profileImageStyle'
              src={getImage(profilePhoto)}
              alt='Profile'
            />
          </div>
          <p className='profileName'>{`${firstname} ${lastname}`}</p>
          <p className='position'>{position}</p>
        </div>
        <div className='textInfoContainer'>
          <div className='companyDescriptionContainer'>
            <p className='companyName'>Message</p>
            <p className='companyDescription'>{message}</p>
          </div>
          <div className='companyDescriptionContainer'>
            <p className='companyName'>{companyName}</p>
            <p className='companyDescription'>{companyDescription}</p>
          </div>
          <div className='interestsContainer'>
            <p className='interestTitle'>Interests</p>

            <div className='interestInv'>
              <p>{interest}</p>
            </div>
          </div>
        </div>
        <div className='companyInfoContainer'>
          <div className='companyInfoWrapper'>
            {numberEmployees && (
              <div className='companyInfo'>
                <p className='cardInfoProperty'>Number of employees:</p>
                <p className='cardInfoValue'> {numberEmployees}</p>
              </div>
            )}
            {valuation && (
              <div className='companyInfo'>
                <p className='cardInfoProperty'>Valuation:</p>
                <p className='cardInfoValue'>{`$${valuation} USD`}</p>
              </div>
            )}
            {lastInvestment && (
              <div className='companyInfo'>
                <p className='cardInfoProperty'>Last investment: </p>
                <p className='cardInfoValue'>{` $${lastInvestment} USD`}</p>
              </div>
            )}
          </div>
          <button className='requestButtonInv' onClick={handleOpenCalendar}>Schedule meeting</button>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
