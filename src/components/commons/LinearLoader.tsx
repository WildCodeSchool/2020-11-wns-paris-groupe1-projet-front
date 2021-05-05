import React from 'react';

import { Container, LinearProgress } from '@material-ui/core';

export default function LinearLoader(): JSX.Element {
  return (
    <Container>
      <LinearProgress color="primary" />
    </Container>
  );
}
