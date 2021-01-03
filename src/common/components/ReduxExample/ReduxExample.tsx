import React, { useEffect } from 'react';
import { List, ListItem, Typography, Link } from '@material-ui/core';
import Loader from '../Loader';
import Error from '../Error';
import Page from '../Page';
import { ConnectedComponentProps } from './index';

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
  }, [isFetching, error, data]);

  return (
    <Page>
      <Typography variant="h4">
        An example page showing Redux integration
      </Typography>
      <br />
      <br />
      <React.Fragment>
        {isFetching && <Loader message="Fetching data" />}
        {!!error && <Error message={error} />}
        {data && data.length > 0 && (
          <React.Fragment>
            <Typography>Following data was fetched using Redux</Typography>
            <List>
              {data.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
          </React.Fragment>
        )}
      </React.Fragment>
      <Link href="/">View Home Page</Link>
    </Page>
  );
}
