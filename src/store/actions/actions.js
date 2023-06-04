import axios from 'axios';
import * as c from '../../constants/constants';

const BASE_URL = 'http://127.0.0.1:8000';

// * --------------------------------------- USER ------------------------------------------------

export const register = (email, password, repeated_password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: c.USER_REGISTER_REQUEST });

      const config = {
        'Content-Type': 'application/json',
      };

      const { data } = await axios({
        method: 'POST',
        url: `${BASE_URL}/api/users/register/`,
        headers: config,
        data: {
          email,
          password,
          repeated_password,
        },
      });

      await localStorage.setItem(
        '@userData',
        JSON.stringify({
          ...data,
        })
      );

      dispatch({
        type: c.USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: c.USER_REGISTER_FAIL,
        payload: error,
      });
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: c.LOGIN_REQUEST });

      const config = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };

      const { data } = await axios({
        method: 'POST',
        url: `${BASE_URL}/api/users/login/`,
        headers: config,
        data: {
          email,
          password,
        },
      });

      await localStorage.setItem(
        '@userData',
        JSON.stringify({
          ...data,
        })
      );

      dispatch({
        type: c.LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: c.LOGIN_FAIL,
        payload: error,
      });
    }
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('@userData');
  dispatch({ type: 'USER_LOGOUT' });
};

export const getUser = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: c.LOGIN_REQUEST });

      const userData = JSON.parse(await localStorage.getItem('@userData'));

      const config = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${userData.token}`,
      };

      const { data } = await axios({
        method: 'POST',
        url: `${BASE_URL}/api/users/${userData.id}`,
        headers: config,
      });

      await localStorage.setItem(
        '@userData',
        JSON.stringify({
          ...data,
        })
      );

      dispatch({
        type: c.LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: c.LOGIN_FAIL,
        payload: error,
      });
    }
  };
};

// * --------------------------------------- PROFILES / COMPANIES ------------------------------------------------

export const listProfiles = (companyTypeParam, industryParam) => {
  return async (dispatch) => {
    try {
      dispatch({ type: c.LIST_PROFILES_REQUEST });

      const userData = JSON.parse(await localStorage.getItem('@userData'));

      const config = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${userData.token}`,
      };

      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL}/api/users/?company_type=${
          companyTypeParam ? companyTypeParam : 'startup'
        }${industryParam ? '&company_industry=' + industryParam : ''}`,
        headers: config,
      });

      dispatch({
        type: c.LIST_PROFILES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: c.LIST_PROFILES_FAIL,
        payload: error,
      });
    }
  };
};

export const updateProfile = (obj) => {
  return async (dispatch) => {
    try {
      dispatch({ type: c.UPDATE_PROFILE_REQUEST });

      const userData = JSON.parse(await localStorage.getItem('@userData'));

      const config = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        Authorization: `Bearer ${userData.token}`,
      };

      // Creating form data
      let formData = new FormData();

      for (let key in obj) {
          if (obj[key] instanceof File) {
              formData.append(key, obj[key], obj[key].name);
          } else {
              formData.append(key, obj[key]);
          }
      }

      const { data } = await axios({
        method: 'PATCH',
        url: `${BASE_URL}/api/users/${userData.id}/`,
        headers: config,
        data: obj,
      });

      await localStorage.setItem(
        '@userData',
        JSON.stringify({
          ...data,
        })
      );

      dispatch({
        type: c.UPDATE_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: c.UPDATE_PROFILE_FAIL,
        payload: error,
      });
    }
  };
};

// * --------------------------------------- INVITATIONS ------------------------------------------------

export const listInvitations = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: c.LIST_INVITATIONS_REQUEST });

      const userData = JSON.parse(await localStorage.getItem('@userData'));

      const config = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${userData.token}`,
      };

      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL}/api/invitationsactions/my-invitations/`,
        headers: config,
      });

      dispatch({
        type: c.LIST_INVITATIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: c.LIST_INVITATIONS_FAIL,
        payload: error,
      });
    }
  };
};

export const sendInvitation = (invitedId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: c.LIST_INVITATIONS_REQUEST });

      const userData = JSON.parse(await localStorage.getItem('@userData'));

      const config = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${userData.token}`,
      };

      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL}/api/invitations/${invitedId}/actions/send-invitation/`,
        headers: config,
      });

      dispatch({
        type: c.LIST_INVITATIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: c.LIST_INVITATIONS_FAIL,
        payload: error,
      });
    }
  };
};
