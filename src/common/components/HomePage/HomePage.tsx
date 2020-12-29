import React from 'react';
import { Typography, List, ListItem, Link } from '@material-ui/core';
import Page from '../Page';

export default function HomePage() {
  return (
    <Page>
      <Typography variant="h5">This starter-kit was built with:</Typography>
      <List>
        <ListItem>React v16.8</ListItem>
        <ListItem>Redux</ListItem>
        <ListItem>Styled Components</ListItem>
        <ListItem>React Router</ListItem>
        <ListItem>Webpack v4 with Hot Reloading</ListItem>
        <ListItem>Typescript</ListItem>
        <ListItem>Express v4</ListItem>
        <ListItem>
          Configuration (using&nbsp;
          <Link href="https://www.npmjs.com/package/confit" target="blank">
            confit
          </Link>
          &nbsp;/&nbsp;
          <Link href="https://www.npmjs.com/package/meddleware" target="blank">
            meddleware
          </Link>
          )
        </ListItem>
        <ListItem>
          Code splitting (using &nbsp;
          <Link
            href="https://loadable-components.com/docs/getting-started/"
            target="blank"
          >
            Loadable Components
          </Link>
          )
        </ListItem>
        <ListItem>React Bootstrap</ListItem>
      </List>
      <Link href="/redux">View Example Page with Redux integration</Link>
    </Page>
  );
}
