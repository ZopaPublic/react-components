import React from 'react';
import styled from 'styled-components';
import Spinner from '../../atoms/Spinner/Spinner';
import Text from '../../atoms/Text/Text';
import { colors } from '../../../constants';

type LoadingSectionProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  min-height: 400px;
`;

function PrimaryText({ children }: LoadingSectionProps) {
  return (
    <Text weight="bold" className="my-6">
      {children}
    </Text>
  );
}

function SecondaryText({ children }: LoadingSectionProps) {
  return <Text color={colors.greyDark}>{children}</Text>;
}

function LoadingSection({ children }: LoadingSectionProps) {
  return (
    <Container>
      <Spinner />
      {children}
    </Container>
  );
}

LoadingSection.PrimaryText = PrimaryText;
LoadingSection.SecondaryText = SecondaryText;

export default LoadingSection;
