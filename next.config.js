/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // Add your Next.js config options here
}

module.exports = withNextIntl(nextConfig);
