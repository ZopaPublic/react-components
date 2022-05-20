import path from 'path';
import pkg from '../../package.json';

// Plugins
import customResolveOptions from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs', '.json'];

// Defaults to production if no env set
process.env.NODE_ENV = process.env.NODE_ENV ?? 'production';

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: path.resolve('src/index.ts'),
  output: [
    isProduction
      ? {
          dir: 'cjs',
          format: 'cjs', // Universal Module Definition, works as amd, cjs and iife all in one
          sourcemap: true,
          exports: 'named',
        }
      : null,
    {
      dir: 'es',
      format: 'es',
      sourcemap: isDevelopment ? 'inline' : false,
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {}), /@babel\/runtime/],
  plugins: [
    customResolveOptions({ extensions }),
    commonjs({
      include: /node_modules/,
      extensions,
    }),
    babel({
      presets: [
        ['@babel/preset-env', { useBuiltIns: 'entry', corejs: 3 }],
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: ['@babel/plugin-transform-runtime'],
      babelHelpers: 'runtime',
      extensions,
      exclude: 'node_modules',
    }),
    url({
      fileName: '[hash][extname]',
      limit: 100000, // inline files
      include: ['**/*.svg', '**/*.gif'], // defaults to .svg, .png, .jpg and .gif files
      emitFiles: true, // defaults to true
    }),
    isProduction ? terser() : null,
    postcss({ minimize: true }),
  ].filter(Boolean),
};
