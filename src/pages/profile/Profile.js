import React, { useState, useEffect } from 'react';

import { PROFILE_INPUTS, COMPANY_INPUTS } from '../../data/inputs';
import TextInput from '../../components/textInput/TextInput';
import SelectInput from '../../components/select/SelectInput';
import MultipleSelect from '../../components/multiSelect/MultiSelect';
import Navbar from '../../components/navbar/Navbar';
import './Profile.css';

const Profile = () => {
  const [changedProperties, setChangedProperties] = useState({});

  const renderInputs = (INPUTS) => {
    return INPUTS.map((input) => {
      if (input.type === 'text') {
        return (
          <TextInput
            key={input.id}
            label={input.label}
            onChange={() => {}}
            id={input.id}
          />
        );
      }

      if (input.type === 'select') {
        return <SelectInput label={'Name'} options={input.options} />;
      }
      if (input.type === 'multiselect') {
        return <MultipleSelect label={'id'} valueList={input.options} />;
      }
      return null;
    });
  };

  return (
    <div className='profileScreen'>
      <Navbar />
      <div className='profileContainer'>
        <div className='profileInformationContainer'>
          <div className='profileTitleContainer'>
            <p className='profileTitleText'>My Profile</p>
          </div>
          {renderInputs(PROFILE_INPUTS)}
        </div>
        <div className='profileInformationContainer'>
          <div className='profileTitleContainer'>
            <p className='profileTitleText'>Company information</p>
          </div>
          {renderInputs(COMPANY_INPUTS)}
        </div>
      </div>
    </div>
  );
};

export default Profile;
