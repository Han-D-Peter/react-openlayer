/** @type {import('next').NextConfig} */
const nextConfig = {
  // CSS import 제한을 우회하기 위한 설정
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  },
  // 또는 experimental 설정 사용
  experimental: {
    esmExternals: 'loose',
  },
}

module.exports = nextConfig
