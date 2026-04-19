import styled, { keyframes, css } from 'styled-components';
import { device } from '../../../../constants/breakpoints';

// ── Animations ──────────────────────────────────────────────────────────────

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -800px 0; }
  100% { background-position: 800px 0; }
`;

const skeletonBg = css`
  background: linear-gradient(90deg, #d8deda 25%, #c8d4cb 50%, #d8deda 75%);
  background-size: 1600px 100%;
  animation: ${shimmer} 1.6s ease infinite;
`;

// ── Reading progress ─────────────────────────────────────────────────────────

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

// ── Page wrapper ─────────────────────────────────────────────────────────────

export const PostPage = styled.div`
  min-height: 100vh;
  background: #fdfcfa;
`;

// ── Hero ─────────────────────────────────────────────────────────────────────

export const PostHero = styled.div`
  position: relative;
  width: 100%;
  height: clamp(320px, 50vw, 580px);
  overflow: hidden;
  background: #1c2e23;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.55;
    transform: scale(1.03);
    transition: transform 8s ease;
  }

  /* Gradient overlay — strong at bottom */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.1) 40%,
      rgba(10, 20, 14, 0.85) 100%
    );
  }
`;

export const PostHeroContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 5vw, 4rem);
  max-width: 1100px;
  margin: 0 auto;
  left: 0;
  right: 0;
  animation: ${fadeUp} 0.6s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const PostCategory = styled.span<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.9rem;
  border-radius: 100px;
  background: rgba(238, 112, 7, 0.9);
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  width: fit-content;
`;

export const PostTitle = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.7rem, 4.5vw, 3.2rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1.25rem;
  line-height: 1.12;
  max-width: 26ch;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
`;

export const PostMetaItem = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const MetaDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
`;

// ── Layout: article + sidebar ────────────────────────────────────────────────

export const PostLayout = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 2rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  align-items: start;

  @media ${device.lg} {
    grid-template-columns: minmax(0, 1fr) 280px;
    gap: 3rem;
  }
`;

// ── Article body ─────────────────────────────────────────────────────────────

export const PostBody = styled.article`
  padding: clamp(2rem, 4vw, 3.5rem) 0;
  animation: ${fadeUp} 0.5s 0.1s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

export const BackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #7a8c82;
  text-decoration: none;
  margin-bottom: 2.5rem;
  transition: color 0.2s ease;
  cursor: pointer;

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

export const PostContent = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 1.4vw, 1.08rem);
  line-height: 1.85;
  color: #2c3e31;

  h2 {
    font-family: 'Fraunces', serif;
    font-size: clamp(1.3rem, 2.5vw, 1.75rem);
    color: #1c2e23;
    margin: 2.75rem 0 1rem;
    line-height: 1.25;
  }

  h3 {
    font-family: 'Fraunces', serif;
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    color: #1c2e23;
    margin: 2.25rem 0 0.75rem;
  }

  p {
    margin: 0 0 1.6rem;
  }

  ul, ol {
    margin: 0 0 1.6rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.6rem;
  }

  strong {
    color: #1c2e23;
    font-weight: 600;
  }

  a {
    color: #ee7007;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin: 1.5rem 0;
  }

  blockquote {
    margin: 2.5rem 0;
    padding: 1.25rem 1.75rem;
    border-left: 3px solid #ee7007;
    background: rgba(238, 112, 7, 0.04);
    border-radius: 0 10px 10px 0;
    font-style: italic;
    color: #3f5648;
    font-size: 1.05em;
  }

  code {
    background: #f0f4f1;
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-size: 0.88em;
    color: #1c2e23;
  }

  hr {
    border: none;
    border-top: 1px solid rgba(28, 46, 35, 0.1);
    margin: 2.5rem 0;
  }
`;

export const PostDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(28, 46, 35, 0.1);
  margin: 3rem 0;
`;

// ── Share inline (below content, mobile) ─────────────────────────────────────

export const ShareInline = styled.div`
  margin-bottom: 2.5rem;

  @media ${device.lg} {
    display: none;
  }
`;

export const ShareLabel = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: #7a8c82;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.75rem;
`;

export const ShareRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

interface ShareBtnProps {
  $color: string;
}

export const ShareBtn = styled.a<ShareBtnProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: ${({ $color }) => $color};
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  outline: none;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CopyBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1c2e23;
  background: #f0f4f1;
  border: 1px solid rgba(28, 46, 35, 0.12);
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: #e2ebe4;
    transform: translateY(-1px);
  }
`;

// ── Author card ───────────────────────────────────────────────────────────────

export const AuthorCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f7f4ef;
  border-radius: 14px;
  border: 1px solid rgba(28, 46, 35, 0.07);
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.15s;

  &:hover {
    background: #eef4ee;
    box-shadow: 0 4px 16px rgba(28, 46, 35, 0.1);
    transform: translateY(-2px);
  }
`;

export const AuthorAvatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid rgba(28, 46, 35, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 36px;
    height: 36px;
    object-fit: contain;
  }
`;

export const AuthorInfo = styled.div`
  flex: 1;
`;

export const AuthorName = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #1c2e23;
  margin: 0 0 0.2rem;
`;

export const AuthorRole = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #7a8c82;
  margin: 0;
`;

// Kept for backward compat
export const AuthorSection = AuthorCard;

// ── Sidebar ───────────────────────────────────────────────────────────────────

export const PostSidebar = styled.aside`
  display: none;

  @media ${device.lg} {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: clamp(2rem, 4vw, 3.5rem);
    position: sticky;
    top: 100px;
  }
`;

export const SidebarWidget = styled.div`
  background: #fff;
  border: 1px solid rgba(28, 46, 35, 0.09);
  border-radius: 14px;
  padding: 1.25rem;
`;

export const SidebarTitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  color: #7a8c82;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 1rem;
`;

export const SidebarShareCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SidebarShareBtn = styled.a<ShareBtnProps>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: #fff;
  background: ${({ $color }) => $color};
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  border: none;

  &:hover {
    opacity: 0.88;
    transform: translateX(2px);
  }
`;

export const SidebarCopyBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: #1c2e23;
  background: #f0f4f1;
  border: 1px solid rgba(28, 46, 35, 0.12);
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
  text-align: left;

  &:hover {
    background: #e2ebe4;
  }
`;

// ── Related posts ─────────────────────────────────────────────────────────────

export const RelatedSection = styled.section`
  background: #f4f7f4;
  border-top: 1px solid rgba(28, 46, 35, 0.08);
  padding: clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 4rem);
`;

export const RelatedInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const RelatedHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const RelatedTitle = styled.h3`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  font-weight: 700;
  color: #1c2e23;
  margin: 0;
`;

export const RelatedLink = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #ee7007;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
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

// ── Skeleton ──────────────────────────────────────────────────────────────────

export const PostSkeletonHero = styled.div`
  width: 100%;
  height: clamp(320px, 50vw, 580px);
  ${skeletonBg}
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
