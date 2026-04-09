import styled from 'styled-components';
import { device } from '../../../../../constants/breakpoints';

export const CalendarSection = styled.section`
  width: 100%;
  max-width: 100vw;
  padding: clamp(4rem, 8vw, 7rem) 0 clamp(4rem, 8vw, 7rem);
  background-color: #f0ede8;
  overflow-x: hidden;
  box-sizing: border-box;
`;

export const CalendarHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3.5rem);
  padding: 0 clamp(1.25rem, 4vw, 3rem);
`;

export const CalendarEyebrow = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #ee7007;
  margin-bottom: 0.75rem;
`;

export const CalendarTitle = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  margin-bottom: 0.65rem;
  color: #1e1c19;
  font-weight: 600;
  line-height: 1.18;
`;

export const CalendarSubtitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: #7a766e;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
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
