import { useCallback, useMemo, useState } from 'react';

// Por defecto, establecemos la fecha inicial al 15 de septiembre de 2025
// para que coincida con los datos de ejemplo
const defaultInitialDate = new Date(2025, 8, 15); // Mes 8 es septiembre (0-indexed)

const useCalendar = (initialDate = defaultInitialDate) => {
  const [currentDate, setCurrentDate] = useState(initialDate);

  // Valores calculados del mes actual
  const currentMonth = useMemo(() => currentDate.getMonth(), [currentDate]);
  const currentYear = useMemo(() => currentDate.getFullYear(), [currentDate]);

  // Días en el mes actual
  const daysInMonth = useMemo(() => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  }, [currentMonth, currentYear]);

  // Día de la semana del primer día del mes (0 = domingo, 1 = lunes, etc.)
  const firstDayOfMonth = useMemo(() => {
    return new Date(currentYear, currentMonth, 1).getDay();
  }, [currentMonth, currentYear]);

  // Para el propósito de este ejemplo, usamos la misma fecha de simulación como "hoy"
  // esto asegura que el "hoy" del calendario coincida con la fecha de nuestros datos
  const todayDate = useMemo(() => new Date(2025, 8, 15), []);

  // Verificar si estamos en el mes actual (relativo a nuestra fecha simulada)
  const isCurrentMonth = useMemo(() => {
    return (
      currentMonth === todayDate.getMonth() &&
      currentYear === todayDate.getFullYear()
    );
  }, [currentMonth, currentYear, todayDate]);

  // Navegar al mes anterior
  const prevMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  }, []);

  // Navegar al mes siguiente
  const nextMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  }, []);

  // Ir al mes actual (usando nuestra fecha simulada)
  const goToToday = useCallback(() => {
    setCurrentDate(new Date(2025, 8, 15));
  }, []);

  // Generar un array con los días del mes actual
  const daysArray = useMemo(() => {
    // Array para días del mes anterior para completar la primera semana
    const prevMonthDays = [];
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();

    // Si el primer día del mes no es domingo (0), necesitamos añadir días del mes anterior
    for (let i = 0; i < firstDayOfMonth; i++) {
      const day = prevMonthLastDay - firstDayOfMonth + i + 1;
      prevMonthDays.push({
        date: new Date(currentYear, currentMonth - 1, day),
        isCurrentMonth: false,
        isToday: false
      });
    }

    // Array para los días del mes actual
    const currentMonthDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isToday =
        date.getDate() === todayDate.getDate() &&
        date.getMonth() === todayDate.getMonth() &&
        date.getFullYear() === todayDate.getFullYear();

      currentMonthDays.push({
        date,
        isCurrentMonth: true,
        isToday
      });
    }

    // Array para días del siguiente mes para completar la última semana
    const nextMonthDays = [];
    const totalDays = prevMonthDays.length + currentMonthDays.length;
    const daysNeeded = 42 - totalDays; // 6 semanas * 7 días = 42

    for (let i = 1; i <= daysNeeded; i++) {
      nextMonthDays.push({
        date: new Date(currentYear, currentMonth + 1, i),
        isCurrentMonth: false,
        isToday: false
      });
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [currentMonth, currentYear, daysInMonth, firstDayOfMonth, todayDate]);

  return {
    currentMonth,
    currentYear,
    daysInMonth,
    firstDayOfMonth,
    prevMonth,
    nextMonth,
    goToToday,
    daysArray,
    todayDate,
    isCurrentMonth
  };
};

export default useCalendar;
