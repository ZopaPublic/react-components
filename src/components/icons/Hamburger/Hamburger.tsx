import React from 'react';
import { colors } from '../../../constants/colors';

export interface IHamburgerProps {
  /**
   * The width and height size
   * @default 40px
   */
  size?: string;
  /**
   * Targets the svg's `fill` attribute
   * @default colors.base.secondary
   */
  activeColor?: string;
  /**
   * Targets the svg's `fill` attribute
   * @default colors.neutral.medium
   */
  inactiveColor?: string;
  /** For the default active state */
  active?: boolean;
}

export interface IHamburgerState {
  active: boolean;
}

const Hamburger: React.FunctionComponent<IHamburgerProps> = ({
  size = '40px',
  active = false,
  activeColor = colors.base.secondary,
  inactiveColor = colors.neutral.medium,
}) => {
  const color = active ? activeColor : inactiveColor;
  return (
    <svg width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path
        fill={color}
        d="M8 36h32c1.1 0 2-.9 2-2s-.9-2-2-2H8c-1.1 0-2 .9-2 2s.9 2 2 2zm0-10h32c1.1 0 2-.9 2-2s-.9-2-2-2H8c-1.1 0-2 .9-2 2s.9 2 2 2zM6 14c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2s-.9-2-2-2H8c-1.1 0-2 .9-2 2z"
      />
    </svg>
  );
};

export default Hamburger;
