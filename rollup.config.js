import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

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
            })
        ],
        external: ['react', 'react-dom'],
    };

export default config;