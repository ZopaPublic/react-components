import React from 'react';
import Logo from './Logo/Logo';
import Stars, { TrustPilotStarsProps } from './Stars/Stars';

type TrustpilotStatic = {
  Logo: typeof Logo;
  Stars: typeof Stars;
};

/**
 * @visibleName Trustpilot
 */
const Trustpilot: TrustpilotStatic & TrustPilotStarsProps = ({ rating, className }) => (
  <div className={className}>
    <Logo className="mr-1" />
    <Stars className="ml-1" rating={rating} />
  </div>
);

Trustpilot.Logo = Logo;
Trustpilot.Stars = Stars;

export default Trustpilot;
