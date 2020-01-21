import {
  GET_USER_INFO_SUCCESS,
  LOGOUT_SUCCESS,
  DATA_LOADED,
  GET_ORGANIZATION_USERS_SUCCESS
} from "../actions/Types";

const initialState = {
  userInfo: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_SUCCESS:
      return (state = action.payload);
    case LOGOUT_SUCCESS:
      return (state = initialState);
    default:
      return state;
  }
};

const initialOrgUserState = [];

export const orgUserReducer = (state = initialOrgUserState, action) => {
  switch (action.type) {
    case GET_ORGANIZATION_USERS_SUCCESS:
      return (state = action.payload);
    case LOGOUT_SUCCESS:
      return (state = initialOrgUserState);
    default:
      return state;
  }
};

const initialDataLoaded = false;

export const dataReducer = (state = initialDataLoaded, action) => {
  switch (action.type) {
    case DATA_LOADED:
      return (state = action.payload);
    case LOGOUT_SUCCESS:
      return (state = initialDataLoaded);
    default:
      return state;
  }
};
