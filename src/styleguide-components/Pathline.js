import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const PathLine = styled.span`
  font-family: 'Monaco', 'Menlo', 'Courier', 'monospace';
  font-size: 13px;
  color: lightgray;
  margin-right: 12px;
`;

export const PathlineRenderer = ({ children }) => (
  <Container>
    <PathLine>{children}</PathLine>
    <a href={`https://github.com/zopaUK/react-components/blob/master/${children}`}>
      <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.3.0/svg/mark-github.svg" alt="github icon" />
    </a>
  </Container>
);

export default PathlineRenderer;
