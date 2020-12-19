import { combineReducers } from "redux";


import { listFurniture } from './furniture_reducer';

const rootReducer = combineReducers({
  listFurniture,
});

export default rootReducer;
