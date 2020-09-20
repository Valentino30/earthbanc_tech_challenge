const { SET_ERRORS, CLEAR_ERRORS } = require("../actions/types");

const initialState = {};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};
