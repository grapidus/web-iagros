import React from 'react';
import { useBlogStore } from '../../store/useBlogStore';
import { FilterDot, FilterPill, FiltersWrapper } from './BlogFilters.styles';

const CATEGORIES = [
  { value: 'all',        label: 'Todos',      color: '#1c2e23', dot: '#1c2e23' },
  { value: 'agricola',   label: 'Agrícola',   color: '#2e7d32', dot: '#2e7d32' },
  { value: 'pecuario',   label: 'Pecuario',   color: '#8b4513', dot: '#8b4513' },
  { value: 'tecnologia', label: 'Tecnología', color: '#ee7007', dot: '#ee7007' },
] as const;

const BlogFilters: React.FC = () => {
  const { category, setCategory } = useBlogStore();

  return (
    <FiltersWrapper role="group" aria-label="Filtrar por categoría">
      {CATEGORIES.map((cat) => {
        const isActive = category === cat.value;
        return (
          <FilterPill
            key={cat.value}
            $active={isActive}
            $color={cat.color}
            aria-pressed={isActive}
            onClick={() => setCategory(cat.value as any)}
          >
            {cat.value !== 'all' && (
              <FilterDot $color={isActive ? 'rgba(255,255,255,0.8)' : cat.dot} />
            )}
            {cat.label}
          </FilterPill>
        );
      })}
    </FiltersWrapper>
  );
};

export default BlogFilters;

export { CATEGORIES };
