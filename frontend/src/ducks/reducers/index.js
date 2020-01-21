import { combineReducers } from "redux";
import loginReducer from "./AuthReducer";
import {
  organizationReducer,
  inOrganizationReducer,
  editOrganizationReducer,
  organizationJoinedReducer
} from "./OrganizationReducer";
import { userReducer, dataReducer, orgUserReducer } from "./UserReducer";
import { shiftsReducer } from "./ShiftsReducer";

const allReducers = combineReducers({
  auth: loginReducer,
  organization: organizationReducer,
  userInfo: userReducer,
  inOrganization: inOrganizationReducer,
  editOrganizationId: editOrganizationReducer,
  isDataLoaded: dataReducer,
  shifts: shiftsReducer,
  orgUsers: orgUserReducer,
  orgJoined: organizationJoinedReducer
});

export default allReducers;
