import { useMemo } from 'react';
import { Event } from '../../../../Calendar';

interface UseCalendarGridProps {
  currentMonth: number;
  currentYear: number;
  daysInMonth: number;
  firstDayOfMonth: number;
  todayDate: Date;
  events: Event[];
  selectedDate: Date | null;
  onDateClick: (date: Date) => void;
}

const useCalendarGrid = ({
  currentMonth,
  currentYear,
  daysInMonth,
  firstDayOfMonth,
  todayDate,
  events,
  selectedDate,
  onDateClick
}: UseCalendarGridProps) => {
  // Generar días del mes anterior para completar primera semana
  const prevMonthDays = useMemo(() => {
    const days = [];
    if (firstDayOfMonth > 0) {
      const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(prevMonthLastDay - firstDayOfMonth + i + 1);
      }
    }
    return days;
  }, [firstDayOfMonth, currentYear, currentMonth]);

  // Generar días del mes actual
  const currentMonthDays = useMemo(() => {
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }, [daysInMonth]);

  // Generar días del mes siguiente para completar última semana
  const nextMonthDays = useMemo(() => {
    const days = [];
    const totalDaysDisplayed = prevMonthDays.length + currentMonthDays.length;
    const remainingCells = 35 - totalDaysDisplayed; // 5 filas * 7 días = 35
    for (let i = 1; i <= remainingCells; i++) {
      days.push(i);
    }
    return days;
  }, [prevMonthDays.length, currentMonthDays.length]);

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
      const startWithTime = new Date(eventStart);
      startWithTime.setHours(0, 0, 0, 0);
      const endWithTime = new Date(eventEnd);
      endWithTime.setHours(23, 59, 59, 999);
      return date >= startWithTime && date <= endWithTime;
    });
  };

  // Función para verificar si un día está seleccionado
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

  // Función para verificar si un día es hoy
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

  // Función para renderizar un evento
  const renderEvent = (event: Event, day: number, monthOffset: number = 0) => {
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

    return {
      event,
      day,
      monthOffset,
      date,
      isStart,
      isEnd,
      isMiddle: !isStart && !isEnd,
      showTitle,
      displayTitle,
      handleEventClick: (e: React.MouseEvent) => {
        e.stopPropagation();
        onDateClick(date);
      }
    };
  };

  // Función para manejar click en una fecha
  const handleDateClick = (day: number, monthOffset: number = 0) => {
    const date = new Date(currentYear, currentMonth + monthOffset, day);
    onDateClick(date);
  };

  return {
    prevMonthDays,
    currentMonthDays,
    nextMonthDays,
    getEventsForDay,
    isSelectedDay,
    isTodayDate,
    renderEvent,
    handleDateClick
  };
};

export default useCalendarGrid;
