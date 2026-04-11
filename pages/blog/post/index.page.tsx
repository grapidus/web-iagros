import React from 'react';
import Layout from '../../../components/Layout/Layout';
import { useBlogDetail } from './hooks/useBlogDetail';
import {
  AuthorInfo,
  AuthorName,
  AuthorRole,
  AuthorSection,
  BackButton,
  ErrorWrapper,
  PostBody,
  PostCategory,
  PostContent,
  PostDivider,
  PostHero,
  PostHeroContent,
  PostMeta,
  PostMetaItem,
  PostPage,
  PostSkeletonHero,
  PostTitle,
} from './styles/BlogPost.styles';

const CATEGORY_LABELS: Record<string, string> = {
  agricola:   'Agrícola',
  pecuario:   'Pecuario',
  tecnologia: 'Tecnología',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const BlogPostPage: React.FC = () => {
  const { blog, isLoading, isError } = useBlogDetail();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <Layout>
      <PostPage>
        {/* ── Hero ── */}
        {isLoading ? (
          <PostSkeletonHero />
        ) : blog ? (
          <PostHero>
            <img src={blog.image} alt={blog.title} />
            <PostHeroContent>
              <PostCategory $color={blog.category}>
                {CATEGORY_LABELS[blog.category] ?? blog.category}
              </PostCategory>
              <PostTitle>{blog.title}</PostTitle>
              <PostMeta>
                <PostMetaItem>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {formatDate(blog.publishedAt)}
                </PostMetaItem>
                <PostMetaItem>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {blog.readingTime} min de lectura
                </PostMetaItem>
              </PostMeta>
            </PostHeroContent>
          </PostHero>
        ) : null}

        {/* ── Cuerpo ── */}
        <PostBody>
          <BackButton href={`${basePath}/blog/`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Volver al blog
          </BackButton>

          {isError || (!isLoading && !blog) ? (
            <ErrorWrapper>
              <h2>Artículo no encontrado</h2>
              <p>El artículo que buscas no existe o fue eliminado.</p>
            </ErrorWrapper>
          ) : isLoading ? (
            // Skeleton simple del cuerpo
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[100, 85, 95, 70, 90, 60].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: i === 0 ? '28px' : '16px',
                    width: `${w}%`,
                    background: '#e8ede9',
                    borderRadius: '6px',
                  }}
                />
              ))}
            </div>
          ) : blog ? (
            <>
              <PostContent dangerouslySetInnerHTML={{ __html: blog.content }} />

              <PostDivider />

              <AuthorSection>
                <AuthorInfo>
                  <AuthorName>{blog.author}</AuthorName>
                  <AuthorRole>Equipo AGROS</AuthorRole>
                </AuthorInfo>
              </AuthorSection>
            </>
          ) : null}
        </PostBody>
      </PostPage>
    </Layout>
  );
};

export default BlogPostPage;
