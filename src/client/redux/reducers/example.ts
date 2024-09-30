import { TypeAndPayload } from './types';
import { Actions } from '../actions';

export interface ExampleReducerStateType {
  isFetching: boolean;
  error?: string;
  data?: Array<string>;
}

export const defaultState: ExampleReducerStateType = {
  isFetching: false,
  error: undefined,
  data: [],
};

export default function exampleReducer(
  state: ExampleReducerStateType = defaultState,
  action: TypeAndPayload<Array<string>> = { type: undefined }
) {
  const { payload } = action;
  switch (action.type) {
    case Actions.Example.FetchDataPending:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      };

    case Actions.Example.FetchDataCompleted:
      return {
        ...state,
        isFetching: false,
        data: payload,
      };

    case Actions.Example.FetchDataFailed:
      return {
        ...state,
        isFetching: false,
        error: 'There was an error retrieving data, please try again',
      };

    default:
      return state;
  }
}
