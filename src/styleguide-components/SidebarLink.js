import styled from 'styled-components';

export const LinkRenderer = styled.a`
  &, &:link, &:visited {
    font-size: inherit;
    color: white;
    text-decoration: none;
  }
  &:hover, &:active {
    color: lightGray;
    cursor: pointer;
  },
`;

export default LinkRenderer;
