import React from 'react';
import styled from 'styled-components';
import { spacing, typography } from '../../../constants';
import { useThemeContext } from '../../styles/Theme';

interface LegendProps {
  className?: string;
  children?: React.ReactNode; // Add children prop
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
  // Destructure props including children
  const theme = useThemeContext();
  console.log('theme:', theme);
  return (
    <StyledLegend className={className} theme={theme}>
      {children}
    </StyledLegend>
  );
};

export default Legend;
