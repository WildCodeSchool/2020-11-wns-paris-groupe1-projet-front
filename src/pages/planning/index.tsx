import React from 'react';
import Container from '@material-ui/core/Container';
import Calendar from '../../components/calendar/Calendar';

export default function Planning(): JSX.Element {
  return (
    <Container maxWidth="lg">
      <Calendar />
    </Container>
  );
}
