import { combineReducers } from 'redux';
import testReducer from './test';
import configReducer from './config';

export default combineReducers({
  test: testReducer,
  config: configReducer,
});
