const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "diginsy.com" }],
  },
};

module.exports = nextConfig;
