import React from 'react';

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
          <img className='companyImageStyle' src={companyPhoto} alt='Profile' />
        </div>
      </div>
      <div className='cardContent'>
        <div className='profileInfo'>
          <div className='profilePhotoContainer'>
            <img
              className='profileImageStyle'
              src={profilePhoto}
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
              {interestsList.map((int) => (
                <p>{`${int}, `}</p>
              ))}
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

export default Card;
