import React from 'react';

import { getImage } from '../../utils/gets';
import './Card.css';

const Card = ({
  companyPhoto,
  profilePhoto,
  firstname,
  lastname,
  position,
  companyName,
  companyDescription,
  interestsList,
  valuation,
  numberEmployees,
  lastInvestment,
}) => {
  return (
    <div className='card'>
      <div className='companyPhoto'>
        <div className='companyPhotoContainer'>
          {companyPhoto ? (
            <img
              className='companyImageStyle'
              src={getImage(companyPhoto)}
              alt='Profile'
            />
          ) : (
            <p>C</p>
          )}
        </div>
      </div>
      <div className='cardContent'>
        <div className='profileInfo'>
          <div className='profilePhotoContainer'>
            {profilePhoto ? (
              <img
                className='profileImageStyle'
                src={getImage(profilePhoto)}
                alt='Profile'
              />
            ) : (
              <p>P</p>
            )}
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
              {interestsList.map((int) => (
                <p className='cardInterest'>{`${int}`}</p>
              ))}
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
          <button className='requestButton'>Request meeting</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
