import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getImage } from '../../utils/gets';
import {
  getUser,
  listProfiles,
  updateProfile,
  uploadImage,
} from '../../store/actions/actions';
import { PROFILE_INPUTS, COMPANY_INPUTS } from '../../data/inputs';
import TextTareaInput from '../../components/textTarea/TextTareaInput';
import TextInput from '../../components/textInput/TextInput';
import SelectInput from '../../components/select/SelectInput';
import MultipleSelect from '../../components/multiSelect/MultiSelect';
import Navbar from '../../components/navbar/Navbar';
import _ from 'lodash';
import './Profile.css';

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [changedProperties, setChangedProperties] = useState({});

  const userReducer = useSelector((state) => state.userLogin);
  const { data: currentUser } = userReducer;

  const updateProfileReducer = useSelector((state) => state.updateProfile);
  const {
    data: updateProfileSuccess,
    loading: loadingUpdate,
    error: errorUpdate,
  } = updateProfileReducer;

  const uploadImageReducer = useSelector((state) => state.uploadImage);
  const { data: uploadData, error: errorUpload } = uploadImageReducer;

  useEffect(() => {
    setChangedProperties({ ...currentUser });
  }, []);

  useEffect(() => {
    if (uploadData) {
      dispatch(getUser());
    }

    if (updateProfileSuccess) {
      alert('Profile updated succesfully!!');
    }

    dispatch({ type: 'UPDATE_PROFILE_RESET' });
    dispatch({ type: 'UPLOAD_IMAGE_RESET' });
  }, [dispatch, uploadData, updateProfileSuccess]);

  useEffect(() => {
    if (errorUpdate?.response?.data) {
      alert(
        `Please complete the following fields: ${Object.keys(
          errorUpdate.response.data
        )}`
      );
    }
    if (errorUpload) {
      alert('Error uploading your image');
    }
  }, [dispatch, errorUpdate, errorUpload]);

  const navNavigate = (companyType) => {
    dispatch(listProfiles(companyType, null));
    history.push(`/${companyType}`);
  };

  const handleUpdate = () => {
    if (!_.isEqual(currentUser, changedProperties)) {
      dispatch({ type: 'UPDATE_PROFILE_RESET' });
      dispatch(updateProfile(changedProperties));
    } else {
      alert('No changes made!');
    }
  };

  const handleImageUpload = (backend_property, event) => {
    dispatch(uploadImage(backend_property, event.target.files[0]));
  };

  const handleChange = (backend_property, value) => {
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
            error={
              errorUpdate?.response?.data[input.backend_property] ? true : false
            }
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
            error={
              errorUpdate?.response?.data[input.backend_property] ? true : false
            }
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
            error={
              errorUpdate?.response?.data[input.backend_property] ? true : false
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
            error={
              errorUpdate?.response?.data[input.backend_property] ? true : false
            }
          />
        );
      }
      return null;
    });
  };

  return (
    <div className='profileScreen'>
      <Navbar navigate={navNavigate} />
      <div className='profileWrapper'>
        <div className='profileContainer'>
          <div className='profileInformationContainer'>
            <div className='profileTitleContainer'>
              <p className='profileTitleText'>My Profile</p>
            </div>
            <div className='profileImageWrapper'>
              <div className='profileImageContainer'>
                {currentUser ? (
                  <img
                    className='profileImage'
                    src={getImage(currentUser.photo)}
                    alt='Profile'
                  />
                ) : null}
              </div>
              <input
                type='file'
                accept='image/*'
                onChange={(e) => handleImageUpload('photo', e)}
                className='inputImage'
              />
            </div>
            {renderInputs(PROFILE_INPUTS)}
          </div>
          <div className='profileInformationContainer'>
            <div className='profileTitleContainer'>
              <p className='profileTitleText'>Company information</p>
            </div>
            <div className='profileImageWrapper'>
              <div className='profileImageContainer'>
                {currentUser ? (
                  <img
                    className='profileImage'
                    src={getImage(currentUser.company_photo)}
                    alt='Company'
                  />
                ) : null}
              </div>
              <input
                type='file'
                accept='image/*'
                onChange={(e) => handleImageUpload('company_photo', e)}
                className='inputImage'
              />
            </div>
            {renderInputs(COMPANY_INPUTS)}
          </div>
        </div>

        <div className='saveButtonContainer'>
          <button className='saveButton' onClick={handleUpdate}>
            Save information
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
