import { GET_USER_INFO_SUCCESS, LOGOUT_SUCCESS } from "../actions/Types";

const initialState = {
  userInfo: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_SUCCESS:
      return (state = action.payload);
    case LOGOUT_SUCCESS:
      return (state = initialState);
    default:
      return state;
  }
};

export default userReducer;
