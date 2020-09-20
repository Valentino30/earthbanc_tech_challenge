const { GET_KITTENS } = require("../actions/types");

const initialState = [];

export const kittenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KITTENS:
      return action.payload;
    default:
      return state;
  }
};
