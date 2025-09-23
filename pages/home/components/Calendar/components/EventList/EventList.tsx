import React from 'react';
import { GoLocation } from 'react-icons/go';
import { Event } from '../../Calendar';
import {
  EventItem,
  EventListContainer,
  EventListHeader,
  NoEventsMessage
} from './styles/EventList.styles';

interface EventListProps {
  events: Event[];
  selectedDate: Date | null;
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }).format(date);
};

const EventList: React.FC<EventListProps> = ({ events, selectedDate }) => {
  const formattedDate = selectedDate
    ? new Intl.DateTimeFormat('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(selectedDate)
    : null;

  return (
    <EventListContainer>
      <EventListHeader>
        {formattedDate ? (
          `Eventos para ${formattedDate}`
        ) : (
          <span className="no-date">Selecciona una fecha para ver eventos</span>
        )}
      </EventListHeader>

      {events.length === 0 && (
        <NoEventsMessage>
          {selectedDate
            ? 'No hay eventos para esta fecha'
            : 'Selecciona un día para ver los eventos'}
        </NoEventsMessage>
      )}

      {events.map((event) => (
        <EventItem key={event.id} color={event.color}>
          <h4>{event.title}</h4>
          <p>{event.description}</p>
          <span className="event-date">
            {formatDate(new Date(event.startDate))} -{' '}
            {formatDate(new Date(event.endDate))}
          </span>
          {event.location && (
            <div className="event-location">
              <GoLocation />
              {event.location}
            </div>
          )}
        </EventItem>
      ))}
    </EventListContainer>
  );
};

export default EventList;
