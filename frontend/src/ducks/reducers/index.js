import { combineReducers } from "redux";
import loginReducer from "./AuthReducer";
import {
  organizationReducer,
  inOrganizationReducer
} from "./OrganizationReducer";
import userReducer from "./UserReducer";

const allReducers = combineReducers({
  auth: loginReducer,
  organization: organizationReducer,
  userInfo: userReducer,
  inOrganization: inOrganizationReducer
});

export default allReducers;
