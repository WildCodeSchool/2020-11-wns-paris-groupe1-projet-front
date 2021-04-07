/* eslint-disable max-len */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import FullCalendar, {
  EventApi, DateSelectArg, EventClickArg, EventContentArg, formatDate,
} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
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
    const title = window.prompt('Please enter a new title for your event');
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
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events: EventApi[]) => {
    setState({
      ...state,
      currentEvents: events,
    });
  };

  const renderSidebar = () => (
    <div className="demo-app-sidebar">
      <div className="demo-app-sidebar-section">
        <h2>Instructions</h2>
        <ul>
          <li>Sélectionner une date et ajouter un nouvel évènement</li>
          <li>Glisser, déposer et redimensionner les évènements</li>
          <li>Cliquer sur l&apos;évènement pour le supprimer</li>
        </ul>
      </div>
      <div className="demo-app-sidebar-section">
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            checked={state.weekendsVisible}
            onChange={handleWeekendsToggle}
          />
          Ajouter les week-ends
        </label>
      </div>
      <div className="demo-app-sidebar-section">
        <h2>
          Tous les évènements (
          {state.currentEvents.length}
          )
        </h2>
        <ul>
          {state.currentEvents.map(renderSidebarEvent)}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="demo-app">
      <div className="demo-app-main">
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
      </div>
      {renderSidebar()}
    </div>
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