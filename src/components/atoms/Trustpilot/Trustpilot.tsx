import React, { FC } from 'react';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import Stars, { TrustPilotStarsProps } from './Stars/Stars';

type TrustpilotStatic = {
  Logo: typeof Logo;
  Stars: typeof Stars;
};

const TrustpilotWrapper = styled.div``;

/**
 * @visibleName Trustpilot
 */
const Trustpilot: TrustpilotStatic & FC<TrustPilotStarsProps> = ({ stars, className }) => (
  <TrustpilotWrapper className={className}>
    <Logo className="mr-1" />
    <Stars className="ml-1" stars={stars} />
  </TrustpilotWrapper>
);

Trustpilot.Logo = Logo;
Trustpilot.Stars = Stars;

export default Trustpilot;
