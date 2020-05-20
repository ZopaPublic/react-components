import React from 'react';
import styled from 'styled-components';
import Link, { LinkProps } from '../../../atoms/Link/Link';
import { typography } from '../../../../constants/typography';
import { spacing } from '../../../../constants/spacing';

const ListItem = styled.li`
  margin-bottom: ${spacing[4]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const ListLinkWrapper = styled(Link)`
  font-weight: ${typography.weights.regular};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

export const ListLink = (props: LinkProps) => (
  <ListItem>
    <ListLinkWrapper {...props} />
  </ListItem>
);
