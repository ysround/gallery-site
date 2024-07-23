/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    PROJECT_ROOT: path.join(__dirname),
  },
}

module.exports = nextConfig