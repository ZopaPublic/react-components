import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Text } from '../../../..';
import Icon from '../../../atoms/Icon/Icon';
import Link from '../../../atoms/Link/Link';
import { minMedia } from '../../../../helpers/responsiveness';

interface ProductTemplateNavigationProps {
  prevStep: string | ReactNode;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
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

export function ProductTemplateNavigation({ prevStep }: ProductTemplateNavigationProps) {
  return (
    <Wrapper className="my-4 l:mt-0" data-automation="ZA.ProductTemplateNavigation">
      {typeof prevStep === 'string' ? (
        <StyledLink href={prevStep} aria-label="Back">
          <Icon variant={faChevronLeft} color="inherit" className="mr-2" />
          <Text>Back</Text>
        </StyledLink>
      ) : (
        prevStep
      )}
    </Wrapper>
  );
}
