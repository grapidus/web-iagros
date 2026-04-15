import styled, { keyframes } from 'styled-components';
import { device } from '../../../../constants/breakpoints';

// ── Reading progress bar ────────────────────────────────────────────────────────

export const ReadingProgressBar = styled.div<{ $progress: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: ${({ $progress }) => $progress}%;
  background: linear-gradient(90deg, #ee7007, #f59e0b);
  z-index: 300;
  transition: width 0.1s linear;
  pointer-events: none;
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const PostPage = styled.div`
  min-height: 100vh;
  background-color: #fdfcfa;
`;

export const PostHero = styled.div`
  position: relative;
  width: 100%;
  height: clamp(260px, 40vw, 480px);
  overflow: hidden;
  background: #1c2e23;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.72;
  }
`;

export const PostHeroContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 4vw, 3rem);
  max-width: 1200px;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

export const PostCategory = styled.span<{ $color: string }>`
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  width: fit-content;
`;

export const PostTitle = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.6rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1rem;
  line-height: 1.15;
  max-width: 22ch;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const PostMetaItem = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

export const PostBody = styled.article`
  max-width: 740px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem);
  animation: ${fadeUp} 0.4s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const PostContent = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.08rem);
  line-height: 1.8;
  color: #2c3e31;

  h2 {
    font-family: 'Fraunces', serif;
    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    color: #1c2e23;
    margin: 2.5rem 0 1rem;
    line-height: 1.25;
  }

  h3 {
    font-family: 'Fraunces', serif;
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    color: #1c2e23;
    margin: 2rem 0 0.75rem;
  }

  p {
    margin: 0 0 1.5rem;
  }

  ul, ol {
    margin: 0 0 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: #1c2e23;
    font-weight: 600;
  }

  blockquote {
    margin: 2rem 0;
    padding: 1.25rem 1.5rem;
    border-left: 3px solid #ee7007;
    background: rgba(238, 112, 7, 0.04);
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: #3f5648;
  }
`;

export const BackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  color: #5a6e62;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.2s ease;

  &:hover {
    color: #ee7007;
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(-3px);
  }
`;

export const PostDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(28, 46, 35, 0.1);
  margin: 2.5rem 0;
`;

export const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: #f7f4ef;
  border-radius: 12px;
  margin-top: 2rem;
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1c2e23;
  margin: 0 0 0.2rem;
`;

export const AuthorRole = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #7a8c82;
  margin: 0;
`;

// ── Skeleton ────────────────────────────────────────────────────────────────────

const shimmer = keyframes`
  0%   { background-position: -800px 0; }
  100% { background-position: 800px 0; }
`;

export const PostSkeletonHero = styled.div`
  width: 100%;
  height: clamp(260px, 40vw, 480px);
  background: linear-gradient(90deg, #d8deda 25%, #c8d4cb 50%, #d8deda 75%);
  background-size: 1600px 100%;
  animation: ${shimmer} 1.6s ease infinite;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6rem 1rem;
  gap: 1rem;

  h2 {
    font-family: 'Fraunces', serif;
    font-size: 1.5rem;
    color: #1c2e23;
    margin: 0;
  }

  p {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    color: #7a8c82;
    margin: 0;
  }
`;

// ── Related posts ───────────────────────────────────────────────────────────────

export const RelatedSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 5rem);
`;

export const RelatedTitle = styled.h3`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 600;
  color: #1c2e23;
  margin: 0 0 1.75rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(28, 46, 35, 0.1);
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
