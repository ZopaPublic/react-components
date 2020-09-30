import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Text } from '../../../..';
import Icon from '../../../atoms/Icon/Icon';
import Link from '../../../atoms/Link/Link';
import { minMedia } from '../../../../helpers/responsiveness';

interface ProductTemplateNavigationProps {
  prevStep?: string | ReactNode;
  nextStep?: string | ReactNode;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${minMedia.desktop`
    ${css`
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `}
  `}
`;

export function ProductTemplateNavigation({ prevStep, nextStep }: ProductTemplateNavigationProps) {
  return (
    <Wrapper className="my-4 l:mt-0" data-automation="ZA.ProductTemplateNavigation">
      {prevStep && typeof prevStep === 'string' ? (
        <StyledLink href={prevStep} aria-label="Back">
          <Icon variant={faChevronLeft} color="inherit" className="mr-2" />
          <Text>Back</Text>
        </StyledLink>
      ) : (
        prevStep
      )}
      {nextStep && typeof nextStep === 'string' ? (
        <StyledLink href={nextStep} aria-label="Next" className="ml-auto">
          <Text className="mr-2">Next</Text>
          <Icon variant={faChevronRight} color="inherit" />
        </StyledLink>
      ) : (
        nextStep
      )}
    </Wrapper>
  );
}
