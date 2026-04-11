import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #eee 25%, #e0e0e0 50%, #eee 75%);
  background-size: 800px 100%;
  animation: ${shimmer} 1.4s ease infinite;
  border-radius: 6px;
`;

const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(28, 46, 35, 0.07);
  background: #ffffff;
`;

const ImageSkeleton = styled(SkeletonBase)`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0;
`;

const Body = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Line = styled(SkeletonBase)<{ $w?: string }>`
  height: 14px;
  width: ${({ $w }) => $w || '100%'};
`;

const SkeletonCard: React.FC = () => (
  <Card>
    <ImageSkeleton />
    <Body>
      <Line $w="40%" style={{ height: '10px' }} />
      <Line $w="90%" style={{ height: '18px' }} />
      <Line $w="75%" style={{ height: '18px' }} />
      <Line $w="100%" />
      <Line $w="85%" />
      <Line $w="50%" style={{ marginTop: '0.25rem' }} />
    </Body>
  </Card>
);

interface BlogSkeletonProps {
  count?: number;
}

const BlogSkeleton: React.FC<BlogSkeletonProps> = ({ count = 6 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </>
);

export default BlogSkeleton;
