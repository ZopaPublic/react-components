import React from 'react';
import styled from 'styled-components';
import zLogo from './svg/zopaLogo.svg';

const Container = styled.div`
  width: 170px;
  margin: 0 auto;
  text-align: center;
`;

const LogoTitle = styled.h1`
  font-size: 18px;
  font-weight: normal;
  color: #00b9a7;
  div {
    text-align: center;
    height: 50px;
    width: 170px;
    margin: 0 auto;
    &:hover rect {
      -webkit-animation: 0.5s draw linear forwards;
      animation: 0.5s draw linear forwards;
    }
    @keyframes draw {
      0% {
        stroke-dasharray: 140, 540;
        stroke-dashoffset: -474;
        stroke-width: 8px;
      }
      100% {
        stroke-dasharray: 760;
        stroke-dashoffset: 0;
        stroke-width: 2px;
      }
    }
  }
`;

const LinkRepo = styled.a`
  font-size: 14px;
  color: #c0e1d7;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`;

const LogoRect = styled.rect`
  fill: transparent;
  stroke-dasharray: 126px, 260px;
  stroke-dashoffset: -243px;
  stroke-width: 8px;
  stroke: #19f6e8;
`;

const ZopaLogo = styled.img`
  position: relative;
  top: -40px;
`;

export function LogoRenderer({ children }) {
  return (
    <Container>
      <LogoTitle>
        <div>
          <svg height="50" width="100%">
            <LogoRect height="50" width="100%" />
          </svg>
          <ZopaLogo src={zLogo} alt="Zopa logo" />
        </div>
        <LinkRepo
          href="https://github.com/zopaUK/react-components"
          title="Go to github repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </LinkRepo>
      </LogoTitle>
    </Container>
  );
}

export default LogoRenderer;
