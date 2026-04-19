import React from 'react';
import { Event } from '../../Calendar';

import {
  CalendarGridContainer,
  DayCell,
  DaysGrid,
  EventEndIcon,
  MoreEventsIcon,
  NextMonthIcon,
  PrevMonthIcon,
  TodayIcon,
  WeekdaysRow
} from './styles/CalendarGrid.styles';

import {
  MdArrowLeft,
  MdArrowRight,
  MdDateRange,
  MdMoreHoriz
} from 'react-icons/md';
import { EventBar } from '../EventOverlay/styles/EventOverlay.styles';
import useCalendarGrid from './hooks/useCalendarGrid/useCalendarGrid';

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
  const {
    prevMonthDays,
    currentMonthDays,
    nextMonthDays,
    getEventsForDay,
    isSelectedDay,
    isTodayDate,
    renderEvent,
    handleDateClick
  } = useCalendarGrid({
    currentMonth,
    currentYear,
    daysInMonth,
    firstDayOfMonth,
    todayDate,
    events,
    selectedDate,
    onDateClick
  });

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
              $isCurrentMonth={false}
              onClick={() => handleDateClick(day, -1)}
            >
              <div className="day-content">
                <div className="day-number">
                  <PrevMonthIcon>
                    <MdArrowLeft />
                  </PrevMonthIcon>
                  {day}
                </div>
                <div className="events-container">
                  {dayEvents.slice(0, 2).map((event) => {
                    const eventData = renderEvent(event, day, -1);
                    return (
                      <EventBar
                        key={`event-${eventData.event.id}-day-${eventData.day}-${eventData.monthOffset}`}
                        color={eventData.event.color || '#4a90e2'}
                        $isStart={eventData.isStart}
                        $isEnd={eventData.isEnd}
                        $isMiddle={eventData.isMiddle}
                        onClick={eventData.handleEventClick}
                        title={eventData.event.title}
                      >
                        {eventData.showTitle && eventData.displayTitle}
                        {!eventData.showTitle && eventData.isEnd && (
                          <EventEndIcon>
                            <MdArrowRight />
                          </EventEndIcon>
                        )}
                      </EventBar>
                    );
                  })}
                  {dayEvents.length > 2 && (
                    <div className="more-events">
                      <MoreEventsIcon>
                        <MdMoreHoriz />
                      </MoreEventsIcon>
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
              $isCurrentMonth={true}
              $isToday={isToday}
              $isSelected={isSelected}
              $hasEvents={dayEvents.length > 0}
              onClick={() => handleDateClick(day)}
            >
              <div className="day-content">
                <div className="day-number">
                  {isToday && (
                    <TodayIcon>
                      <MdDateRange />
                    </TodayIcon>
                  )}
                  {day}
                </div>
                <div className="events-container">
                  {dayEvents.slice(0, 2).map((event) => {
                    const eventData = renderEvent(event, day);
                    return (
                      <EventBar
                        key={`event-${eventData.event.id}-day-${eventData.day}-${eventData.monthOffset}`}
                        color={eventData.event.color || '#4a90e2'}
                        $isStart={eventData.isStart}
                        $isEnd={eventData.isEnd}
                        $isMiddle={eventData.isMiddle}
                        onClick={eventData.handleEventClick}
                        title={eventData.event.title}
                      >
                        {eventData.showTitle && eventData.displayTitle}
                        {!eventData.showTitle && eventData.isEnd && (
                          <EventEndIcon>
                            <MdArrowRight />
                          </EventEndIcon>
                        )}
                      </EventBar>
                    );
                  })}
                  {dayEvents.length > 2 && (
                    <div className="more-events">
                      <MoreEventsIcon>
                        <MdMoreHoriz />
                      </MoreEventsIcon>
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
              $isCurrentMonth={false}
              onClick={() => handleDateClick(day, 1)}
            >
              <div className="day-content">
                <div className="day-number">
                  <NextMonthIcon>
                    <MdArrowRight />
                  </NextMonthIcon>
                  {day}
                </div>
                <div className="events-container">
                  {dayEvents.slice(0, 2).map((event) => {
                    const eventData = renderEvent(event, day, 1);
                    return (
                      <EventBar
                        key={`event-${eventData.event.id}-day-${eventData.day}-${eventData.monthOffset}`}
                        color={eventData.event.color || '#4a90e2'}
                        $isStart={eventData.isStart}
                        $isEnd={eventData.isEnd}
                        $isMiddle={eventData.isMiddle}
                        onClick={eventData.handleEventClick}
                        title={eventData.event.title}
                      >
                        {eventData.showTitle && eventData.displayTitle}
                        {!eventData.showTitle && eventData.isEnd && (
                          <EventEndIcon>
                            <MdArrowRight />
                          </EventEndIcon>
                        )}
                      </EventBar>
                    );
                  })}
                  {dayEvents.length > 2 && (
                    <div className="more-events">
                      <MoreEventsIcon>
                        <MdMoreHoriz />
                      </MoreEventsIcon>
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
