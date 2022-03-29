import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

const rootReducer = {
  counter: counterReducer,
};

export default rootReducer;
