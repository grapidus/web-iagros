import React from 'react';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';
import CalendarHeaderComponent from './components/CalendarHeader/CalendarHeader';
import EventList from './components/EventList/EventList';
import useCalendar from './hooks/useCalendar/useCalendar';
import useCalendarEvents from './hooks/useCalendarEvents';
import {
  CalendarContainer,
  CalendarContent,
  CalendarEyebrow,
  CalendarHeader,
  CalendarSection,
  CalendarSubtitle,
  CalendarTitle,
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
        <CalendarHeader>
          <CalendarEyebrow>Agenda</CalendarEyebrow>
          {title && <CalendarTitle>{title}</CalendarTitle>}
          {subtitle && <CalendarSubtitle>{subtitle}</CalendarSubtitle>}
        </CalendarHeader>
      )}

      <CalendarContainer>
        <CalendarWrapper>
          <CalendarHeaderComponent
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
