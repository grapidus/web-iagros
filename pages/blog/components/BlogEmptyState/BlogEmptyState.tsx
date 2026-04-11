import React from 'react';
import styled from 'styled-components';
import { useBlogStore } from '../../store/useBlogStore';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: clamp(3rem, 8vw, 6rem) 1rem;
  gap: 1rem;
`;

const Icon = styled.div`
  font-size: 3rem;
  opacity: 0.4;
`;

const Title = styled.p`
  font-family: 'Fraunces', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #1c2e23;
  margin: 0;
`;

const Subtitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #7a8c82;
  margin: 0;
  max-width: 36ch;
`;

const ResetButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.6rem 1.5rem;
  border-radius: 100px;
  border: 1.5px solid #ee7007;
  background: transparent;
  color: #ee7007;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ee7007;
    color: #ffffff;
  }
`;

const BlogEmptyState: React.FC = () => {
  const { reset, search, category } = useBlogStore();
  const hasFilters = search || category !== 'all';

  return (
    <Wrapper>
      <Icon>🌱</Icon>
      <Title>No encontramos artículos</Title>
      <Subtitle>
        {hasFilters
          ? 'Intenta con otros términos o cambia el filtro de categoría.'
          : 'Aún no hay artículos publicados. Vuelve pronto.'}
      </Subtitle>
      {hasFilters && (
        <ResetButton onClick={reset}>Limpiar filtros</ResetButton>
      )}
    </Wrapper>
  );
};

export default BlogEmptyState;
