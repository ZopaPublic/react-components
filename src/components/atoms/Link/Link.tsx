import React, { FC } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { colors } from '../../../constants/colors';

export interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: string;
}

export interface ITargetIconProps extends React.SVGProps<SVGSVGElement> {}

const SLink = styled(Text)`
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  appearance: none;

  color: ${({ color }) => color || colors.base.secondary};

  &:hover {
    opacity: 0.88;
  }

  &:active {
    opacity: 0.72;
  }
`;

const STargetIcon = styled.svg`
  margin-left: 6px;
  top: 2px;
  position: relative;
`;

const TargetIcon = (props: ITargetIconProps) => {
  return (
    <STargetIcon xmlns="http://www.w3.org/2000/svg" width="15" height="15">
      <g fill={props.color || colors.base.secondary}>
        <path d="M2.6 4H0v11h11v-2.6H2.6z" />
        <path d="M4 0v11h11V0H4zm9.7 1.3v8.4L5.2 1.3h8.5z" />
      </g>
    </STargetIcon>
  );
};

const Link: FC<ILinkProps> = React.forwardRef<HTMLAnchorElement, ILinkProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <SLink ref={ref} weight="bold" forwardedAs="a" {...rest}>
      {children}
      {rest.target === '_blank' && <TargetIcon color={rest.color} />}
    </SLink>
  );
});

export default Link;
