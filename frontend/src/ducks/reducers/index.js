import { combineReducers } from "redux";
import loginReducer from "./AuthReducer";
import organizationReducer from "./OrganizationReducer";
import userReducer from "./UserReducer";

const allReducers = combineReducers({
  auth: loginReducer,
  organization: organizationReducer,
  userInfo: userReducer
});

export default allReducers;
