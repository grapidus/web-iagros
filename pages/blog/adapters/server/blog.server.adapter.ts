// Adapta datos del FRONTEND → BACKEND
// Se usa en la función query de RTK Query para enviar los parámetros en el formato que espera el servidor

import { BlogListLocalParams } from '../../models/local/blog.local.model';
import { BlogListServerParams } from '../../models/server/blog.server.model';

export function adaptParamsToServer(params: BlogListLocalParams): BlogListServerParams {
  return {
    ...(params.search && { search: params.search }),
    ...(params.category && params.category !== 'all' && { category: params.category }),
    page: params.page ?? 1,
    page_size: params.pageSize ?? 9,
  };
}
