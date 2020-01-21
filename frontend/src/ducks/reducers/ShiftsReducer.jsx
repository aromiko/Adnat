import {
  GET_SHIFTS_SUCCESS,
  LOGOUT_SUCCESS,
  POST_LEAVE_ORGANIZATION_SUCCESS
} from "../actions/Types";

const initialState = [];
export const shiftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHIFTS_SUCCESS:
      return (state = action.payload);
    case POST_LEAVE_ORGANIZATION_SUCCESS:
      return (state = initialState);
    case LOGOUT_SUCCESS:
      return (state = initialState);
    default:
      return state;
  }
};
