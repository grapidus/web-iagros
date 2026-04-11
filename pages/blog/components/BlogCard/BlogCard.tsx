import React from 'react';
import { BlogLocal } from '../../models/local/blog.local.model';
import {
  CardBody,
  CardExcerpt,
  CardFooter,
  CardImage,
  CardLink,
  CardMeta,
  CardTitle,
  CategoryBadge,
  ReadMore,
} from './BlogCard.styles';

const CATEGORY_LABELS: Record<string, string> = {
  agricola:   'Agrícola',
  pecuario:   'Pecuario',
  tecnologia: 'Tecnología',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

interface BlogCardProps {
  blog: BlogLocal;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const href = `${basePath}/blog/post/?slug=${blog.slug}`;

  return (
    <CardLink href={href}>
      <CardImage>
        <img src={blog.image} alt={blog.title} loading="lazy" />
        <CategoryBadge $category={blog.category}>
          {CATEGORY_LABELS[blog.category] ?? blog.category}
        </CategoryBadge>
      </CardImage>

      <CardBody>
        <CardTitle>{blog.title}</CardTitle>
        <CardExcerpt>{blog.excerpt}</CardExcerpt>

        <CardFooter>
          <CardMeta>
            {formatDate(blog.publishedAt)} · {blog.readingTime} min lectura
          </CardMeta>
          <ReadMore>
            Leer
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </ReadMore>
        </CardFooter>
      </CardBody>
    </CardLink>
  );
};

export default BlogCard;
