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
}) => {
  return (
    <div className='card'>
      <div className='companyPhoto'>
        <div className='companyPhotoContainer'>
          <img
            className='companyImageStyle'
            src={getImage(companyPhoto)}
            alt='Profile'
          />
        </div>
      </div>
      <div className='cardContent'>
        <div className='profileInfo'>
          <div className='profilePhotoContainer'>
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
            <p className='companyName'>{companyName}</p>
            <p className='companyDescription'>{companyDescription}</p>
          </div>
          <div className='interestsContainer'>
            <p className='interestTitle'>Interests</p>

            <div className='interestsList'>
              <p>{interest}</p>
            </div>
          </div>
        </div>
        <div className='companyInfoContainer'>
          <div className='companyInfoWrapper'>
            <div className='companyInfo'>
              <p>Number of employees: </p>
              <p> {numberEmployees}</p>
            </div>
            <div className='companyInfo'>
              <p>Valuation:</p>
              <p>{`$${valuation} USD`}</p>
            </div>
            <div className='companyInfo'>
              <p>Last investment: </p>
              <p>{`$${lastInvestment} USD`}</p>
            </div>
          </div>
          <button className='requestButton'>Request meeting</button>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
