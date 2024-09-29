import { ConfigReducerStateType } from './types';

export const defaultState: ConfigReducerStateType = {
  env: 'development',
  title: 'Web App',
};

export default function configReducer(
  state: ConfigReducerStateType = defaultState
) {
  return state;
}
