import React from 'react';

import './Card.css';

const Card = () => {
  return (
    <div className='card'>
      <div className='companyPhoto'>COMPANY PHOTO</div>
      <div className='cardContent'>
        <div className='profileInfo'>
          <div className='profilePhotoContainer'>IMAGE</div>
          <p className='profileName'>Damian Stone</p>
          <p className='position'>CEO at Toogether</p>
        </div>
        <div className='textInfoContainer'>
          <div className='companyDescriptionContainer'>
            <p className='companyName'>Toogether</p>
            <p className='companyDescription'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sagittis, odio eu auctor euismod, ligula leo viverra odio, eget
              sodales ex orci in purus. Donec a tortor finibus, pharetra nisi
              ut, posuere lectus. In hac habitasse platea dictumst. Morbi nec
              tristique dolor. Integer nec leo est. Nunc id libero commodo.
            </p>
          </div>
          <div className='interestsContainer'>
            <p className='interestTitle'>Interests</p>
            <div className='interestsList'>
              <p>Interest 1, </p>
              <p>Interest 2, </p>
              <p>Interest 3</p>
            </div>
          </div>
        </div>
        <div className='companyInfoContainer'>
          <div className='companyInfoWrapper'>
            <div className='companyInfo'>
              <p>Valuation: </p>
              <p> 2</p>
            </div>
            <div className='companyInfo'>
              <p>Valuation: </p>
              <p> 2</p>
            </div>
            <div className='companyInfo'>
              <p>Valuation: </p>
              <p> 2</p>
            </div>
          </div>
          <button className='requestButton'>Request meeting</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
