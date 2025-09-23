import styled from 'styled-components';

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
