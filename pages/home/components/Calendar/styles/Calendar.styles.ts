import styled from 'styled-components';
import { device, size } from '../../../../../constants/breakpoints';

export const CalendarSection = styled.section`
  width: 100%;
  max-width: 100vw;
  padding: 60px 0;
  background-color: #f8f8f8;
  overflow-x: hidden;
  box-sizing: border-box;

  .calendar-header-text {
    text-align: center;
    margin-bottom: 40px;
    padding: 0 15px;

    h2 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 10px;
      font-weight: 700;
    }

    p {
      font-size: 1rem;
      color: #666;
    }
  }
`;

export const CalendarContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media ${device.sm} {
    padding: 0 8px;
  }

  @media ${device.md} {
    padding: 0 15px;
  }

  @media ${device.lg} {
    padding: 0 20px;
  }
`;

export const CalendarWrapper = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CalendarContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  transition: all 0.3s ease;

  @media ${device.md} {
    flex-direction: row;

    & > div:first-child {
      flex: 1;
      width: 0;
    }
  }
`;

export const CalendarHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #4a90e2;
  color: white;
`;

export const MonthYearDisplay = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const CalendarControls = styled.div`
  display: flex;
  gap: 10px;

  button {
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 5px;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .today-btn {
    font-size: 0.9rem;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 5px 10px;
  }
`;

export const CalendarGridContainer = styled.div`
  flex: 1;
  padding: 5px;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;

  @media ${device.sm} {
    padding: 8px;
  }

  @media ${device.md} {
    padding: 10px;
    border-right: 1px solid #eee;
  }

  @media ${device.lg} {
    padding: 15px;
  }

  @media (min-width: 1400px) {
    min-height: 800px;
  }

  @media (max-width: ${device.md}) {
    min-height: 500px;
  }

  @media (max-width: ${device.sm}) {
    min-height: 400px;
  }
`;

export const WeekdaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); 
  gap: 4px; 
  margin-bottom: 10px; 
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden; 

  .weekday {
    text-align: center;
    font-weight: bold;
    padding: 5px 0; /
    color: #444;
    font-size: 0.65rem; 
    text-transform: uppercase;
    letter-spacing: 0; 
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${device.sm} {
    gap: 6px;
    margin-bottom: 12px;

    .weekday {
      font-size: 0.8rem;
      letter-spacing: 0.5px;
      padding: 8px 0;
    }
  }

  @media ${device.md} {
    gap: 8px;
    margin-bottom: 15px;

    .weekday {
      font-size: 0.9rem;
      letter-spacing: 0.8px;
      padding: 10px 0;
    }
  }

  @media ${device.lg} {
    gap: 10px;

    .weekday {
      font-size: 1rem;
      letter-spacing: 1px;
      padding: 12px 0;
    }
  }

  @media (min-width: 1400px) {
    gap: 15px;

    .weekday {
      font-size: 1.2rem; /* Aún más grande en pantallas muy grandes */
      padding: 15px 0;
    }
  }
`;

// Esta configuración de grid debe ser exactamente igual en DaysGrid y en EventsRow
export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    7,
    1fr
  ); /* Usamos fracciones iguales sin ancho mínimo */
  gap: 4px; /* Gap pequeño para móviles */
  position: relative;
  box-sizing: border-box;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* Evitamos desbordamiento horizontal */

  @media ${device.sm} {
    gap: 6px;
  }

  @media ${device.md} {
    gap: 8px;
  }

  @media ${device.lg} {
    gap: 10px;
  }

  @media (min-width: 1400px) {
    gap: 15px; /* Aún más espacio en pantallas muy grandes */
  }
`;

export const DayCell = styled.div<{
  isCurrentMonth?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
  hasEvents?: boolean;
}>`
  position: relative;
  height: 0;
  padding-bottom: 95%; /* Ligeramente menos alto para móviles */
  border: 1px solid #eee;
  border-radius: 4px; /* Bordes menos redondeados para móviles */
  box-sizing: border-box;
  overflow: hidden;

  @media ${device.sm} {
    padding-bottom: 100%;
    border-radius: 6px;
  }

  @media ${device.md} {
    padding-bottom: 100%;
    border-radius: 8px;
  }
  background-color: ${(props) =>
    props.isSelected ? '#e3f2fd' : props.isToday ? '#f5f5f5' : 'white'};
  opacity: ${(props) => (props.isCurrentMonth ? 1 : 0.5)};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${(props) =>
    props.hasEvents
      ? '0 2px 8px rgba(0,0,0,0.1)'
      : 'none'}; /* Sombra suave para días con eventos */

  &:hover {
    background-color: #f0f7ff;
    transform: translateY(-2px); /* Efecto de elevación al pasar el mouse */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  .day-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 4px; /* Padding reducido para móviles */
    overflow: visible; /* Para que los eventos puedan sobresalir */

    @media ${device.sm} {
      padding: 6px; /* Incrementamos para tablets */
    }

    @media ${device.md} {
      padding: 8px; /* Incrementamos para escritorio */
    }

    @media ${device.lg} {
      padding: 10px; /* Mayor padding para pantallas grandes */
    }
  }

  .day-number {
    text-align: center;
    font-weight: ${(props) => (props.isToday ? 'bold' : 'normal')};
    margin-bottom: 4px; /* Menos espacio en móvil */
    font-size: 0.9rem; /* Número más pequeño en móvil */
    color: ${(props) =>
      props.isToday ? '#4a90e2' : '#333'}; /* Color destacado para hoy */

    @media ${device.sm} {
      margin-bottom: 6px;
      font-size: 0.95rem;
    }

    @media ${device.md} {
      margin-bottom: 8px;
      font-size: 1rem;
    }

    @media ${device.lg} {
      margin-bottom: 12px;
      font-size: 1.1rem;
    }
  }

  .events-container {
    flex: 1;
    overflow: visible; /* Para que los eventos se muestren completamente */
    display: flex;
    flex-direction: column;
    gap: 2px; /* Menos espacio entre eventos en móvil */

    @media ${device.sm} {
      gap: 3px;
    }

    @media ${device.md} {
      gap: 4px;
    }

    @media ${device.lg} {
      gap: 6px; /* Más espacio entre eventos en escritorio */
    }
  }

  .more-events {
    font-size: 9px; /* Texto más pequeño en móvil */
    color: #666;
    text-align: center;
    margin-top: 2px;
    background: #f2f2f2;
    border-radius: 2px; /* Bordes menos redondeados en móvil */
    padding: 1px 2px; /* Menos padding en móvil */

    @media ${device.sm} {
      font-size: 9.5px;
      border-radius: 3px;
      padding: 2px;
      margin-top: 2px;
    }

    @media ${device.md} {
      font-size: 10px;
      border-radius: 3px;
      padding: 2px;
      margin-top: 3px;
    }

    @media ${device.lg} {
      font-size: 11px;
      border-radius: 4px;
      padding: 3px;
      margin-top: 3px;
    }
  }
`;

export const EventListContainer = styled.div`
  flex: 0 0 300px;
  padding: 20px;
  background-color: #fafafa;
  max-height: 100%; /* Usamos 100% para que ocupe todo el espacio disponible en desktop */
  height: auto;
  overflow-y: auto;
  border-radius: 0 0 15px 0;

  /* Estilos para la barra de desplazamiento */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Pantallas pequeñas (móviles) */
  @media (max-width: ${size.md - 1}px) {
    flex: 1;
    margin-top: 0;
    height: auto;
    max-height: none; /* Quitamos la altura máxima fija */
    border-radius: 0 0 15px 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  /* Pantallas medianas */
  @media ${device.md} {
    max-height: 600px;
  }

  /* Pantallas grandes */
  @media ${device.lg} {
    max-height: 700px;
  }

  /* Pantallas muy grandes */
  @media ${device.xl} {
    max-height: 800px;
  }
`;

export const EventListHeader = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 18px;
  color: #333;
  padding-bottom: 10px;
  padding-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  position: sticky;
  top: 0;
  background-color: #fafafa;
  z-index: 5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);

  .no-date {
    font-size: 0.95rem;
    color: #666;
    font-weight: normal;
    font-style: italic;
  }

  @media (max-width: ${size.md - 1}px) {
    font-size: 1.15rem;
    margin-bottom: 15px;
    padding-bottom: 8px;
  }
`;

export const EventItem = styled.div<{ color?: string }>`
  margin-bottom: 15px;
  padding: 12px;
  border-radius: 8px;
  background-color: #fff;
  border-left: 4px solid ${(props) => props.color || '#4a90e2'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  h4 {
    margin: 0 0 8px;
    color: #333;
    font-size: 1.05rem;
  }

  p {
    margin: 0;
    font-size: 0.92rem;
    color: #555;
    line-height: 1.4;
    word-wrap: break-word;
  }

  .event-date {
    display: block;
    font-size: 0.85rem;
    color: #777;
    margin-top: 8px;
    font-weight: 500;
  }

  .event-location {
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    color: #555;
    margin-top: 6px;

    svg {
      margin-right: 6px;
      color: #666;
    }
  }

  @media ${device.md} {
    padding: 15px;

    h4 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

export const NoEventsMessage = styled.div`
  color: #888;
  text-align: center;
  padding: 30px 15px;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  font-size: 0.95rem;
  margin: 20px 0;
  border: 1px dashed rgba(0, 0, 0, 0.1);
`;
