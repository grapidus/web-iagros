import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterPill = styled.button<{ $active: boolean; $color?: string }>`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.42rem 1rem;
  border-radius: 100px;
  border: 1.5px solid ${({ $active, $color }) => ($active ? ($color || '#ee7007') : 'rgba(28,46,35,0.15)')};
  background: ${({ $active, $color }) => ($active ? ($color || '#ee7007') : 'transparent')};
  color: ${({ $active, $color }) => ($active ? '#ffffff' : '#3f5648')};
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.18s ease;

  &:hover:not([aria-pressed="true"]) {
    border-color: ${({ $color }) => $color || '#ee7007'};
    color: ${({ $color }) => $color || '#ee7007'};
  }
`;

export const FilterDot = styled.span<{ $color: string }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;
