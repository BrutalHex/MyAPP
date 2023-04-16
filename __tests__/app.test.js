

import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';
import config from "../config";

describe('app', () => {
  test('check for version', () => {
    const { getByText, container } = render(<App />);
    
    const titleElement = getByText((content, element) => {
      const hasVersion = content.includes("Version");
      const hasVersionNumber = content.includes(config.version);
      return hasVersion && hasVersionNumber;
    });
              
    expect(titleElement).toBeTruthy();
  });
});
