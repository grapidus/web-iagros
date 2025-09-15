import { Event } from '../pages/home/components/Calendar/Calendar';

// Establecemos una fecha fija para los datos de ejemplo (15 de septiembre de 2025)
const exampleDate = new Date(2025, 8, 15); // Mes 8 es septiembre (0-indexed)
const currentYear = exampleDate.getFullYear(); // 2025
const currentMonth = exampleDate.getMonth(); // 8 (septiembre)

// Función para crear fecha con hora específica
const createDate = (
  year: number,
  month: number,
  day: number,
  hours: number = 0,
  minutes: number = 0
): Date => {
  return new Date(year, month, day, hours, minutes);
};

// Colores para los eventos
const eventColors = {
  blue: '#3788d8',
  green: '#2ecc71',
  orange: '#f39c12',
  red: '#e74c3c',
  purple: '#9b59b6'
};

// Datos de ejemplo para el calendario
export const calendarEvents: Event[] = [
  {
    id: 1,
    title: 'Feria Agropecuaria',
    description:
      'Exhibición de productos y servicios agrícolas con demostraciones en vivo.',
    startDate: createDate(currentYear, currentMonth, 15, 9, 0),
    endDate: createDate(currentYear, currentMonth, 17, 18, 0),
    location: 'Centro de Convenciones, Madrid',
    color: eventColors.blue
  },
  {
    id: 2,
    title: 'Curso de Agricultura Sostenible',
    description:
      'Aprenda técnicas modernas para una agricultura más sostenible y eficiente.',
    startDate: createDate(currentYear, currentMonth, 5, 10, 0),
    endDate: createDate(currentYear, currentMonth, 5, 16, 30),
    location: 'Sede IAGROS',
    color: eventColors.green
  },
  {
    id: 3,
    title: 'Reunión con Productores',
    description:
      'Encuentro para discutir los nuevos retos del sector agrícola.',
    startDate: createDate(currentYear, currentMonth, 10, 15, 0),
    endDate: createDate(currentYear, currentMonth, 10, 17, 0),
    location: null,
    color: eventColors.orange
  },
  {
    id: 4,
    title: 'Seminario de Innovación Agrícola',
    description:
      'Presentación de las últimas tecnologías y métodos para el sector agrícola.',
    startDate: createDate(currentYear, currentMonth + 1, 3, 9, 0),
    endDate: createDate(currentYear, currentMonth + 1, 3, 18, 0),
    location: 'Universidad Agraria de Madrid',
    color: eventColors.purple
  },
  {
    id: 5,
    title: 'Taller de Riego Eficiente',
    description: 'Técnicas para optimizar el uso del agua en cultivos.',
    startDate: createDate(currentYear, currentMonth, 20, 10, 0),
    endDate: createDate(currentYear, currentMonth, 20, 14, 0),
    location: 'Centro de Formación Agrícola',
    color: eventColors.blue
  },
  {
    id: 6,
    title: 'Visita a Granjas Modelo',
    description:
      'Recorrido por granjas que implementan prácticas sostenibles y eficientes.',
    startDate: createDate(currentYear, currentMonth, 25, 8, 30),
    endDate: createDate(currentYear, currentMonth, 25, 16, 30),
    location: 'Varias localizaciones, Provincia de Madrid',
    color: eventColors.green
  },
  {
    id: 7,
    title: 'Conferencia sobre Cultivos Orgánicos',
    description:
      'Expertos comparten conocimientos sobre agricultura orgánica y sus beneficios.',
    startDate: createDate(currentYear, currentMonth + 1, 10, 9, 0),
    endDate: createDate(currentYear, currentMonth + 1, 11, 18, 0),
    location: 'Hotel Meliá, Madrid',
    color: eventColors.red
  }
];
