import styled from 'styled-components';
import { device } from '../../../../constants/breakpoints';

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 0;

  @media ${device.md} {
    max-width: 380px;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: #7a8c82;
  pointer-events: none;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1.5px solid rgba(28, 46, 35, 0.2);
  padding: 0.5rem 2rem 0.5rem 1.75rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #1c2e23;
  outline: none;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: #9aad9f;
  }

  &:focus {
    border-bottom-color: #ee7007;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #9aad9f;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  transition: color 0.2s ease;

  &:hover {
    color: #1c2e23;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
