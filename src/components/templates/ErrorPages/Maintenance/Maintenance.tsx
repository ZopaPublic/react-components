import React from 'react';
import { faTools } from '@fortawesome/free-solid-svg-icons';

import FlexRow from '../../../layout/FlexRow/FlexRow';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import Heading from '../../../atoms/Heading/Heading';
import Text from '../../../atoms/Text/Text';
import Link from '../../../atoms/Link/Link';
import { useViewport } from '../../../../hooks/useViewport/useViewport';
import { breakpoints } from '../../../../constants/breakpoints';
import { colors } from '../../../../constants';
import { HelpLine, HelpLineDetails } from '../../../molecules/Help/Help';
import { ErrorTemplateProps } from '../types';
import { StyledIcon } from '../styles';
import { ThemeProvider, useThemeContext } from '../../../styles/Theme';

export interface MaintenanceFiveHundredErrorProps extends ErrorTemplateProps {
  helpLine?: HelpLine;
}

const Maintenance = ({ helpLine = HelpLine.borrowers, icon = faTools }: MaintenanceFiveHundredErrorProps) => {
  const { width = 0 } = useViewport();
  const theme = useThemeContext();

  return (
    <div data-automation="ZA.ErrorPage.Maintenance">
      <ThemeProvider theme={theme}>
        <FlexRow justify="center">
          <FlexCol xs="auto" className="mb-7">
            <StyledIcon bgColor={colors.greyLighter} variant={icon} size="3x" color={colors.greyDark} />
          </FlexCol>
        </FlexRow>
        <Heading as="h1" size={width <= breakpoints.desktop ? 'h4' : 'h3'} align="center" className="mb-4">
          We'll be back soon!
        </Heading>
        <Text as="p" size={width <= breakpoints.desktop ? 'body' : 'lead'} align="center" className="mb-7">
          Sorry for the inconvenience but we're doing some essential work on our website right now.
        </Text>
        <Text as="p" size="small" align="center" className="mb-7">
          Please come back later or give us a call on
          <Link href={`tel:${HelpLineDetails[helpLine].telephone.tel}`}>
            {HelpLineDetails[helpLine].telephone.label}
          </Link>{' '}
          and we'll help you out.
        </Text>
      </ThemeProvider>
    </div>
  );
};
export default Maintenance;
