import {
  GET_ORGANIZATIONS_SUCCESS,
  GET_ORGANIZATIONS_FAILED,
  GET_ORGANIZATION_BY_ID_SUCCESS,
  POST_ORGANIZATION_SUCCESS,
  POST_LEAVE_ORGANIZATION_SUCCESS,
  LOGOUT_SUCCESS,
  SET_EDIT_ID
} from "../actions/Types";

const initialOrganizationState = [];
const initialInOrganizationState = false;
const initialEditOrganizationState = 0;
const initialOrganizationJoinedState = [];

export const organizationReducer = (
  state = initialOrganizationState,
  action
) => {
  switch (action.type) {
    case GET_ORGANIZATIONS_SUCCESS:
      return (state = action.payload);
    case GET_ORGANIZATIONS_FAILED:
      return (state = []);
    case LOGOUT_SUCCESS:
      return (state = initialOrganizationState);
    default:
      return state;
  }
};

export const inOrganizationReducer = (
  state = initialInOrganizationState,
  action
) => {
  switch (action.type) {
    case POST_ORGANIZATION_SUCCESS:
      return (state = action.payload);
    case POST_LEAVE_ORGANIZATION_SUCCESS:
      return (state = initialInOrganizationState);
    case LOGOUT_SUCCESS:
      return (state = initialInOrganizationState);
    default:
      return state;
  }
};

export const editOrganizationReducer = (
  state = initialEditOrganizationState,
  action
) => {
  switch (action.type) {
    case SET_EDIT_ID:
      return (state = action.payload);
    default:
      return state;
  }
};

export const organizationJoinedReducer = (
  state = initialOrganizationJoinedState,
  action
) => {
  switch (action.type) {
    case GET_ORGANIZATION_BY_ID_SUCCESS:
      return (state = action.payload);
    case LOGOUT_SUCCESS:
      return (state = initialOrganizationJoinedState);
    default:
      return state;
  }
};
