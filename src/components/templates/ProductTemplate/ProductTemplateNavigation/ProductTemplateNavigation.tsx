import React, { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Text from '../../../atoms/Text/Text';
import Icon from '../../../atoms/Icon/Icon';
import Link from '../../../atoms/Link/Link';
import { colors, grid } from '../../../../constants';

interface ProductTemplateNavigationProps {
  prevStep?: ReactElement | string;
  onBackPressed?: MouseEventHandler<HTMLAnchorElement>;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  @media (min-width: ${grid.breakpoints.m}px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const BackText = styled(Text).attrs({ color: colors.greyDark })`
  line-height: 0;
`;

export function ProductTemplateNavigation({ prevStep, onBackPressed }: ProductTemplateNavigationProps) {
  return (
    <Wrapper className="my-4 m:mt-0" data-automation="ZA.ProductTemplateNavigation">
      {!prevStep || typeof prevStep === 'string' ? (
        <StyledLink href={prevStep} aria-label="Back" onClick={onBackPressed}>
          <Icon variant={faChevronLeft} color={colors.greyDark} size="xs" className="mr-2" />
          <BackText>Back</BackText>
        </StyledLink>
      ) : (
        prevStep
      )}
    </Wrapper>
  );
}
