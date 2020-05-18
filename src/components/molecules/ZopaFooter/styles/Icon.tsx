import styled from 'styled-components';

export const Icon = styled.span<{ variant: string }>`
  display: inline-block;
  width: 32px;
  height: 32px;
  background: url(${({ variant }) => variant}) no-repeat;
`;
