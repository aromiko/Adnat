import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/Types";

const initialState = [{ sessionId: "", isLogged: false }];

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return (state = action.payload);
    case LOGOUT_SUCCESS:
      return (state = initialState);
    default:
      return state;
  }
};

export default loginReducer;
