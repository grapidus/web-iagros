import styled from 'styled-components';
import { device } from '../../../../../../constants/breakpoints';

export const EventBar = styled.div<{
  color: string;
  isStart?: boolean;
  isEnd?: boolean;
  isMiddle?: boolean;
}>`
  height: auto; /* Altura automática para adaptarse al contenido */
  min-height: 16px; /* Altura reducida para móviles */
  font-size: 9px; /* Texto más pequeño para móviles */
  line-height: 1.2; /* Líneas más juntas en móvil */
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: ${(props) => props.color || '#4a90e2'};
  color: white;
  padding: 2px 4px; /* Padding reducido para móviles */

  @media ${device.sm} {
    min-height: 18px;
    font-size: 10px;
    line-height: 1.3;
    padding: 2px 5px;
  }

  @media ${device.md} {
    min-height: 20px;
    font-size: 11px;
    line-height: 1.3;
    padding: 3px 6px;
  }

  @media ${device.lg} {
    min-height: 24px;
    font-size: 12px;
    line-height: 1.4;
    padding: 4px 8px;
  }
  border-radius: ${(props) => {
    if (props.isStart && props.isEnd) return '12px';
    if (props.isStart) return '12px 0 0 12px';
    if (props.isEnd) return '0 12px 12px 0';
    return '0';
  }};
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25); /* Sombra más pronunciada */
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.6); /* Mejor legibilidad del texto */
  margin-bottom: 4px; /* Más espacio entre eventos */

  &:hover {
    filter: brightness(110%);
  }
`;

export const EventContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;
