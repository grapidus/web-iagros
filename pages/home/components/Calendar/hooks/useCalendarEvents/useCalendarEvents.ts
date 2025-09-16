import { useMemo, useState } from 'react';
import { Event } from '../../Calendar';

interface UseCalendarEventsProps {
  events: Event[];
  currentMonth: number;
  currentYear: number;
}

const useCalendarEvents = ({
  events,
  currentMonth,
  currentYear
}: UseCalendarEventsProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

 
  const currentMonthEvents = useMemo(() => {
    return events.filter((event) => {
      const eventStartMonth = new Date(event.startDate).getMonth();
      const eventStartYear = new Date(event.startDate).getFullYear();
      const eventEndMonth = new Date(event.endDate).getMonth();
      const eventEndYear = new Date(event.endDate).getFullYear();
      return (
        (eventStartYear === currentYear && eventStartMonth === currentMonth) ||
        (eventEndYear === currentYear && eventEndMonth === currentMonth) ||
        (new Date(event.startDate) <= new Date(currentYear, currentMonth, 1) &&
          new Date(event.endDate) >= new Date(currentYear, currentMonth + 1, 0))
      );
    });
  }, [events, currentMonth, currentYear]);

  const selectedDateEvents = useMemo(() => {
    if (!selectedDate) return [];

    return events.filter((event) => {
      const eventStartDate = new Date(event.startDate);
      const eventEndDate = new Date(event.endDate);
      const startWithoutTime = new Date(eventStartDate);
      startWithoutTime.setHours(0, 0, 0, 0);
      const endWithoutTime = new Date(eventEndDate);
      endWithoutTime.setHours(23, 59, 59, 999);
      const selectedWithoutTime = new Date(selectedDate);
      selectedWithoutTime.setHours(0, 0, 0, 0);
      return (
        selectedWithoutTime >= startWithoutTime &&
        selectedWithoutTime <= endWithoutTime
      );
    });
  }, [selectedDate, events]);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  return {
    selectedDate,
    selectedDateEvents,
    currentMonthEvents,
    handleDateClick
  };
};

export default useCalendarEvents;
