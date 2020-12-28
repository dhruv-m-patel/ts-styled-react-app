import { combineReducers } from 'redux';
import testReducer from './test-reducer';

export interface ReducerAction {
  type?: string;
  payload?: any;
}

export interface TestReducerStateType {
  isFetching: Boolean;
  error?: string;
  data?: Array<any>;
}
interface RootReducerType {
  test: TestReducerStateType;
}

export default combineReducers<RootReducerType>({
  test: testReducer,
});
