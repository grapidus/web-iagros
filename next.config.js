/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || '/web-iagros';

const nextConfig = {
  // Solo archivos .page.tsx/.page.ts se tratan como páginas
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  // Habilitar export estático para GitHub Pages
  output: 'export',
  trailingSlash: true,

  // basePath y assetPrefix para GitHub Pages (en producción)
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '',

  // Permitir solicitudes de desarrollo desde diferentes orígenes
  allowedDevOrigins: ['192.168.1.3', 'localhost', '127.0.0.1', '0.0.0.0'],

  // Desactivar optimización de imágenes (no soportada en export estático)
  images: {
    unoptimized: true
  },

  // Configuración del compilador nativo de Next.js para styled-components
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true
    }
  },

  // Exponer el basePath como variable de entorno para acceder en el cliente
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoName : ''
  }
};

module.exports = nextConfig;
