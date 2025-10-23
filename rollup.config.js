import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import svgr from "@svgr/rollup";
import image from "@rollup/plugin-image";
import url from "@rollup/plugin-url";
import sourcemaps from "rollup-plugin-sourcemaps";

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
            },
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
            commonjs(),
            peerDepsExternal(),
            typescript({
                tsconfig: './tsconfig.json',
                useTsconfigDeclarationDir: false
            }),
            postcss({ 
                extract: true,      
                autoModules:true
            }),
            sourcemaps(),
            svgr(),
            image(),
            url({ 
                include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg'],
                limit: 0,
                fileName: '[name][extname]',
                destDir: 'dist/images',
                publicPath: '/images',
            }),
            copy({
                targets: [
                  { src: 'public/images/*', dest: 'dist/images' }, // 이미지 파일을 복사할 소스 및 대상 경로를 지정합니다.
                ],
            }),
        ],
        external: ['react', 'react-dom'],
    };

export default config;