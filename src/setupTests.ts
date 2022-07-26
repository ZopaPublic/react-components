import 'jest-styled-components';
import 'jest-axe/extend-expect';
import { configure } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
configure({ testIdAttribute: 'data-automation' });
