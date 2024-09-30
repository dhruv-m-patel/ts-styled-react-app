import { combineReducers } from 'redux';
import exampleReducer from './example';
import configReducer from './config';

export default combineReducers({
  example: exampleReducer,
  config: configReducer,
});
