import React from 'react';

import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='titleContainer'>
        <p>Startups x Corporations</p>
      </div>
      <div className='navBarContainer'>
        <div className='navBarItemsContainer'>
          <div className='itemContainer'>
            <p>Startups</p>
          </div>
          <div className='itemContainer'>
            <p>Corporations</p>
          </div>
        </div>

        <div className='avatarContainer'>
          <div className='avatar'>
            <p>AVATAR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
