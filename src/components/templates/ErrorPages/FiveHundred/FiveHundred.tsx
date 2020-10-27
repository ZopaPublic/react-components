import React from 'react';
import styled from 'styled-components';
import { faTools } from '@fortawesome/free-solid-svg-icons';

import FlexRow from '../../../layout/FlexRow/FlexRow';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import Heading from '../../../atoms/Heading/Heading';
import Text from '../../../atoms/Text/Text';
import Link from '../../../atoms/Link/Link';
import Icon from '../../../atoms/Icon/Icon';
import { useViewport } from '../../../../hooks/useViewport/useViewport';
import { breakpoints } from '../../../../constants/breakpoints';
import { colors } from '../../../../constants';
import { ErrorTemplateProps } from '../Template/Template';

const StyledIcon = styled(Icon)`
  width: 80px;
  height: 80px;
`;

const FiveHundred: React.FC<ErrorTemplateProps> = ({ icon = faTools }) => {
  const { width = 0 } = useViewport();

  return (
    <>
      <FlexRow justify="center">
        <FlexCol xs="auto" className="mb-7">
          <StyledIcon bgColor={colors.greyLighter} variant={icon} size="3x" color={colors.greyDark} />
        </FlexCol>
      </FlexRow>
      <Heading as="h1" size={width <= breakpoints.desktop ? 'h4' : 'h3'} align="center" className="mb-4">
        Sorry, there’s been a problem
      </Heading>
      <Text as="p" size={width <= breakpoints.desktop ? 'body' : 'lead'} align="center" className="mb-7">
        We’re working to fix this problem and we’ll be up and running shortly.
      </Text>
      <Text as="p" size="small" align="center" className="mb-10">
        Keep seeing this page?{' '}
        <Link href="http://www.wikihow.com/Clear-Your-Browser%27s-Cookies" target="_blank" showTargetIcon={false}>
          Try clearing your browser cookies
        </Link>{' '}
        or come back later
      </Text>
      <Text as="p" size="small" align="center">
        Error code: 500
      </Text>
    </>
  );
};

export default FiveHundred;
