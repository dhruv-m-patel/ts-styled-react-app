import { RSAA } from 'redux-api-middleware';

export const Actions = {
  Test: {
    FetchDataPending: 'FetchDataPending',
    FetchDataCompleted: 'FetchDataCompleted',
    FetchDataFailed: 'FetchDataFailed',
  },
};

export interface RsaaRequestBody {
  endpoint: string;
  body?: any;
  method?: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE' | 'HEAD';
  types?: Array<string> | Array<{ type: string; meta: any }>;
  type?: string;
}

export function generateRequest({
  body,
  endpoint,
  ...options
}: RsaaRequestBody) {
  return {
    [RSAA]: {
      endpoint,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body && JSON.stringify(body),
      ...options,
    },
  };
}

export const fetchTestData = () =>
  generateRequest({
    endpoint: '/api/test-data',
    types: [
      Actions.Test.FetchDataPending,
      Actions.Test.FetchDataCompleted,
      Actions.Test.FetchDataFailed,
    ],
  });
