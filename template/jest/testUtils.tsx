import React from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import MockNavigator from './MockNavigator';

interface IWrapperProps {
  children: any;
}

function render(ui: any, { ...renderOptions } = {}) {
  function Wrapper({ children }: IWrapperProps) {
    return <MockNavigator component={children} />;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react-native';
// override render method
export { render };
