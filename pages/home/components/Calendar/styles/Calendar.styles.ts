import styled from 'styled-components';
import { device } from '../../../../../constants/breakpoints';

export const CalendarSection = styled.section`
  width: 100%;
  max-width: 100vw;
  padding: 60px 0 80px 0;
  background-color: #f8f8f8;
  overflow-x: hidden;
  box-sizing: border-box;
  min-height: auto;

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
  padding: 0 5px 30px 5px; /* Añadimos padding inferior */
  box-sizing: border-box;
  overflow-x: hidden;

  @media ${device.sm} {
    padding: 0 8px 30px 8px;
  }

  @media ${device.md} {
    padding: 0 15px 40px 15px;
  }

  @media ${device.lg} {
    padding: 0 20px 50px 20px;
  }
`;

export const CalendarWrapper = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px; /* Espacio adicional en la parte inferior */
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
  min-height: auto;

  @media ${device.md} {
    flex-direction: row;

    & > div:first-child {
      flex: 1;
      width: 0;
    }
  }
`;
