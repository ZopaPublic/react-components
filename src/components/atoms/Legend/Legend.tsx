import React from 'react';
import styled from 'styled-components';
import { spacing, typography } from '../../../constants';
import { useThemeContext } from '../../styles/Theme';

interface LegendProps {
  className?: string;
  children?: React.ReactNode;
}

const StyledLegend = styled.legend`
  padding: 0;
  display: table;
  margin-bottom: ${spacing['2']};
  font-weight: ${typography.weights.semiBold};
  font-family: ${typography.primary};
  letter-spacing: 0;
`;

const Legend = ({ className, children }: LegendProps) => {
  const theme = useThemeContext();

  return (
    <StyledLegend className={className} theme={theme}>
      {children}
    </StyledLegend>
  );
};

export default Legend;
