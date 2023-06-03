import * as c from '../../constants/constants';

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case c.USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case c.USER_REGISTER_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case c.USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case c.LOGIN_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case c.LOGIN_SUCCESS:
      return {
        data: { ...action.payload },
        success: true,
      };
    case c.LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case 'USER_LOGOUT':
      return {};
    default:
      return state;
  }
};

export const listProfilesReducer = (state = {}, action) => {
  switch (action.type) {
    case c.LIST_PROFILES_REQUEST:
      return {
        loading: true,
      };
    case c.LIST_PROFILES_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case c.LIST_PROFILES_FAIL:
      return {
        error: action.payload,
      };
    case c.LIST_PROFILES_RESET:
      return {};
    default:
      return state;
  }
};

export const updateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case c.UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case c.UPDATE_PROFILE_SUCCESS:
      return {
        data: { ...action.payload },
        success: true,
      };
    case c.UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case c.UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const listInvitationsReducer = (state = {}, action) => {
  switch (action.type) {
    case c.LIST_INVITATIONS_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case c.LIST_INVITATIONS_SUCCESS:
      return {
        data: { ...action.payload },
        success: true,
      };
    case c.LIST_INVITATIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case c.LIST_INVITATIONS_RESET:
      return {};
    default:
      return state;
  }
};

export const sendInvitationReducer = (state = {}, action) => {
  switch (action.type) {
    case c.SEND_INVITATION_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case c.SEND_INVITATION_SUCCESS:
      return {
        data: { ...action.payload },
        success: true,
      };
    case c.SEND_INVITATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case c.SEND_INVITATION_RESET:
      return {};
    default:
      return state;
  }
};
