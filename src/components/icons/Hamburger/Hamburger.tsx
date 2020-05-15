import React from 'react';
import { colors } from '../../../constants/colors';
import deprecate from 'util-deprecate';

export interface IHamburgerProps {
  /**
   * The width and height size
   */
  size?: string;
  /**
   * Targets the svg's `fill` attribute
   */
  activeColor?: string;
  /**
   * Targets the svg's `fill` attribute
   */
  inactiveColor?: string;
  /**
   * For the default active state
   */
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

/**
 * @deprecated `<HamburgerIcon />` is deprecated and will be removed in: `4.0.0`. Use [font-awesome 'bars' icon](https://fontawesome.com/icons/bars?style=solid) instead.
 */
export default deprecate(
  Hamburger,
  `
  ❗️ [@zopauk/react-components]
  
  <HamburgerIcon /> is deprecated and it will be removed in the next major version: 4.0.0. 
  For icons we plan to rely on font-awesome, use: <i class="fas fa-bars"></i> instead.
`,
);
