import { ArrowLeft, Calendar, Clock, ExternalLink, Link2 } from 'lucide-react';
import React, { useState } from 'react';
import Layout from '../../../components/Layout/Layout';
import { getAssetPath } from '../../../utils/getAssetPath';
import { useGetBlogsQuery } from '../api/blogApi';
import BlogCard from '../components/BlogCard/BlogCard';
import { useBlogDetail } from './hooks/useBlogDetail';
import { useReadingProgress } from './hooks/useReadingProgress';
import {
  AuthorAvatar,
  AuthorCard,
  AuthorInfo,
  AuthorName,
  AuthorRole,
  BackButton,
  CopyBtn,
  ErrorWrapper,
  MetaDot,
  PostBody,
  PostCategory,
  PostContent,
  PostDivider,
  PostHero,
  PostHeroContent,
  PostLayout,
  PostMeta,
  PostMetaItem,
  PostPage,
  PostSidebar,
  PostSkeletonHero,
  PostTitle,
  ReadingProgressBar,
  RelatedGrid,
  RelatedHeader,
  RelatedInner,
  RelatedLink,
  RelatedSection,
  RelatedTitle,
  ShareBtn,
  ShareInline,
  ShareLabel,
  ShareRow,
  SidebarCopyBtn,
  SidebarShareBtn,
  SidebarShareCol,
  SidebarTitle,
  SidebarWidget
} from './styles/BlogPost.styles';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

const SOCIAL_NETWORKS = [
  {
    label: 'YouTube',
    img: getAssetPath('/images/social/youtube.png'),
    color: '#FF0000',
    href: 'https://www.youtube.com/@iagrocolombia8729'
  },
  {
    label: 'Instagram',
    img: getAssetPath('/images/social/instagram.png'),
    color: '#E1306C',
    href: 'https://www.instagram.com/iagros.co/'
  },
  {
    label: 'Facebook',
    img: getAssetPath('/images/social/facebook.png'),
    color: '#1877F2',
    href: 'https://www.facebook.com/iagrosglobal'
  },
  {
    label: 'TikTok',
    img: getAssetPath('/images/social/tiktok.png'),
    color: '#010101',
    href: 'https://www.tiktok.com/@iagroglobal'
  }
];

const BlogPostPage: React.FC = () => {
  const { blog, isLoading, isError } = useBlogDetail();
  const progress = useReadingProgress();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [copied, setCopied] = useState(false);

  const { data: relatedData } = useGetBlogsQuery(
    { category: blog?.categorySlug, pageSize: 4 },
    { skip: !blog }
  );
  const relatedBlogs = (relatedData?.data ?? [])
    .filter((b) => b.id !== blog?.id)
    .slice(0, 3);

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pageTitle = blog?.title ?? 'IAGROS Blog';

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(pageUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <Layout>
      <ReadingProgressBar $progress={progress} />
      <PostPage>
        {/* ── Hero ── */}
        {isLoading ? (
          <PostSkeletonHero />
        ) : blog ? (
          <PostHero>
            <img src={blog.thumbnail} alt={blog.title} />
            <PostHeroContent>
              <PostCategory $color={blog.categorySlug}>
                {blog.category}
              </PostCategory>
              <PostTitle>{blog.title}</PostTitle>
              <PostMeta>
                <PostMetaItem>
                  <Calendar size={13} />
                  {formatDate(blog.publishedAt)}
                </PostMetaItem>
                <>
                  <MetaDot />
                  <PostMetaItem>Equipo IAGROS</PostMetaItem>
                </>
                <MetaDot />
                <PostMetaItem>
                  <Clock size={13} />
                  Lectura rápida
                </PostMetaItem>
              </PostMeta>
            </PostHeroContent>
          </PostHero>
        ) : null}

        {/* ── Article layout + Sidebar ── */}
        <PostLayout>
          <PostBody>
            <BackButton href={`${basePath}/blog/`}>
              <ArrowLeft size={15} />
              Volver al blog
            </BackButton>

            {isError || (!isLoading && !blog) ? (
              <ErrorWrapper>
                <h2>Artículo no encontrado</h2>
                <p>El artículo que buscas no existe o fue eliminado.</p>
              </ErrorWrapper>
            ) : isLoading ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                {[100, 85, 95, 70, 90, 60, 80, 75].map((w, i) => (
                  <div
                    key={i}
                    style={{
                      height: i === 0 ? '28px' : '16px',
                      width: `${w}%`,
                      background: '#e8ede9',
                      borderRadius: '6px'
                    }}
                  />
                ))}
              </div>
            ) : blog ? (
              <>
                <PostContent
                  dangerouslySetInnerHTML={{ __html: blog.content ?? '' }}
                />

                <PostDivider />

                {/* Share inline — visible solo en mobile */}
                <ShareInline>
                  <ShareLabel>Síguenos en redes</ShareLabel>
                  <ShareRow>
                    {SOCIAL_NETWORKS.map((net) => (
                      <ShareBtn
                        key={net.label}
                        href={net.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        $color={net.color}
                        aria-label={net.label}
                      >
                        <img
                          src={net.img}
                          alt={net.label}
                          width={18}
                          height={18}
                          style={{ objectFit: 'contain' }}
                        />
                        {net.label}
                      </ShareBtn>
                    ))}
                    <CopyBtn onClick={handleCopy} aria-label="Copiar enlace">
                      <Link2 size={14} />
                      {copied ? '¡Copiado!' : 'Copiar enlace'}
                    </CopyBtn>
                  </ShareRow>
                </ShareInline>

                {/* Author card */}
                <AuthorCard
                  href={`mailto:iagro@iagros.com?subject=${encodeURIComponent(`Pregunta sobre: ${pageTitle}`)}&body=${encodeURIComponent(`Hola equipo IAGROS,\n\nTengo una pregunta sobre el artículo "${pageTitle}":\n\n`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AuthorAvatar>
                    <img
                      src={getAssetPath('/images/logos/logo-solo.png')}
                      alt="IAGROS"
                    />
                  </AuthorAvatar>
                  <AuthorInfo>
                    <AuthorName>Equipo IAGROS</AuthorName>
                    <AuthorRole>
                      ¿Tienes dudas sobre este artículo? Escríbenos
                    </AuthorRole>
                  </AuthorInfo>
                  <ExternalLink size={16} color="#c0ccc4" />
                </AuthorCard>
              </>
            ) : null}
          </PostBody>

          {/* ── Sidebar (desktop only) ── */}
          <PostSidebar>
            <SidebarWidget>
              <SidebarTitle>Síguenos en redes</SidebarTitle>
              <SidebarShareCol>
                {SOCIAL_NETWORKS.map((net) => (
                  <SidebarShareBtn
                    key={net.label}
                    href={net.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    $color={net.color}
                    aria-label={net.label}
                  >
                    <img
                      src={net.img}
                      alt={net.label}
                      width={18}
                      height={18}
                      style={{ objectFit: 'contain' }}
                    />
                    {net.label}
                  </SidebarShareBtn>
                ))}
                <SidebarCopyBtn onClick={handleCopy} aria-label="Copiar enlace">
                  <Link2 size={14} />
                  {copied ? '¡Enlace copiado!' : 'Copiar enlace'}
                </SidebarCopyBtn>
              </SidebarShareCol>
            </SidebarWidget>

            {blog && (
              <SidebarWidget>
                <SidebarTitle>Categoría</SidebarTitle>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 0.9rem',
                    background: 'rgba(238,112,7,0.08)',
                    border: '1px solid rgba(238,112,7,0.2)',
                    borderRadius: '100px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#ee7007'
                  }}
                >
                  {blog.category}
                </div>
              </SidebarWidget>
            )}
          </PostSidebar>
        </PostLayout>

        {/* ── Related posts ── */}
        {relatedBlogs.length > 0 && (
          <RelatedSection>
            <RelatedInner>
              <RelatedHeader>
                <RelatedTitle>Artículos relacionados</RelatedTitle>
                <RelatedLink href={`${basePath}/blog/`}>
                  Ver todos →
                </RelatedLink>
              </RelatedHeader>
              <RelatedGrid>
                {relatedBlogs.map((b) => (
                  <BlogCard key={b.id} blog={b} />
                ))}
              </RelatedGrid>
            </RelatedInner>
          </RelatedSection>
        )}
      </PostPage>
    </Layout>
  );
};

export default BlogPostPage;
