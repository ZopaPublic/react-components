import 'jest-styled-components';
import 'jest-axe/extend-expect';
import { configure } from '@testing-library/react';
import '@testing-library/jest-dom';

configure({ testIdAttribute: 'data-automation' });
