import React from 'react';
import styled from 'styled-components';
import Link, { ILinkProps } from '../../../atoms/Link/Link';
import { typography } from '../../../../constants/typography';
import { spacing } from '../../../../constants/spacing';

const SListItem = styled.li`
  margin-bottom: ${spacing[4]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const SListLink = styled(Link)`
  font-weight: ${typography.weights.regular};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

export const ListLink = (props: ILinkProps) => (
  <SListItem>
    <SListLink {...props} />
  </SListItem>
);
