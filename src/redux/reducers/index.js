import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { randomReducer } from "./randomReducer";

export const rootReducer = combineReducers({
  count: countReducer,
  random: randomReducer,
});
