import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import 'jest-canvas-mock';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-automation' });
