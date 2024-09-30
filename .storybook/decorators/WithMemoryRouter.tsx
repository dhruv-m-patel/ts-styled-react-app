import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export const WithMemoryRouter = (Story: any) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);
