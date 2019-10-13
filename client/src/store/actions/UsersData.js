import axios from "axios";
import * as actionTypes from "./actionTypes";
// Reducer functions

export const get_items = () => {
  return (dispatch, getState) => {
    axios
      .post("products/all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => {
        console.log(res.data);
      });
  };
};
export const get_userf = user => {
  return {
    type: actionTypes.GET_USER,
    user: user
  };
};
export const get_user = () => {
  return (dispatch, getState) => {
    axios
      .get("/user/user_info", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => {
        dispatch(get_userf(res.data));
      });
  };
};
export const loginf = user => {
  localStorage.setItem("token", `${user.token}`);
  return {
    type: actionTypes.LOGIN,
    user: user
  };
};
export const update_photo = photo => {
  return (dispatch, getState) => {
    axios
      .post("/user/upload_photo/", photo, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => {
        dispatch(get_user());
      });
  };
};
export const login = (email, password) => {
  return (dispatch, getState) => {
    let data = { email: email, password: password };
    console.log(data);
    axios
      .post("http://185.91.55.98:8000/user/login/", data, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        if (res.status !== 200) {
          window.location = "/login";
        }
        console.log(res);
        dispatch(loginf(res.data));
      })
      .catch(err => {
        window.location = "/login";
        console.log(err);
      });
  };
};

export const logoutf = () => {
  return {
    type: actionTypes.LOGOUT,
    logout: false
  };
};
export const logout = () => {
  return (dispatch, getState) => {
    dispatch(logoutf());
  };
};
