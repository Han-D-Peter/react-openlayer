# React Openlayers7 [![npm version](https://img.shields.io/npm/v/react-openlayers7.svg)](https://www.npmjs.com/package/react-openlayers7)

React components for Openlayers7 maps.

## [Documentation](https://react-openlayer-official.vercel.app/)

- [Getting Started](https://react-openlayer-official.vercel.app/docs/Getting%20started/intro)
- [Guide](https://react-openlayer-official.vercel.app/docs/category/guide)

## Installation

```bash
npm install react-openlayers7 ol
```

## Usage

### CSS Import

이 라이브러리는 OpenLayers CSS를 자동으로 import합니다. 하지만 Next.js를 사용하는 경우 추가 설정이 필요할 수 있습니다.

### Next.js 사용자를 위한 해결책

Next.js에서 다음과 같은 오류가 발생하는 경우:

```
Global CSS cannot be imported from within node_modules.
```

다음과 같이 해결할 수 있습니다:

**방법 1: next.config.js 설정 (권장)**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-openlayers7"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
};

module.exports = nextConfig;
```

**방법 2: CSS를 직접 import**

```javascript
// _app.js 또는 layout.js에서
import "ol/ol.css";
```

**방법 3: CSS 모듈 사용**

```javascript
// next.config.js에서
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
};
```

### Next.js 설정

Next.js를 사용하는 경우, `next.config.js`에서 CSS import를 허용하도록 설정할 수 있습니다:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-openlayers7"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
};

module.exports = nextConfig;
```

## License

MIT
