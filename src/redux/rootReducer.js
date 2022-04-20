import { combineReducers } from "redux";

import postReducer from "./modules/post/reducer";

const rootReducer = combineReducers({
  postReducer: postReducer,
});

export default rootReducer;
