import React from 'react';
import styled from 'styled-components';
import Logo from 'rsg-components/Logo';
import Markdown from 'rsg-components/Markdown';
import Ribbon from 'rsg-components/Ribbon';
import Version from 'rsg-components/Version';

import GlobalStyles from '../components/styles/GlobalStyles';

const sidebarWidth = 260;

const Container = styled.div`
  background-color: white;
  padding-left: ${sidebarWidth + 20}px;
  @media (max-width: 600px) {
    padding-left: 0;
  },
`;
const Main = styled.main`
  max-width: 100%;
  padding: 12px 16px;
  margin: 0 auto;
  display: block;
`;

const Sidebar = styled.div`
  background-color: #1C2139;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${sidebarWidth}px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  @media (max-width: 600px) {
    position: static;
    width: auto;
    border-top-width: 1px;
    padding-bottom: 0;
  },
`;

const LogoContainer = styled.div`
  padding: 16px;
`;

const Footer = styled.footer`
  display: block;
  color: lightgray;
  font-size: 12px;
`;

const footerText = (homepageUrl) => `
<sub>Generated with [React Styleguidist](${homepageUrl}) for [Zopa's react-components](https://github.com/zopaUK/react-components). \
No permission is granted to use the trade names, trademarks, service marks, or product names of Zopa, except as required
for reasonable and customary use in describing the origin of this library and reproducing the content of the notice in
the [license](https://github.com/zopaUK/react-components/blob/master/LICENSE).</sub>
`;

export function StyleGuideRenderer({ title, version, homepageUrl, children, toc }) {
  return (
    <Container>
      <GlobalStyles />
      <Main>
        {children}
        <Footer>
          <Markdown text={footerText(homepageUrl)} />
        </Footer>
      </Main>
      <Sidebar>
        <LogoContainer>
          <Logo>{title}</Logo>
          <Version>{version}</Version>
        </LogoContainer>
        {toc}
      </Sidebar>
      <Ribbon />
    </Container>
  );
}

export default StyleGuideRenderer;
