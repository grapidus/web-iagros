const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const getAssetPath = (path: string): string => `${basePath}${path}`;
