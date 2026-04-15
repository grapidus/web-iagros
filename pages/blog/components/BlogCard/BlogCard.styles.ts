import styled, { css } from 'styled-components';
import { device } from '../../../../constants/breakpoints';

const categoryColors: Record<string, { bg: string; text: string }> = {
  agricola:   { bg: '#e8f5e9', text: '#2e7d32' },
  pecuario:   { bg: '#fef3e2', text: '#8b4513' },
  tecnologia: { bg: '#fff3e0', text: '#ee7007' },
};

export const CardLink = styled.a<{ $featured?: boolean }>`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(28, 46, 35, 0.09);
  background: #ffffff;
  transition: transform 0.26s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.26s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(28, 46, 35, 0.1);
  }

  ${({ $featured }) => $featured && css`
    grid-column: 1 / -1;
    flex-direction: column;

    @media ${device.md} {
      flex-direction: row;
      height: 340px;
    }
  `}
`;

export const CardImage = styled.div<{ $featured?: boolean }>`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #e8ede9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);

    ${CardLink}:hover & {
      transform: scale(1.04);
    }
  }

  ${({ $featured }) => $featured && css`
    @media ${device.md} {
      flex: 0 0 55%;
      aspect-ratio: unset;
      height: 100%;
    }
  `}
`;

export const CategoryBadge = styled.span<{ $category: string }>`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  ${({ $category }) => {
    const c = categoryColors[$category] || { bg: '#f0f0f0', text: '#555' };
    return css`
      background: ${c.bg};
      color: ${c.text};
    `;
  }}
`;

export const CardBody = styled.div<{ $featured?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.25rem 1.25rem 1rem;
  gap: 0.5rem;

  ${({ $featured }) => $featured && css`
    @media ${device.md} {
      padding: 2.5rem 2rem;
      justify-content: center;
      gap: 0.75rem;
    }
  `}
`;

export const CardTitle = styled.h3<{ $featured?: boolean }>`
  font-family: 'Fraunces', serif;
  font-size: ${({ $featured }) => $featured ? 'clamp(1.3rem, 2.5vw, 1.9rem)' : 'clamp(1rem, 1.3vw, 1.15rem)'};
  font-weight: 600;
  color: #1c2e23;
  margin: 0;
  line-height: 1.25;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $featured }) => $featured ? '3' : '2'};
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s ease;

  ${CardLink}:hover & {
    color: #ee7007;
  }
`;

export const CardExcerpt = styled.p<{ $featured?: boolean }>`
  font-family: 'DM Sans', sans-serif;
  font-size: ${({ $featured }) => $featured ? '0.95rem' : '0.88rem'};
  color: #5a6e62;
  margin: 0;
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $featured }) => $featured ? '4' : '2'};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(28, 46, 35, 0.07);
`;

export const CardMeta = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  color: #8a9e90;
`;

export const ReadMore = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #ee7007;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: gap 0.2s ease;

  ${CardLink}:hover & {
    gap: 0.5rem;
  }
`;
