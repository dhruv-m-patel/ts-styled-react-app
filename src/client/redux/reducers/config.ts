export interface ConfigReducerStateType {
  env: string;
  title: string;
}

export const defaultState: ConfigReducerStateType = {
  env: 'development',
  title: 'Web App',
};

export default function configReducer(
  state: ConfigReducerStateType = defaultState
) {
  return state;
}
