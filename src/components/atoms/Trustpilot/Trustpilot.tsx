import React from 'react';
import Logo from './Logo/Logo';
import Stars, { TrustPilotStarsProps } from './Stars/Stars';

/**
 * @visibleName Trustpilot
 */
const Trustpilot = ({ rating, className }: TrustPilotStarsProps) => (
  <div className={className}>
    <Logo className="mr-1" />
    <Stars className="ml-1" rating={rating} />
  </div>
);

export default Object.assign(Trustpilot, {
  Logo,
  Stars,
});
