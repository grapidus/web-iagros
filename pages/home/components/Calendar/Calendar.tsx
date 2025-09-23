import React from 'react';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';
import CalendarHeader from './components/CalendarHeader/CalendarHeader';
import EventList from './components/EventList/EventList';
import useCalendar from './hooks/useCalendar/useCalendar';
import useCalendarEvents from './hooks/useCalendarEvents';
import {
  CalendarContainer,
  CalendarContent,
  CalendarSection,
  CalendarWrapper
} from './styles/Calendar.styles';

export interface Event {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  color?: string;
}

interface CalendarProps {
  events: Event[];
  title?: string;
  subtitle?: string;
}

const Calendar: React.FC<CalendarProps> = ({ events, title, subtitle }) => {
  const {
    currentMonth,
    currentYear,
    daysInMonth,
    firstDayOfMonth,
    prevMonth,
    nextMonth,
    todayDate,
    isCurrentMonth
  } = useCalendar();

  const {
    selectedDate,
    selectedDateEvents,
    currentMonthEvents,
    handleDateClick
  } = useCalendarEvents({
    events,
    currentMonth,
    currentYear
  });

  return (
    <CalendarSection>
      {(title || subtitle) && (
        <div className="calendar-header-text">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}

      <CalendarContainer>
        <CalendarWrapper>
          <CalendarHeader
            currentMonth={currentMonth}
            currentYear={currentYear}
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            isCurrentMonth={isCurrentMonth}
          />

          <CalendarContent>
            <CalendarGrid
              currentMonth={currentMonth}
              currentYear={currentYear}
              daysInMonth={daysInMonth}
              firstDayOfMonth={firstDayOfMonth}
              todayDate={todayDate}
              events={currentMonthEvents}
              selectedDate={selectedDate}
              onDateClick={handleDateClick}
            />

            <EventList
              events={selectedDateEvents}
              selectedDate={selectedDate}
            />
          </CalendarContent>
        </CalendarWrapper>
      </CalendarContainer>
    </CalendarSection>
  );
};

export default Calendar;
