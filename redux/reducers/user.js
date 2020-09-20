import { setCookie, getCookie, removeCookie } from "../../utils/cookies";

const { LOGIN, LOGOUT } = require("../actions/types");

let initialState;

if (typeof localStorage !== "undefined") {
  const authCookie = getCookie("auth");
  if (authCookie) {
    initialState = {
      isLoggedIn: true,
      user: JSON.parse(decodeURIComponent(authCookie)),
    };
  } else {
    initialState = {
      isLoggedIn: false,
      user: {},
    };
  }
} else {
  initialState = {
    isLoggedIn: false,
    user: {},
  };
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      if (window) window.location.href = "/";
      setCookie("auth", action.payload);
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT:
      removeCookie("auth");
      return {
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};
