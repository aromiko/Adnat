import {
  GET_ORGANIZATIONS_SUCCESS,
  GET_ORGANIZATIONS_FAILED,
  LOGOUT_SUCCESS
} from "../actions/Types";

const initialState = {
  organization: []
};

const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORGANIZATIONS_SUCCESS:
      return (state = action.payload);
    case GET_ORGANIZATIONS_FAILED:
      return (state = []);
    case LOGOUT_SUCCESS:
      return (state = initialState);
    default:
      return state;
  }
};

export default organizationReducer;
