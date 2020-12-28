import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

interface StateDecoratorProps {
  initialState?: any;
  children?: JSX.Element;
}

export default function StateDecorator({
  initialState,
  children,
}: StateDecoratorProps) {
  const store = configureStore(initialState);

  return <Provider store={store}>{children}</Provider>;
}
