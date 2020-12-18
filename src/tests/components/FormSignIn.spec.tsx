
import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import FormSignIn from '../../components/form/FormSignIn';

afterEach(cleanup)

describe.skip('FormSignIn', () => {
  it('should take a snapshot', () => {
    render(<FormSignIn />)
    const handleSubmit = jest.fn()
    fireEvent.click(screen.getByText('Se connecter'))
    expect(handleSubmit).toHaveBeenCalledWith(1);
  });
});