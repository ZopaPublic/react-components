import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';

export interface IInputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const StyledLabel = styled(Text)`
  display: block;
`;

const InputLabel = (props: IInputLabelProps) => <StyledLabel weight="bold" as="label" size={1} {...props} />;

export default InputLabel;
