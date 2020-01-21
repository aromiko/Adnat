import {
  DATA_LOADED,
  GET_ORGANIZATIONS_SUCCESS,
  GET_SHIFTS_SUCCESS,
  GET_USER_INFO_SUCCESS,
  GET_ORGANIZATION_USERS_SUCCESS,
  GET_ORGANIZATION_BY_ID_SUCCESS,
  DELETE_SHIFT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  POST_ORGANIZATION_SUCCESS,
  POST_ORGANIZATION_FAILED,
  POST_LEAVE_ORGANIZATION_SUCCESS,
  POST_SHIFT_SUCCESS,
  PUT_ORGANIZATION_SUCCESS,
  PUT_ORGANIZATION_FAILED,
  SET_EDIT_ID
} from "./Types";

export const loginSuccess = (sessionId, isLogged) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { sessionId, isLogged }
  };
};

export const loginFailed = () => {
  return {
    type: LOGIN_FAILED
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS
  };
};

export const postOrganizationSuccess = inOrganization => {
  return { type: POST_ORGANIZATION_SUCCESS, payload: inOrganization };
};

export const postOrganizationFailed = () => {
  return { type: POST_ORGANIZATION_FAILED };
};

export const putOrganizationSuccess = () => {
  return { type: PUT_ORGANIZATION_SUCCESS };
};

export const putOrganizationFailed = () => {
  return { type: PUT_ORGANIZATION_FAILED };
};

export const getOrganizationsSuccess = response => {
  return {
    type: GET_ORGANIZATIONS_SUCCESS,
    payload: response
  };
};

export const getUserInfoSuccess = response => {
  return {
    type: GET_USER_INFO_SUCCESS,
    payload: response
  };
};

export const setEditId = organizationId => {
  return { type: SET_EDIT_ID, payload: organizationId };
};

export const dataLoaded = loaded => {
  return { type: DATA_LOADED, payload: loaded };
};

export const leaveOrganization = () => {
  return { type: POST_LEAVE_ORGANIZATION_SUCCESS };
};

export const getShiftsSuccess = shifts => {
  return { type: GET_SHIFTS_SUCCESS, payload: shifts };
};

export const getOrganizationsUsersSuccess = users => {
  return { type: GET_ORGANIZATION_USERS_SUCCESS, payload: users };
};

export const getOrganizationsByIdSuccess = organizationJoined => {
  return { type: GET_ORGANIZATION_BY_ID_SUCCESS, payload: organizationJoined };
};

export const postShiftSuccess = () => {
  return { type: POST_SHIFT_SUCCESS };
};

export const deleteShiftsSuccess = () => {
  return { type: DELETE_SHIFT_SUCCESS };
};
