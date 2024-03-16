import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

interface StateDecoratorProps {
  initialState?: any;
  children?: React.ReactNode;
}

export default function StateDecorator({
  initialState,
  children,
}: StateDecoratorProps) {
  const store = configureStore(initialState);

  // @ts-ignore
  return <Provider store={store}>{children}</Provider>;
}
