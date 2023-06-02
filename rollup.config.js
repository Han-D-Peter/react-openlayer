import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy';

const extensions = [ 'js', 'jsx', 'ts', 'tsx', 'mjs' ];
const pkg = require('./package.json')
const config = {
        input: './src/lib/index.ts',
        output: [
            {
                dir: './dist',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: 'esm',
                sourcemap: true,
            }
            ,
            {
                name: pkg.name,
                file: pkg.browser,
                format: 'umd',
                sourcemap: true,
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            }
        ],
        plugins: [
            nodeResolve({ extensions }),
            babel({
                exclude: 'node_modules/**',
                extensions,
                babelHelpers: 'bundled',
            }),
            commonjs(),
            peerDepsExternal(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({ 
                extract: true,      
            }),
            url({
                limit: 0, // 모든 이미지 파일을 번들에 포함시킵니다.
                include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg'], // 포함할 이미지 확장자를 지정합니다.
                emitFiles: true, // 이미지 파일을 번들에 포함시킵니다.
                // 다른 url 플러그인 옵션을 설정할 수 있습니다.
            }),
            image(),
            copy({
                targets: [
                  { src: 'public/mapicon/*', dest: 'dist/mapicon' }, // 이미지 파일을 복사할 소스 및 대상 경로를 지정합니다.
                ],
            }),
        ],
        external: ['react', 'react-dom'],
    };

export default config;