import { combineReducers } from "redux";
import { userReducer } from "./user";
import { kittenReducer } from "./kitten";
import { errorReducer } from "./error";

export const rootReducer = combineReducers({
  user: userReducer,
  kittens: kittenReducer,
  error: errorReducer,
});
