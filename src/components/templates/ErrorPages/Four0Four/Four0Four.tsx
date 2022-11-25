import React from 'react';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import FlexRow from '../../../layout/FlexRow/FlexRow';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import Heading from '../../../atoms/Heading/Heading';
import Text from '../../../atoms/Text/Text';
import { useViewport } from '../../../../hooks/useViewport/useViewport';
import { breakpoints } from '../../../../constants/breakpoints';
import { colors } from '../../../../constants';
import { ErrorTemplateProps } from '../types';
import { StyledIcon, StyledLink } from '../styles';
import { ThemeProvider, useThemeContext } from '../../../styles/Theme';

export interface Four0FourErrorProps extends ErrorTemplateProps {
  linkUrl?: string;
  linkText?: string;
}

const Four0Four = ({
  icon = faInfo,
  linkUrl = 'https://www.zopa.com',
  linkText = 'Go to Zopa home',
}: Four0FourErrorProps) => {
  const { width = 0 } = useViewport();
  const theme = useThemeContext();

  return (
    <div data-automation="ZA.ErrorPage.Four0Four">
      <ThemeProvider theme={theme}>
        <FlexRow justify="center">
          <FlexCol xs="auto" className="mb-7">
            <StyledIcon bgColor={colors.greyLighter} variant={icon} size="3x" color={colors.greyDark} />
          </FlexCol>
        </FlexRow>
        <Heading as="h1" size={width <= breakpoints.desktop ? 'h4' : 'h3'} align="center" className="mb-4">
          Sorry, there’s been a problem
        </Heading>
        <Text as="p" size={width <= breakpoints.desktop ? 'body' : 'lead'} align="center" className="mb-8">
          Seems like the page you’re looking for doesn’t exist.
        </Text>
        <FlexRow justify="center">
          <FlexCol xs="auto">
            <StyledLink className="mb-10" href={linkUrl} styling="secondary">
              {linkText}
            </StyledLink>
          </FlexCol>
        </FlexRow>
        <Text as="p" size="small" align="center">
          Error code: 404
        </Text>
      </ThemeProvider>
    </div>
  );
};

export default Four0Four;
