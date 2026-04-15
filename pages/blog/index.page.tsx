import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useBlogStore } from './store/useBlogStore';
import BlogCard from './components/BlogCard/BlogCard';
import BlogEmptyState from './components/BlogEmptyState/BlogEmptyState';
import BlogFilters from './components/BlogFilters/BlogFilters';
import BlogSearch from './components/BlogSearch/BlogSearch';
import BlogSkeleton from './components/BlogSkeleton/BlogSkeleton';
import { useBlogList } from './hooks/useBlogList';
import {
  BlogEyebrow,
  BlogGrid,
  BlogHero,
  BlogHeroInner,
  BlogHeroSubtitle,
  BlogHeroTitle,
  BlogMain,
  BlogPage,
  ControlsBar,
  ControlsInner,
  PageButton,
  PaginationRow,
  ResultsCount,
} from './styles/Blog.styles';

const BlogListPage: React.FC = () => {
  const { page, setPage } = useBlogStore();
  const { blogs, total, totalPages, isLoading, isFetching, isError } = useBlogList();

  const showSkeleton = isLoading || isFetching;

  return (
    <Layout>
      <BlogPage>
        {/* ── Hero ── */}
        <BlogHero>
          <BlogHeroInner>
            <BlogEyebrow>Conocimiento del campo</BlogEyebrow>
            <BlogHeroTitle>Blog & Noticias</BlogHeroTitle>
            <BlogHeroSubtitle>
              Artículos técnicos, novedades del sector y experiencias reales
              de productores para impulsar tu actividad agrícola.
            </BlogHeroSubtitle>
          </BlogHeroInner>
        </BlogHero>

        {/* ── Barra de controles sticky ── */}
        <ControlsBar>
          <ControlsInner>
            <BlogSearch />
            <BlogFilters />
          </ControlsInner>
        </ControlsBar>

        {/* ── Contenido ── */}
        <BlogMain>
          {isError ? (
            <BlogEmptyState />
          ) : (
            <>
              {!isLoading && !isFetching && (
                <ResultsCount>
                  {total === 0
                    ? 'Sin resultados'
                    : `${total} artículo${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}`}
                </ResultsCount>
              )}

              <BlogGrid>
                {showSkeleton ? (
                  <BlogSkeleton count={9} />
                ) : blogs.length === 0 ? (
                  // EmptyState ocupa el ancho completo del grid
                  <div style={{ gridColumn: '1 / -1' }}>
                    <BlogEmptyState />
                  </div>
                ) : (
                  blogs.map((blog, index) => (
                    <BlogCard key={blog.id} blog={blog} isFeatured={index === 0} />
                  ))
                )}
              </BlogGrid>

              {/* ── Paginación ── */}
              {totalPages > 1 && (
                <PaginationRow>
                  <PageButton
                    onClick={() => setPage(page - 1)}
                    disabled={page <= 1}
                    aria-label="Página anterior"
                  >
                    ‹
                  </PageButton>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <PageButton
                      key={p}
                      $active={p === page}
                      onClick={() => setPage(p)}
                      aria-label={`Ir a página ${p}`}
                      aria-current={p === page ? 'page' : undefined}
                    >
                      {p}
                    </PageButton>
                  ))}

                  <PageButton
                    onClick={() => setPage(page + 1)}
                    disabled={page >= totalPages}
                    aria-label="Página siguiente"
                  >
                    ›
                  </PageButton>
                </PaginationRow>
              )}
            </>
          )}
        </BlogMain>
      </BlogPage>
    </Layout>
  );
};

export default BlogListPage;
