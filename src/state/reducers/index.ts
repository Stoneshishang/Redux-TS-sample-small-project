import { combineReducers } from "redux";
import repoReducer from "./repoReducer";

const reducers = combineReducers({
  repo: repoReducer,
});

export default reducers;
