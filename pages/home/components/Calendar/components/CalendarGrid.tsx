import React from 'react';
import { Event } from '../Calendar';
import {
  CalendarGridContainer,
  DayCell,
  DaysGrid,
  WeekdaysRow
} from '../styles/Calendar.styles';
import { EventBar } from './styles/EventOverlay.styles';

interface CalendarGridProps {
  currentMonth: number;
  currentYear: number;
  daysInMonth: number;
  firstDayOfMonth: number;
  todayDate: Date;
  events: Event[];
  selectedDate: Date | null;
  onDateClick: (date: Date) => void;
}

const weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentMonth,
  currentYear,
  daysInMonth,
  firstDayOfMonth,
  todayDate,
  events,
  selectedDate,
  onDateClick
}) => {
  // Generar días del mes anterior para completar primera semana
  const prevMonthDays = [];
  if (firstDayOfMonth > 0) {
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = 0; i < firstDayOfMonth; i++) {
      prevMonthDays.push(prevMonthLastDay - firstDayOfMonth + i + 1);
    }
  }

  // Generar días del mes actual
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Generar días del mes siguiente para completar última semana
  const nextMonthDays = [];
  const totalDaysDisplayed = prevMonthDays.length + currentMonthDays.length;
  const remainingCells = 35 - totalDaysDisplayed; // 5 filas * 7 días = 35 (reducido de 6 a 5 filas)
  for (let i = 1; i <= remainingCells; i++) {
    nextMonthDays.push(i);
  }

  // Función para obtener los eventos para un día específico
  const getEventsForDay = (
    day: number,
    isCurrentMonth: boolean,
    monthOffset: number = 0
  ): Event[] => {
    if (!isCurrentMonth) return [];

    const date = new Date(currentYear, currentMonth + monthOffset, day);
    return events.filter((event) => {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);

      // Ajustar las horas para comparación correcta
      const startWithTime = new Date(eventStart);
      startWithTime.setHours(0, 0, 0, 0);

      const endWithTime = new Date(eventEnd);
      endWithTime.setHours(23, 59, 59, 999);

      // Comprobar si la fecha está dentro del rango del evento
      return date >= startWithTime && date <= endWithTime;
    });
  };

  // Renderizar un evento para un día específico
  const renderEvent = (
    event: Event,
    day: number,
    isCurrentMonth: boolean,
    monthOffset: number = 0
  ) => {
    const date = new Date(currentYear, currentMonth + monthOffset, day);

    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);

    // Determinar si este día es el inicio o fin del evento
    const isStart =
      eventStart.getDate() === day &&
      eventStart.getMonth() === currentMonth + monthOffset &&
      eventStart.getFullYear() === currentYear;

    const isEnd =
      eventEnd.getDate() === day &&
      eventEnd.getMonth() === currentMonth + monthOffset &&
      eventEnd.getFullYear() === currentYear;

    // Solo mostrar título en el primer día del evento
    const showTitle = isStart;

    // Calcular título abreviado
    let displayTitle = '';
    if (showTitle) {
      // Título abreviado si es necesario - permitir títulos más largos
      displayTitle =
        event.title.length > 25
          ? event.title.substring(0, 25) + '...'
          : event.title;
    }

    return (
      <EventBar
        key={`event-${event.id}-day-${day}-${monthOffset}`}
        color={event.color || '#4a90e2'}
        isStart={isStart}
        isEnd={isEnd}
        isMiddle={!isStart && !isEnd}
        onClick={(e) => {
          e.stopPropagation();
          onDateClick(date);
        }}
        title={event.title}
      >
        {showTitle && displayTitle}
        {!showTitle && isEnd && '►'}{' '}
        {/* Indicador visual para el fin del evento */}
      </EventBar>
    );
  };

  // Comprobar si un día es el día seleccionado
  const isSelectedDay = (
    day: number,
    isCurrentMonth: boolean,
    monthOffset: number = 0
  ) => {
    if (!selectedDate || !isCurrentMonth) return false;

    return (
      day === selectedDate.getDate() &&
      currentMonth + monthOffset === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    );
  };

  // Comprobar si un día es hoy
  const isTodayDate = (
    day: number,
    isCurrentMonth: boolean,
    monthOffset: number = 0
  ) => {
    if (!isCurrentMonth) return false;

    return (
      day === todayDate.getDate() &&
      currentMonth + monthOffset === todayDate.getMonth() &&
      currentYear === todayDate.getFullYear()
    );
  };

  return (
    <CalendarGridContainer>
      <WeekdaysRow>
        {weekdays.map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </WeekdaysRow>

      <DaysGrid>
        {/* Días del mes anterior */}
        {prevMonthDays.map((day) => {
          const dayEvents = getEventsForDay(day, true, -1);

          return (
            <DayCell
              key={`prev-${day}`}
              isCurrentMonth={false}
              onClick={() =>
                onDateClick(new Date(currentYear, currentMonth - 1, day))
              }
            >
              <div className="day-content">
                <div className="day-number">{day}</div>
                <div className="events-container">
                  {/* Limitamos a mostrar máximo 3 eventos para mayor compatibilidad */}
                  {dayEvents
                    .slice(0, 2) // Mostramos solo 2 eventos como máximo
                    .map((event) => renderEvent(event, day, true, -1))}
                  {dayEvents.length > 2 && (
                    <div className="more-events">
                      +{dayEvents.length - 2} más
                    </div>
                  )}
                </div>
              </div>
            </DayCell>
          );
        })}

        {/* Días del mes actual */}
        {currentMonthDays.map((day) => {
          const isToday = isTodayDate(day, true);
          const isSelected = isSelectedDay(day, true);
          const dayEvents = getEventsForDay(day, true);

          return (
            <DayCell
              key={`current-${day}`}
              isCurrentMonth={true}
              isToday={isToday}
              isSelected={isSelected}
              hasEvents={dayEvents.length > 0}
              onClick={() =>
                onDateClick(new Date(currentYear, currentMonth, day))
              }
            >
              <div className="day-content">
                <div className="day-number">{day}</div>
                <div className="events-container">
                  {dayEvents
                    .slice(0, 2) // Reducido a 2 para mejor visualización en móvil
                    .map((event) => renderEvent(event, day, true))}
                  {dayEvents.length > 2 && (
                    <div className="more-events">
                      +{dayEvents.length - 2} más
                    </div>
                  )}
                </div>
              </div>
            </DayCell>
          );
        })}

        {/* Días del mes siguiente */}
        {nextMonthDays.map((day) => {
          const dayEvents = getEventsForDay(day, true, 1);

          return (
            <DayCell
              key={`next-${day}`}
              isCurrentMonth={false}
              onClick={() =>
                onDateClick(new Date(currentYear, currentMonth + 1, day))
              }
            >
              <div className="day-content">
                <div className="day-number">{day}</div>
                <div className="events-container">
                  {dayEvents
                    .slice(0, 2) // Reducido a 2 para mejor visualización en móvil
                    .map((event) => renderEvent(event, day, true, 1))}
                  {dayEvents.length > 2 && (
                    <div className="more-events">
                      +{dayEvents.length - 2} más
                    </div>
                  )}
                </div>
              </div>
            </DayCell>
          );
        })}
      </DaysGrid>
    </CalendarGridContainer>
  );
};

export default CalendarGrid;
