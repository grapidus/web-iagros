import styled from 'styled-components';
import { device, size } from '../../../../../../../constants/breakpoints';

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
    max-height: none;
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
