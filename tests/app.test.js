import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';
import config from "../config";

describe('app', () => {
  test('check for version', () => {
    const { getByText } = render(<App />);
    
    const titleElement = getByText(`Version: ${config.version}`);
    expect(titleElement).toBeInTheDocument();
  });
});
