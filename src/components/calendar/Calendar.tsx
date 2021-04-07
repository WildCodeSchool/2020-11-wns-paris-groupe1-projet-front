import React from "react";
// import ReactDOM from "react-dom";
// import HTML5Backend from "react-dnd-html5-backend";
// import { DragDropContext } from "react-dnd";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

export default function MyCalendar(): JSX.Element {
  return (
    <>
      <p>hello hjsdvcqzves</p>
      {/* <DragAndDropCalendar
        localizer={localizer}
        style={{ height: "100%" }}
        selectable
        resizable
        defaultView={Views.WEEK}
        defaultDate={new Date(2021, 4, 2)}
        // // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      /> */}
    </>
  );
}
