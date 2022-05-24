// Simple copy and paste of the main config for managing local dependencies
// DO NOT USE THIS TO BUNDLE
import path from 'path';
import pkg from '../../package.json';

// Plugins
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.ts', '.tsx', '.js', '.json'];

process.env.NODE_ENV = 'development';

if (process.env.CI) {
  throw new Error('DO NOT USE THIS IN PRODUCTION OR CI!!!');
}

// TODO: we could experiment with swc or esbuild as this is only local dev
export default {
  input: path.resolve('src/index.ts'),
  output: [
    {
      dir: 'es',
      format: 'esm',
    },
  ],
  preserveModules: true,
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    resolve({ moduleDirectories: ['node_modules'], extensions }),
    commonjs(),
    babel({
      presets: [['react-app', { flow: false, typescript: true, absoluteRuntime: false }]],
      babelHelpers: 'runtime',
      extensions,
      include: ['src/**/*'],
    }),
    url({
      fileName: '[hash][extname]',
      limit: 100000, // inline files
      include: ['**/*.svg', '**/*.gif'], // defaults to .svg, .png, .jpg and .gif files
      emitFiles: true, // defaults to true
    }),
    postcss({ minimize: true }),
  ],
};
