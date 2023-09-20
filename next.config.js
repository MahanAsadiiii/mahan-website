/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
}

module.exports = {
  publicRuntimeConfig: {
    staticFolder: '/public/fonts',
  },
};

module.exports = nextConfig
