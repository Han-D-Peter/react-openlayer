# Next.js 통합 가이드

이 문서는 `react-openlayers7` 라이브러리를 Next.js 프로젝트에서 사용할 때 발생하는 CSS import 문제를 해결하는 방법을 설명합니다.

## 문제 상황

Next.js에서 `react-openlayers7` 라이브러리를 사용할 때 다음과 같은 에러가 발생할 수 있습니다:

```
Global CSS cannot be imported from within node_modules.
Read more: https://nextjs.org/docs/messages/css-npm
Location: node_modules/ol/ol.css
```

## 해결 방법

### 방법 1: Next.js 설정 수정 (권장)

프로젝트 루트에 `next.config.js` 파일을 생성하고 다음 설정을 추가하세요:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // CSS import 제한을 우회하기 위한 설정
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
  // 또는 experimental 설정 사용
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
```

### 방법 2: CSS 직접 import

라이브러리 사용 전에 OpenLayers CSS를 직접 import하세요:

```javascript
// pages/_app.js 또는 app/layout.js
import "ol/ol.css";
import { MapContainer } from "react-openlayers7";

// 또는 개별 페이지에서
import "ol/ol.css";
import { MapContainer } from "react-openlayers7";
```

### 방법 3: CSS-in-JS 사용

만약 CSS import가 여전히 문제가 된다면, CSS-in-JS를 사용할 수 있습니다:

```javascript
// pages/_app.js
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // OpenLayers CSS를 동적으로 로드
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/ol@10.6.0/ol.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return <Component {...pageProps} />;
}
```

## 사용 예제

```jsx
import "ol/ol.css";
import { MapContainer } from "react-openlayers7";

function MyMap() {
  return (
    <MapContainer
      center={[127.0276, 37.4979]} // 서울 좌표
      zoom={10}
      style={{ width: "100%", height: "400px" }}
    />
  );
}

export default MyMap;
```

## 주의사항

1. **CSS import 순서**: OpenLayers CSS는 라이브러리 import 전에 로드되어야 합니다.
2. **SSR 고려사항**: Next.js의 SSR 환경에서는 CSS가 서버에서 렌더링되지 않을 수 있으므로, 클라이언트 사이드에서만 로드하는 것을 고려하세요.
3. **번들 크기**: OpenLayers CSS는 상당한 크기이므로, 필요한 경우 CDN을 사용하는 것을 고려하세요.

## 추가 리소스

- [Next.js CSS 문서](https://nextjs.org/docs/basic-features/built-in-css-support)
- [OpenLayers 공식 문서](https://openlayers.org/)
- [react-openlayers7 GitHub](https://github.com/your-repo/react-openlayers7)
