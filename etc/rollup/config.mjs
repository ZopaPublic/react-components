import path from 'path';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require('../../package.json');
// Plugins
import customResolveOptions from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import { swc, minify } from 'rollup-plugin-swc3';
import postcss from 'rollup-plugin-postcss';
import commonjs from "@rollup/plugin-commonjs";

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
      preserveModules: true,
      interop: 'auto'
    },
    {
      dir: 'es',
      format: 'es',
      sourcemap: true,
      preserveModules: true,
      interop: 'auto'
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    customResolveOptions({ extensions }),
    swc({
      // All options are optional
      include: /\.[mc]?[jt]sx?$/, // default
      exclude: /node_modules/, // default
      tsconfig: 'tsconfig.json', // default
      // tsconfig: false, // You can also prevent `rollup-plugin-swc` from reading tsconfig.json, see below
      // And add your swc configuration here!
      // "filename" will be ignored since it is handled by rollup
      jsc: {
        parser: {
          syntax: 'typescript',
        },
        target: 'es2018',
      },
      sourceMaps: true
    }),
    commonjs({
      include: /node_modules/
    }),
    url({
      fileName: '[hash][extname]',
      limit: 100000, // inline files
      include: ['**/*.svg', '**/*.gif'], // defaults to .svg, .png, .jpg and .gif files
      emitFiles: true, // defaults to true
    }),
    minify({
      sourceMap: true
    }),
    postcss({ minimize: true }),
  ],
};
