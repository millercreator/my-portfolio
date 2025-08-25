/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // Add support for importing SVGs as React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
    // Add support for importing SVGs as files (for <img src="..." /> and similar)
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset/resource',
      issuer: { not: [/\.[jt]sx?$/] },
    });
    return config;
  },
}

export default nextConfig
