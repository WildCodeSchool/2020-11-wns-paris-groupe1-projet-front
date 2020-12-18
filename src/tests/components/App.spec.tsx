import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './../../App';

afterEach(cleanup)

describe('App', () => {
  it('should compare App snapshots', () => {
    const { asFragment } = render(<App />)
    const app = asFragment()
    expect(app).not.toBe(null);
    expect(app).toMatchSnapshot();
  });
});