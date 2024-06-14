
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import useApiRequest from '../../../../hooks/useApiRequest';
import config from '../../../../api/apiConfig';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [values, setValues] = useState(null);
  const [method, setMethod] = useState(null);
  const [recarga, setRecarga] = useState(0);
  const [reloadCounter, setReloadCounter] = useState(0);

  const calendario = useApiRequest(config.endpoints.calendario.url, "GET", null, null, reloadCounter);
  const posCalendario = useApiRequest(config.endpoints.calendario.url, method, values, null, recarga);

  useEffect(() => {
    const events = calendario.data.map(event => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
    setEvents(events);
  }, [calendario.data]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Crear un nuevo evento:');
    if (title) {
      const newEvent = { title, start: start.toISOString(), end: end.toISOString() };
      setMethod("POST");
      setRecarga(recarga + 1);
      setValues(newEvent);

      setTimeout(() => {
        setReloadCounter(prev => prev + 1);
      }, 2000);
    }
  };

  const handleEventFinalizado = (eventId) => {
    const updatedEvent = { status: 'finalizado', id: eventId };
    setMethod("PUT");
    setValues(updatedEvent);
    setRecarga(recarga + 1);

    setTimeout(() => {
      setReloadCounter(prev => prev + 1);
    }, 2000);
  };

  const handleEventClick = (event) => {
    if (window.confirm('¿Marcar este evento como finalizado?')) {
      handleEventFinalizado(event.id);
    }
  };

  const eventPropGetter = (event) => {
    return {
      style: {
        backgroundColor: event.status === 'finalizado' ? 'lightgray' : 'blue',
      },
    };
  };

  return (
    <div style={{ height: '80vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventClick}
        defaultView="month"
        views={['month', 'week', 'day', 'work_week', 'agenda']}
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
        style={{ height: '100%' }}
        eventPropGetter={eventPropGetter}
      />
    </div>
  );
};

export default MyCalendar;
