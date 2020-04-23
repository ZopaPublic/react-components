import styled from 'styled-components';

const CardActions = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  & > a,
  & > button {
    margin-right: 16px;
  }
  & > a:last-child,
  & > button:last-child {
    margin-right: 0;
  }
`;

export default CardActions;
