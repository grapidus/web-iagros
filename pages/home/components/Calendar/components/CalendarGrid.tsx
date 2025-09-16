import React from 'react';
import { Event } from '../Calendar';
import {
  CalendarGridContainer,
  DayCell,
  DaysGrid,
  WeekdaysRow
} from '../styles/Calendar.styles';
import { EventBar } from './styles/EventOverlay.styles';

import {
  MdArrowLeft,
  MdArrowRight,
  MdDateRange,
  MdMoreHoriz
} from 'react-icons/md';

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
  const prevMonthDays = [];
  if (firstDayOfMonth > 0) {
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = 0; i < firstDayOfMonth; i++) {
      prevMonthDays.push(prevMonthLastDay - firstDayOfMonth + i + 1);
    }
  }
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const nextMonthDays = [];
  const totalDaysDisplayed = prevMonthDays.length + currentMonthDays.length;
  const remainingCells = 35 - totalDaysDisplayed;
  for (let i = 1; i <= remainingCells; i++) {
    nextMonthDays.push(i);
  }
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
      const startWithTime = new Date(eventStart);
      startWithTime.setHours(0, 0, 0, 0);
      const endWithTime = new Date(eventEnd);
      endWithTime.setHours(23, 59, 59, 999);
      return date >= startWithTime && date <= endWithTime;
    });
  };

  const renderEvent = (
    event: Event,
    day: number,
    p0: boolean,
    monthOffset: number = 0
  ) => {
    const date = new Date(currentYear, currentMonth + monthOffset, day);
    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);
    const isStart =
      eventStart.getDate() === day &&
      eventStart.getMonth() === currentMonth + monthOffset &&
      eventStart.getFullYear() === currentYear;
    const isEnd =
      eventEnd.getDate() === day &&
      eventEnd.getMonth() === currentMonth + monthOffset &&
      eventEnd.getFullYear() === currentYear;
    const showTitle = isStart;
    let displayTitle = '';
    if (showTitle) {
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
        {!showTitle && isEnd && (
          <MdArrowRight style={{ verticalAlign: 'middle' }} />
        )}
      </EventBar>
    );
  };

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
                <div className="day-number">
                  <MdArrowLeft
                    style={{
                      verticalAlign: 'middle',
                      marginRight: '2px',
                      fontSize: '0.8em',
                      opacity: 0.5
                    }}
                  />
                  {day}
                </div>
                <div className="events-container">
                  {dayEvents
                    .slice(0, 2)
                    .map((event) => renderEvent(event, day, true, -1))}
                  {dayEvents.length > 2 && (
                    <div className="more-events">
                      <MdMoreHoriz
                        style={{ verticalAlign: 'middle', marginRight: '2px' }}
                      />
                      {dayEvents.length - 2} más
                    </div>
                  )}
                </div>
              </div>
            </DayCell>
          );
        })}

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
                <div className="day-number">
                  {isToday && (
                    <MdDateRange
                      style={{
                        verticalAlign: 'middle',
                        marginRight: '2px',
                        color: '#4a90e2'
                      }}
                    />
                  )}
                  {day}
                </div>
                <div className="events-container">
                  {dayEvents
                    .slice(0, 2)
                    .map((event) => renderEvent(event, day, true))}
                  {dayEvents.length > 2 && (
                    <div className="more-events">
                      <MdMoreHoriz
                        style={{ verticalAlign: 'middle', marginRight: '2px' }}
                      />
                      {dayEvents.length - 2} más
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
                <div className="day-number">
                  <MdArrowRight
                    style={{
                      verticalAlign: 'middle',
                      marginRight: '2px',
                      fontSize: '0.8em',
                      opacity: 0.5
                    }}
                  />
                  {day}
                </div>
                <div className="events-container">
                  {dayEvents
                    .slice(0, 2)
                    .map((event) => renderEvent(event, day, true, 1))}
                  {dayEvents.length > 2 && (
                    <div className="more-events">
                      <MdMoreHoriz
                        style={{ verticalAlign: 'middle', marginRight: '2px' }}
                      />
                      {dayEvents.length - 2} más
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
