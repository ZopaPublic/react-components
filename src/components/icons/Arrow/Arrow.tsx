import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export type ArrowDirection = 'up' | 'down' | 'left' | 'right' | number | string;

export interface IArrowProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Targets the svg's `fill` attribute
   */
  color?: string;

  /**
   * Arrow arrow direction
   */
  direction?: ArrowDirection;
}

const getRotation = (direction: ArrowDirection = 'down'): string => {
  const directionMap = {
    down: '0',
    left: '90',
    right: '-90',
    up: '180',
  };
  return directionMap[direction] || direction;
};

const StyledArrow = styled.svg<IArrowProps>`
  transition: transform 0.2s;
  transform: rotate(${props => getRotation(props.direction)}deg);
`;

const Arrow = ({
  ref,
  color = colors.base.secondary,
  height = '12px',
  width = '12px',
  direction = 'down',
  ...rest
}: IArrowProps) => (
  <StyledArrow
    direction={direction}
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 5"
    aria-label={`Arrow pointing ${direction}`}
    role="img"
    {...rest}
  >
    <title>arrow pointing {direction}</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(0.000000, -14.000000)" fill={color} fillRule="nonzero">
        <g>
          <path
            d="M7.63149316,17.3813356 L4.28255792,21.7152282 C3.98915505,22.0949239 3.51345502,22.0949239 3.22005215,21.7152282 C3.07915512,21.5328919 3,21.2855908 3,21.0277282 L3,11.9722718 C3,11.4353009 3.33637072,11 3.75130504,11 C3.95056352,11 4.1416609,11.1024355 4.28255792,11.2847718 L7.63149316,15.6186645 C7.86830411,15.925124 7.92952055,16.0681625 7.96979452,16.2401176 C8.01006849,16.4120727 8.01006849,16.5879273 7.96979452,16.7598824 C7.92952055,16.9318375 7.86830411,17.074876 7.63149316,17.3813356 Z"
            transform="translate(5.500000, 16.500000) rotate(90.000000) translate(-5.500000, -16.500000) "
          />
        </g>
      </g>
    </g>
  </StyledArrow>
);

export default Arrow;
