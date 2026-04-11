import React from 'react';
import { useBlogStore } from '../../store/useBlogStore';
import { ClearButton, SearchIcon, SearchInput, SearchWrapper } from './BlogSearch.styles';

const BlogSearch: React.FC = () => {
  const { search, setSearch } = useBlogStore();

  return (
    <SearchWrapper>
      <SearchIcon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </SearchIcon>

      <SearchInput
        type="text"
        placeholder="Buscar artículos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Buscar artículos del blog"
      />

      {search && (
        <ClearButton onClick={() => setSearch('')} aria-label="Limpiar búsqueda">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </ClearButton>
      )}
    </SearchWrapper>
  );
};

export default BlogSearch;
