/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permitir solicitudes de desarrollo desde diferentes orígenes
  allowedDevOrigins: ['192.168.1.3', 'localhost', '127.0.0.1', '0.0.0.0']
};

module.exports = nextConfig;
