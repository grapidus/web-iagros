import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  70% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
`;

export const FloatingButton = styled.a`
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  width: 56px;
  height: 56px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  animation: ${pulse} 2s infinite;
  transition: transform 0.2s ease, background-color 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    background-color: #1ebe57;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: white;
  }
`;
