import React from 'react';
import Container from '@material-ui/core/Container';
import Calendar from '../../components/calendar/calendar';

export default function Course(): JSX.Element {
  return (
    <Container maxWidth="lg">
      <Calendar />
    </Container>
  );
}
