import React from 'react';
import Container from '@material-ui/core/Container';
import Calendar from '../../components/calendar/Calendar';

export default function Planning(): JSX.Element {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Calendar />
    </Container>
  );
}
