import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';
import { statusColors } from '../../../constants/colors';
import alert from '../../../content/images/alert-icon.svg';
import triumph from '../../../content/images/triumph-icon.svg';
import verified from '../../../content/images/valid-icon.svg';
import { maxMedia } from '../../../helpers/responsiveness';

export type TSidekickCardTypes = 'triumph' | 'verified' | 'alert';

export interface ISidekickCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Type of SidekickCard to render */
  type: TSidekickCardTypes;
}

const sidekickTypeColors = {
  alert: colors.alert.alerty500,
  triumph: statusColors.valid,
  verified: statusColors.valid,
};

const typeIcons = {
  alert,
  triumph,
  verified,
};

const SSidekickCard = styled.div<ISidekickCardProps>`
  border-radius: 4px;
  background: url(${({ type }) => typeIcons[type]}) 24px 48px no-repeat ${colors.base.white};
  padding: 48px 48px 48px 80px;
  border-left: 16px solid ${({ type }) => sidekickTypeColors[type]};

  ${maxMedia.tablet`
    border-radius: 0;
    background-position: 24px 18px;
    padding: 56px 32px 32px 24px;
  `};
`;

const SidekickCard = (props: ISidekickCardProps) => <SSidekickCard {...props} />;

export default SidekickCard;
