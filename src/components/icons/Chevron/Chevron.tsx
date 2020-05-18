import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import deprecate from 'util-deprecate';

export type ChevronDirection = 'up' | 'down' | 'left' | 'right';

export interface IChevronProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Targets the svg's `fill` attribute
   */
  color?: string;

  /**
   * Chevron arrow direction
   */
  direction?: ChevronDirection;
}

const getRotation = (direction: ChevronDirection | number = 'down'): string => {
  const directionMap: { [k in ChevronDirection]: '0' | '90' | '-90' | '180' } = {
    down: '0',
    left: '90',
    right: '-90',
    up: '180',
  };

  return typeof direction === 'number' ? String(direction) : directionMap[direction];
};

const StyledChevron = styled.svg<IChevronProps>`
  transition: transform 0.2s;
  transform: rotate(${props => getRotation(props.direction)}deg);
`;

// ref is excluded from ...rest due to a type conflict; TODO: check if styled-components v4 fixes it.
const Chevron = ({
  ref,
  color = colors.actionPlain,
  height = '24px',
  width = '24px',
  direction = 'down',
  ...rest
}: IChevronProps) => (
  <StyledChevron
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 416 416"
    direction={direction}
    {...rest}
  >
    <path
      d="M214.8 287c2.2-.9 4.3-2.3 6.1-4.1l124-124c7.2-7.1 7.2-18.7 0-25.9-7.1-7.2-18.7-7.2-25.9 0L207.9 244.1l-111-111c-7.1-7.2-18.7-7.2-25.9 0-7.2 7.1-7.2 18.7 0 25.9l124 124c5.4 5.3 13.2 6.7 19.8 4z"
      fill={color}
    />
  </StyledChevron>
);

/**
 * @deprecated `<ChevronIcon />` is deprecated and will be removed in: `4.0.0`. Use [font-awesome 'chevron' icons](https://fontawesome.com/icons/chevron-right?style=solid) instead.
 */
export default deprecate(
  Chevron,
  `
  ❗️ [@zopauk/react-components]
  
  <ChevronIcon /> is deprecated and it will be removed in the next major version: 4.0.0. 
  For icons we plan to rely on font-awesome, use: <i class="fas fa-chevron-{direction}"></i> instead.
`,
);
