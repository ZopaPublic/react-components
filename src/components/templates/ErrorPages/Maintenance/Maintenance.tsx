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
import { HelpLine } from '../../../molecules/Help/Help';
import { ErrorTemplateProps } from '../Template/Template';

const StyledIcon = styled(Icon)`
  width: 80px;
  height: 80px;
`;

interface FiveHundredPageTemplateProps extends ErrorTemplateProps {
  helpLine?: HelpLine;
}

const Maintenance: React.FC<FiveHundredPageTemplateProps> = ({ helpLine = HelpLine.borrowers, icon = faTools }) => {
  const { width = 0 } = useViewport();

  return (
    <div data-automation="ZA.ErrorPage.Maintenance">
      <FlexRow justify="center">
        <FlexCol xs="auto" className="mb-7">
          <StyledIcon bgColor={colors.greyLighter} variant={icon} size="3x" color={colors.greyDark} />
        </FlexCol>
      </FlexRow>
      <Heading as="h1" size={width <= breakpoints.desktop ? 'h4' : 'h3'} align="center" className="mb-4">
        We’ll be back soon!
      </Heading>
      <Text as="p" size={width <= breakpoints.desktop ? 'body' : 'lead'} align="center" className="mb-7">
        Sorry for the inconvenience but we’re doing some essential work on our website right now.
      </Text>
      <Text as="p" size="small" align="center" className="mb-7">
        Please come back later or give us a call on <Link href={`tel:${helpLine}`}>{helpLine}</Link> and we’ll help you
        out.
      </Text>
    </div>
  );
};

export default Maintenance;
