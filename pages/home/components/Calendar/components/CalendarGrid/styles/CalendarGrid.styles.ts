import styled from 'styled-components';
import { device } from '../../../../../../../constants/breakpoints';

export const CalendarGridContainer = styled.div`
  flex: 1;
  padding: 5px;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  min-height: auto; /* Permitimos que se ajuste al contenido */

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
    padding: 5px 0;
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

export const PrevMonthIcon = styled.span`
  vertical-align: middle;
  margin-right: 2px;
  font-size: 0.8em;
  opacity: 0.5;
  display: inline-flex;
  align-items: center;
`;

export const NextMonthIcon = styled.span`
  vertical-align: middle;
  margin-right: 2px;
  font-size: 0.8em;
  opacity: 0.5;
  display: inline-flex;
  align-items: center;
`;

export const TodayIcon = styled.span`
  vertical-align: middle;
  margin-right: 2px;
  color: #4a90e2;
  display: inline-flex;
  align-items: center;
`;

export const EventEndIcon = styled.span`
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
`;

export const MoreEventsIcon = styled.span`
  vertical-align: middle;
  margin-right: 2px;
  display: inline-flex;
  align-items: center;
`;
