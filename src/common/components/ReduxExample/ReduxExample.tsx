import React, { useEffect } from 'react';
import Error from '../Error';
import Page from '../Page';
import { ConnectedComponentProps } from './index';
import { Link } from 'react-router-dom';

export default function ReduxExample({
  isFetching,
  error,
  data,
  fetchTestData,
}: ConnectedComponentProps & {}) {
  useEffect(() => {
    if (!isFetching && !error && (!data || !data.length)) {
      fetchTestData();
    }
  }, [isFetching, error, data, fetchTestData]);

  return (
    <Page>
      <h2>An example page showing Redux integration</h2>
      <React.Fragment>
        {isFetching && <p>Fetching data...</p>}
        {!!error && <Error message={error} />}
        {data && data.length > 0 && (
          <React.Fragment>
            <h3>Following data was fetched using Redux</h3>
            <ul>
              {data.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </React.Fragment>
      <Link to="/">View Home Page</Link>
    </Page>
  );
}
