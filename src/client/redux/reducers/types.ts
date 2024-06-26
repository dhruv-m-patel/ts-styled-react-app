export interface TypeAndPayload<PayloadType> {
  type?: string;
  payload?: PayloadType;
}

export interface TestReducerStateType {
  isFetching: boolean;
  error?: string;
  data?: Array<string>;
}
