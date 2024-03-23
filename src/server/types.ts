import { WebRequest } from '@dhruv-m-patel/web-app';

export type JSONValue = string | number | boolean | JSONObject | JSONArray;

export interface JSONObject {
  [x: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue> {}

export interface StatefulWebRequest extends WebRequest {
  initialState: JSONValue;
}
