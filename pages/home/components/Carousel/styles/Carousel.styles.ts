import styled, { css, keyframes } from 'styled-components';
import { device } from '../../../../../constants/breakpoints';

export const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: clamp(34px, 5vw, 64px);
    background: linear-gradient(
      180deg,
      rgba(245, 245, 245, 0) 0%,
      rgba(245, 245, 245, 0.85) 72%,
      rgba(245, 245, 245, 1) 100%
    );
    pointer-events: none;
    z-index: 6;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const CarouselSlide = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 100%;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.45s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${fadeIn} 0.8s ease forwards;
    `}
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-height: 80vh;
  object-fit: cover;
  object-position: center;
`;

export const CarouselOverlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
`;

export const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 clamp(0.5rem, 2vw, 2rem);
  transform: translateY(-50%);
  z-index: 10;
`;

export const ControlButton = styled.button`
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: clamp(34px, 4.2vw, 50px);
  height: clamp(34px, 4.2vw, 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: clamp(16px, 2vw, 24px);
    height: clamp(16px, 2vw, 24px);
  }
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: clamp(1.2rem, 2.4vw, 1.8rem);
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  z-index: 5;
`;

export const CarouselDot = styled.button<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ffffff;
    transform: scale(1.2);
  }

  @media ${device.md} {
    width: 12px;
    height: 12px;
  }
`;
