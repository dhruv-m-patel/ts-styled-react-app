import { combineReducers } from 'redux';
import testReducer from './test-reducer';
import configReducer from './config-reducer';

export default combineReducers({
  test: testReducer,
  config: configReducer,
});
