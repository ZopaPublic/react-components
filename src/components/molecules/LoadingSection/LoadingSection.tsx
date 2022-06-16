import React from 'react';
import styled from 'styled-components';
import Spinner from '../../atoms/Spinner/Spinner';
import Text from '../../atoms/Text/Text';
import { colors } from '../../../constants';

type LoadingSectionProps = {
  children: React.ReactNode;
  customSpinner?: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  height: 100%;
  min-height: 400px;
  margin: 0 auto;
  text-align: center;
`;

function PrimaryText({ children }: LoadingSectionProps) {
  return (
    <Text weight="bold" className="mt-6 mb-2">
      {children}
    </Text>
  );
}

function SecondaryText({ children }: LoadingSectionProps) {
  return (
    <Text color={colors.greyDark} className="px-4">
      {children}
    </Text>
  );
}

function LoadingSection({ children, customSpinner }: LoadingSectionProps) {
  return (
    <Container>
      {customSpinner ? customSpinner : <Spinner />}
      {children}
    </Container>
  );
}

LoadingSection.PrimaryText = PrimaryText;
LoadingSection.SecondaryText = SecondaryText;

export default LoadingSection;
