import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page';

export default function HomePage() {
  return (
    <Page>
      <h3>This boilerplate app is built with:</h3>
      <ul>
        <li>React v18</li>
        <li>Redux</li>
        <li>Typescript</li>
        <li>React Router</li>
        <li>Webpack v5 with Hot Reloading</li>
        <li>Express v4</li>
        <li>
          Configuration (using&nbsp;
          <a href="https://www.npmjs.com/package/confit" target="blank">
            confit
          </a>
          &nbsp;/&nbsp;
          <a href="https://www.npmjs.com/package/meddleware" target="blank">
            meddleware
          </a>
          )
        </li>
        <li>
          Code splitting (using &nbsp;
          <a
            href="https://loadable-components.com/docs/getting-started/"
            target="blank"
          >
            Loadable Components
          </a>
          )
        </li>
        <li>React Bootstrap</li>
      </ul>
      <Link to="/redux">View Example Page with Redux integration</Link>
    </Page>
  );
}
