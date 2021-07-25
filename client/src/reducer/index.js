import { combineReducers } from "redux";
import ipoReducer from "./ipoReducer";

export default combineReducers({
  ipo: ipoReducer,
  //   tech: techReducer,
});
