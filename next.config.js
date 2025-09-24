/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permitir solicitudes de desarrollo desde diferentes orígenes
  allowedDevOrigins: ['192.168.1.3', 'localhost', '127.0.0.1', '0.0.0.0'],

  // Configuración del compilador nativo de Next.js para styled-components
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true
    }
  },

  async rewrites() {
    return [
      {
        source: '/nuestra-organizacion',
        destination: '/aboutUs/AboutsUs'
      },
      {
        source: '/nuestra-organizacion/nuestra_historia',
        destination: '/history/History'
      },
      {
        source: '/nuestra-organizacion/vision',
        destination: '/vision/Vision'
      },
      {
        source: '/nuestra-organizacion/mision',
        destination: '/mission/Mission'
      },
      {
        source: '/escribanos',
        destination: '/contact/Contact'
      }
    ];
  }
};

module.exports = nextConfig;
