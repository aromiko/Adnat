import {
  getOrganizationsSuccess,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  getUserInfoSuccess,
  postOrganizationSuccess,
  postOrganizationFailed,
  registerSuccess,
  putOrganizationSuccess,
  putOrganizationFailed
} from "./Actions";
import store from "../Store";
import axios from "axios";
import { history } from "../History";

let state = [];
store.subscribe(() => {
  state = store.getState();
});

const apiUrl = "http://localhost:4000";

export const login = (email, password) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/auth/login`, { email, password })
      .then(response => {
        dispatch(loginSuccess(response.data.sessionId, true));
        dispatch(getUserInfo());
        history.push("./home");
      })
      .catch(error => {
        dispatch(loginFailed());
        throw error;
      });
  };
};

export const logout = () => {
  return dispatch => {
    return axios
      .delete(`${apiUrl}/auth/logout`, {
        headers: {
          Authorization: state.auth.sessionId
        }
      })
      .then(() => {
        dispatch(logoutSuccess());
        history.push("./login");
      })
      .catch(error => {
        throw error;
      });
  };
};

export const register = (name, email, password, passwordConfirmation) => {
  return dispatch => {
    return axios
      .post(
        `${apiUrl}/auth/signup`,
        {
          name,
          email,
          password,
          passwordConfirmation
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        dispatch(registerSuccess());
        dispatch(loginSuccess(response.data.sessionId, true));
        dispatch(getUserInfo());
        history.push("./home");
      })
      .catch(error => {
        dispatch(loginFailed());
        throw error;
      });
  };
};

export const postOrganization = (name, hourlyRate) => {
  return dispatch => {
    return axios
      .post(
        `${apiUrl}/organisations/create_join`,
        { name, hourlyRate },
        {
          headers: {
            Authorization: state.auth.sessionId,
            "Content-Type": "application/json"
          }
        }
      )
      .then(() => {
        dispatch(postOrganizationSuccess(true));
        dispatch(getOrganizations());
        dispatch(getUserInfo());
      })
      .catch(error => {
        dispatch(postOrganizationFailed());
        throw error;
      });
  };
};

export const putOrganization = (name, hourlyRate, id) => {
  return dispatch => {
    return axios
      .put(
        `${apiUrl}/organisations/${id}`,
        { name, hourlyRate },
        {
          headers: {
            Authorization: state.auth.sessionId,
            "Content-Type": "application/json"
          }
        }
      )
      .then(() => {
        dispatch(putOrganizationSuccess());
        dispatch(getOrganizations());
      })
      .catch(error => {
        dispatch(putOrganizationFailed());
        throw error;
      });
  };
};

export const getOrganizations = () => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/organisations`, {
        headers: {
          Authorization: state.auth.sessionId,
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        dispatch(getOrganizationsSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const getUserInfo = () => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/users/me`, {
        headers: {
          Authorization: state.auth.sessionId,
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        dispatch(getUserInfoSuccess(response.data));
        dispatch(postOrganizationSuccess(true));
        if (!response.data.organisationId) {
          dispatch(postOrganizationSuccess(false));
          dispatch(getOrganizations());
        }
      })
      .catch(error => {
        throw error;
      });
  };
};
