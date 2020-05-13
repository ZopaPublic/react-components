import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';

// polyfill globalThis for older nodes
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
globalThis = global;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { JSDOM } = require('jsdom');
new JSDOM('', { runScripts: 'dangerously' });
