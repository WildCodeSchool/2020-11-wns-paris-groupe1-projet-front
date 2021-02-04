import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react/types-6-0';
import StyledButton from '../styles/styled-button';

export default {
  title: 'Styled Button',
  component: StyledButton,
} as Meta;

export const Default = () => (
  <StyledButton onClick={action('Styled button clicked')}>
    Styled Button
  </StyledButton>
);
