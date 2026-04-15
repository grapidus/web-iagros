import React from 'react';
import { useBlogStore } from '../../store/useBlogStore';
import { useBlogCategories } from '../../hooks/useBlogCategories';
import { FilterDot, FilterPill, FiltersWrapper } from './BlogFilters.styles';

const CATEGORY_COLORS: Record<string, string> = {
  all:        '#1c2e23',
  agricola:   '#2e7d32',
  pecuario:   '#8b4513',
  tecnologia: '#ee7007',
};

const DEFAULT_COLOR = '#ee7007';

const BlogFilters: React.FC = () => {
  const { category, setCategory } = useBlogStore();
  const { categories } = useBlogCategories();

  return (
    <FiltersWrapper role="group" aria-label="Filtrar por categoría">
      {categories.map((cat) => {
        const isActive = category === cat.value;
        const color = CATEGORY_COLORS[cat.value] ?? DEFAULT_COLOR;
        return (
          <FilterPill
            key={cat.id}
            $active={isActive}
            $color={color}
            aria-pressed={isActive}
            onClick={() => setCategory(cat.value)}
          >
            {cat.value !== 'all' && (
              <FilterDot $color={isActive ? 'rgba(255,255,255,0.8)' : color} />
            )}
            {cat.name}
          </FilterPill>
        );
      })}
    </FiltersWrapper>
  );
};

export default BlogFilters;
