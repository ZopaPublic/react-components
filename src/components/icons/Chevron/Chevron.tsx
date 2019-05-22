import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';

export type ChevronDirection = 'up' | 'down' | 'left' | 'right' | number | string;

export interface IChevronProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Targets the svg's `fill` attribute
   * @default colors.extended.blue300
   */
  color?: string;

  /**
   * Chevron arrow direction
   * @default down
   */
  direction?: ChevronDirection;
}

const getRotation = (direction: ChevronDirection = 'down'): string => {
  const directionMap = {
    down: '0',
    left: '90',
    right: '-90',
    up: '180',
  };
  return directionMap[direction] || direction;
};

const StyledChevron = styled.svg<IChevronProps>`
  transition: transform 0.2s;
  transform: rotate(${props => getRotation(props.direction)}deg);
`;

// ref is excluded from ...rest due to a type conflict; TODO: check if styled-components v4 fixes it.
const Chevron = ({
  ref,
  color = colors.extended.blue300,
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

export default Chevron;
