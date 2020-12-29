import { combineReducers } from 'redux';
import testReducer from './test-reducer';

export interface TypeAndPayload<PayloadType> {
  type?: string;
  payload?: PayloadType;
}

export interface TestReducerStateType {
  isFetching: boolean;
  error?: string;
  data?: Array<string>;
}

export default combineReducers({
  test: testReducer,
});
