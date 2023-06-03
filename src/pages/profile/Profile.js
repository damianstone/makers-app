import React from 'react';

import TextInput from '../../components/textInput/TextInput';
import MultipleSelect from '../../components/multiSelect/MultiSelect';
import Navbar from '../../components/navbar/Navbar';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profileScreen'>
      <Navbar />
      <div className='profileContainer'>
        <div className='profileInformationContainer'>
          <div className='profileTitleContainer'>
            <p className='profileTitleText'>My Profile</p>
          </div>

          <TextInput />
          <MultipleSelect label={'Name'} />
        </div>
        <div className='profileInformationContainer'>
          <div className='profileTitleContainer'>
            <p className='profileTitleText'>Company information</p>
          </div>
          <TextInput />
          <MultipleSelect label={'Name'} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
