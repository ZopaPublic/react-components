import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../../constants/colors';
import useScrollThreshold from '../../../hooks/useScrollThreshold/useScrollThreshold';
import FlexContainer from '../../../layout/FlexContainer/FlexContainer';

export interface ILayoutOuterProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor: string;
  overlap: boolean;
}

const LayoutOuter = styled.div<ILayoutOuterProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 80px;
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: 0 0 0 transparent;
  ${({ overlap }) => overlap && `box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px;`}
`;

const LayoutInner = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Spacer = styled.div`
  height: 80px;
`;

const Container = styled(FlexContainer)`
  height: inherit;
`;

export interface INavbarLayoutProps {
  /**
   * background color
   */
  backgroundColor?: string;
  /**
   * Component appearing on the left
   */
  left?: React.ReactNode;
  /**
   * Component appearing in the center
   */
  center?: React.ReactNode;
  /**
   * Component appearing on the right
   */
  right?: React.ReactNode;
}

const NavbarLayout = ({ backgroundColor = colors.neutral.white, left, center, right }: INavbarLayoutProps) => {
  const overThreshold = useScrollThreshold();

  return (
    <>
      <Spacer />
      <LayoutOuter backgroundColor={backgroundColor} overlap={overThreshold}>
        <Container>
          <LayoutInner>
            {left && <div>{left}</div>}
            {center && <div>{center}</div>}
            {right && <div>{right}</div>}
          </LayoutInner>
        </Container>
      </LayoutOuter>
    </>
  );
};

export default NavbarLayout;
