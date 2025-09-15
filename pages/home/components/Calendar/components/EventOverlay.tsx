import React from 'react';
import { EventBar } from './styles/EventOverlay.styles';

// Importar la interfaz Event
export interface Event {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  color?: string;
}

interface EventOverlayProps {
  events: Event[];
  currentMonth: number;
  currentYear: number;
  onEventClick: (event: Event) => void;
}

/**
 * Este componente renderiza eventos directamente dentro de las celdas del calendario
 * en lugar de usar un overlay con posicionamiento absoluto.
 */
const EventOverlay: React.FC<EventOverlayProps> = ({
  events,
  currentMonth,
  currentYear,
  onEventClick
}) => {
  // Agrupar eventos por día para que puedan ser insertados en las celdas correspondientes
  const getEventsForDay = (day: number, isCurrentMonth: boolean): Event[] => {
    if (!isCurrentMonth) return [];

    const date = new Date(currentYear, currentMonth, day);
    return events.filter((event) => {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);
      return (
        date >= new Date(eventStart.setHours(0, 0, 0, 0)) &&
        date <= new Date(eventEnd.setHours(23, 59, 59, 999))
      );
    });
  };

  // Método para renderizar un evento dentro de la celda de un día
  const renderEvent = (event: Event, day: number): JSX.Element => {
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);

    const isStart =
      startDate.getDate() === day &&
      startDate.getMonth() === currentMonth &&
      startDate.getFullYear() === currentYear;

    const isEnd =
      endDate.getDate() === day &&
      endDate.getMonth() === currentMonth &&
      endDate.getFullYear() === currentYear;

    // Solo mostrar título en el primer día del evento
    const showTitle = isStart;

    // Calcular título abreviado
    let displayTitle = '';
    if (showTitle) {
      // Título abreviado si es necesario
      displayTitle =
        event.title.length > 15
          ? event.title.substring(0, 15) + '...'
          : event.title;
    }

    return (
      <EventBar
        key={`event-${event.id}-day${day}`}
        color={event.color || '#4a90e2'}
        isStart={isStart}
        isEnd={isEnd}
        isMiddle={!isStart && !isEnd}
        onClick={(e) => {
          e.stopPropagation();
          onEventClick(event);
        }}
        title={event.title}
      >
        {showTitle && displayTitle}
        {!showTitle && isEnd && '►'}{' '}
        {/* Indicador visual para el fin del evento */}
      </EventBar>
    );
  };

  // Este componente ahora funciona como una factoría que será usada desde CalendarGrid
  // para insertar los eventos en cada celda de día
  return null;
};

export default EventOverlay;
