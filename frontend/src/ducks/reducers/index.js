import { combineReducers } from "redux";
import loginReducer from "./AuthReducer";
import {
  organizationReducer,
  inOrganizationReducer,
  editOrganizationReducer
} from "./OrganizationReducer";
import { userReducer, dataReducer } from "./UserReducer";

const allReducers = combineReducers({
  auth: loginReducer,
  organization: organizationReducer,
  userInfo: userReducer,
  inOrganization: inOrganizationReducer,
  editOrganizationId: editOrganizationReducer,
  isDataLoaded: dataReducer
});

export default allReducers;
