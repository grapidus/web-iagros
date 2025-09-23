import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  CalendarControls,
  CalendarHeaderContainer,
  MonthYearDisplay
} from './styles/CalendarHeader.styles';

interface CalendarHeaderProps {
  currentMonth: number;
  currentYear: number;
  prevMonth: () => void;
  nextMonth: () => void;
  isCurrentMonth: boolean;
}

const monthNames = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  currentYear,
  prevMonth,
  nextMonth,
  isCurrentMonth
}) => {
  return (
    <CalendarHeaderContainer>
      <MonthYearDisplay>
        {monthNames[currentMonth]} {currentYear}
      </MonthYearDisplay>

      <CalendarControls>
        <button onClick={prevMonth} aria-label="Mes anterior">
          <FaChevronLeft />
        </button>
        {!isCurrentMonth && (
          <button
            className="today-btn"
            onClick={() => {
              const today = new Date();
              // Resetear a hoy si no estamos en el mes actual
              window.location.reload();
            }}
          >
            Hoy
          </button>
        )}
        <button onClick={nextMonth} aria-label="Mes siguiente">
          <FaChevronRight />
        </button>
      </CalendarControls>
    </CalendarHeaderContainer>
  );
};

export default CalendarHeader;
