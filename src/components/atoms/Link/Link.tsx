import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import Text, { ITextProps } from '../../atoms/Text/Text';

export interface ILinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    React.RefAttributes<HTMLAnchorElement> {
  as?: any;
  target?: '_blank' | 'none';
  color?: any;
}

interface IStyledLinkProps extends Omit<ITextProps, 'color'> {
  color: ILinkProps['color'];
}

const SLink = styled(Text).attrs({
  weight: 'semibold',
  forwardedAs: ({ as = 'a' }) => as,
})<IStyledLinkProps>`
  font-size: inherit;
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  appearance: none;

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

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <STargetIcon xmlns="http://www.w3.org/2000/svg" width="15" height="15">
      <g fill={props.color || colors.base.secondary}>
        <path d="M2.6 4H0v11h11v-2.6H2.6z" />
        <path d="M4 0v11h11V0H4zm9.7 1.3v8.4L5.2 1.3h8.5z" />
      </g>
    </STargetIcon>
  );
};

const Link = React.forwardRef<HTMLAnchorElement, ILinkProps>((props, ref) => {
  const { children, color = colors.base.secondary, target = 'none', ...rest } = props;
  return (
    <SLink ref={ref} color={color} {...rest}>
      {children}
      {target === '_blank' && <TargetIcon color={color} />}
    </SLink>
  );
});

Link.defaultProps = {
  color: colors.base.secondary,
};

export default Link;
