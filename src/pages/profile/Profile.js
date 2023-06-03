import React, { useState, useEffect } from 'react';

import { PROFILE_INPUTS, COMPANY_INPUTS } from '../../data/inputs';
import TextInput from '../../components/textInput/TextInput';
import SelectInput from '../../components/select/SelectInput';
import MultipleSelect from '../../components/multiSelect/MultiSelect';
import Navbar from '../../components/navbar/Navbar';
import './Profile.css';
import TextTareaInput from '../../components/textTarea/TextTareaInput';

const Profile = () => {
  const [changedProperties, setChangedProperties] = useState({});

  const handleChange = (backend_property, value) => {
    console.log(changedProperties);
    console.log(backend_property, value);

    if (backend_property === 'interests') {
      setChangedProperties({
        ...changedProperties,
        [backend_property]: [...value],
      });
    } else {
      setChangedProperties({
        ...changedProperties,
        [backend_property]: value,
      });
    }
  };

  const renderInputs = (INPUTS) => {
    return INPUTS.map((input) => {
      if (input.type === 'text') {
        return (
          <TextInput
            key={input.id}
            id={input.id}
            label={input.label}
            handleChange={(event) =>
              handleChange(input.backend_property, event.target.value)
            }
            value={changedProperties[input.backend_property]}
          />
        );
      }

      if (input.type === 'select') {
        return (
          <SelectInput
            key={input.id}
            id={input.id}
            label={input.label}
            options={input.options}
            handleChange={(event) =>
              handleChange(input.backend_property, event.target.value)
            }
            value={changedProperties[input.backend_property]}
          />
        );
      }
      if (input.type === 'multiselect') {
        return (
          <MultipleSelect
            key={input.id}
            id={input.id}
            label={input.label}
            options={input.options}
            handleChange={(event) => {
              handleChange(input.backend_property, event.target.value);
            }}
            values={
              changedProperties[input.backend_property]
                ? changedProperties[input.backend_property]
                : []
            }
          />
        );
      }

      if (input.type === 'texttarea') {
        return (
          <TextTareaInput
            key={input.id}
            label={input.label}
            handleChange={(event) =>
              handleChange(input.backend_property, event.target.value)
            }
            value={changedProperties[input.backend_property]}
          />
        );
      }
      return null;
    });
  };

  return (
    <div className='profileScreen'>
      <Navbar />
      <div className='profileWrapper'>
        <div className='profileContainer'>
          <div className='profileInformationContainer'>
            <div className='profileTitleContainer'>
              <p className='profileTitleText'>My Profile</p>
            </div>
            <div className='profileImageWrapper'>
              <div className='profileImageContainer'>
                <image className='profileImage' />
              </div>
            </div>
            {renderInputs(PROFILE_INPUTS)}
          </div>
          <div className='profileInformationContainer'>
            <div className='profileTitleContainer'>
              <p className='profileTitleText'>Company information</p>
            </div>
            <div className='profileImageWrapper'>
              <div className='profileImageContainer'>
                <image className='profileImage' />
              </div>
            </div>
            {renderInputs(COMPANY_INPUTS)}
          </div>
        </div>

        <div className='saveButtonContainer'>
          <button className='saveButton'>Save information</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
