// Simple copy and paste of the main config for managing local dependencies
// DO NOT USE THIS TO BUNDLE for production
import path from 'path';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require('../../package.json');
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import esbuild from 'rollup-plugin-esbuild';
import resolve from '@rollup/plugin-node-resolve';

const extensions = ['.ts', '.tsx', '.js', '.json'];

process.env.NODE_ENV = 'development';

if (process.env.CI) {
  throw new Error('DO NOT USE THIS IN PRODUCTION OR CI!!!');
}

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: path.resolve('src/index.ts'),
  output: [
    {
      dir: 'es',
      format: 'esm',
      preserveModules: true,
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    resolve({ moduleDirectories: ['node_modules'], extensions }),
    esbuild({
      // All options are optional
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      exclude: /node_modules/, // default
      sourceMap: false, // by default inferred from rollup's `output.sourcemap` option
      target: 'esnext', // default, or 'es20XX', 'esnext'
      jsx: 'transform', // default, or 'preserve'
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      tsconfig: 'tsconfig.json', // default
      loaders: {
        '.json': 'json',
        '.js': 'jsx',
      },
    }),
    url({
      fileName: '[hash][extname]',
      limit: 100000, // inline files
      include: ['**/*.svg', '**/*.gif'], // defaults to .svg, .png, .jpg and .gif files
      emitFiles: true, // defaults to true
    }),
    postcss({ minimize: false }),
  ],
};

export default config;
