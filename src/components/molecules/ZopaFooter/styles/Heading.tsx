import styled from 'styled-components';
import ZopaHeading from '../../../atoms/Heading/Heading';

export const Heading = styled(ZopaHeading).attrs({ as: 'h3', size: 'h6' })`
  text-transform: uppercase;
`;
