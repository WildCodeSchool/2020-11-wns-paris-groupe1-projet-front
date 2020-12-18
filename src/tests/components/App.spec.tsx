import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './../../App';

afterEach(cleanup)

test('should take a snapshot', ():void => {
  const { asFragment } = render(<App />)
  expect(asFragment(<App />)).toMatchSnapshot()
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
