import axios from "axios";

import { LOGIN, LOGOUT } from "./types";
import { clearErrors, setErrors } from "./error";

export const login = ({ username, password }) => async (dispatch) => {
  try {
    const url = "http://localhost:3000/api/login";
    
    const response = await axios.post(url, {
      username,
      password,
    });
    dispatch({
      type: LOGIN,
      payload: response.data,
    });
    dispatch(clearErrors());
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
