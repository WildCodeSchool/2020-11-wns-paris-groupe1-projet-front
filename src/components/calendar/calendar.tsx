/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable react/sort-comp */
import React, { useState } from 'react';
import FullCalendar, {
  EventApi, DateSelectArg, EventClickArg, EventContentArg, formatDate,
} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Container } from '@material-ui/core';
import { INITIAL_EVENTS, createEventId } from './event-utils';

interface ICalendarState {
  weekendsVisible: boolean
  currentEvents: EventApi[]
}

export default function Calendar(): JSX.Element {
  const [state, setState] = useState<ICalendarState>({
    weekendsVisible: true,
    currentEvents: [],
  });

  const handleWeekendsToggle = () => {
    setState({
      ...state,
      weekendsVisible: !state.weekendsVisible,
    });
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt('Entrer un titre pour ce nouvel évènement');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (window.confirm(`Êtes-vous certains de vouloir supprimer cet évènement '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events: EventApi[]) => {
    setState({
      ...state,
      currentEvents: events,
    });
  };

  const RenderSidebar = () => (
    <Container>
      <Container className="demo-app-sidebar-section">
        <h2>Instructions</h2>
        <ul>
          <li>Selectionner une date et vous pourrez créer un nouvel évènement</li>
          <li>Glisser, déposer et redimensionner l&apos;évènement</li>
          <li>Cliquer sur l&apos;évènement pour le supprimer</li>
        </ul>
      </Container>
      <Container className="demo-app-sidebar-section">
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            checked={state.weekendsVisible}
            onChange={handleWeekendsToggle}
          />
          Ajouter le week-end
        </label>
      </Container>
      <Container className="demo-app-sidebar-section">
        <h2>
          Tous les évènements (
          {state.currentEvents.length}
          )
        </h2>
        <ul>
          {state.currentEvents.map(renderSidebarEvent)}
        </ul>
      </Container>
    </Container>
  );

  return (
    <Container className="demo-app">
      <Container className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          editable
          selectable
          selectMirror
          dayMaxEvents
          weekends={state.weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </Container>
      {RenderSidebar()}
    </Container>
  );
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event: EventApi) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start!, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
      <i>{event.title}</i>
    </li>
  );
}
