import { ConfigReducerStateType } from './types';

export const defaultState: ConfigReducerStateType = {
  title: 'Typescript Styled React App',
  env: 'development',
};

export default function configReducer(
  state: ConfigReducerStateType = defaultState
) {
  return state;
}
