import path from 'path';
import pkg from '../../package.json';

// Plugins
import customResolveOptions from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.ts', '.tsx', '.js', '.json'];

process.env.NODE_ENV = 'production';

export default {
  input: path.resolve('src/index.ts'),
  output: [
    {
      dir: 'cjs',
      format: 'cjs', // Universal Module Definition, works as amd, cjs and iife all in one
      sourcemap: true,
      exports: 'named',
    },
    {
      dir: 'es',
      format: 'es',
      sourcemap: true,
    },
  ],
  preserveModules: true,
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    customResolveOptions({ extensions }),
    babel({
      presets: [['react-app', { flow: false, typescript: true }]],
      babelHelpers: 'runtime',
      extensions,
      exclude: 'node_modules',
    }),
    commonjs({
      include: /node_modules/,
    }),
    url({
      limit: 10 * 1024, // inline files < 10k, copy files > 10k
      include: ['**/*.svg'], // defaults to .svg, .png, .jpg and .gif files
      emitFiles: true, // defaults to true
    }),
    terser(),
    postcss({ minimize: true }),
  ],
};
