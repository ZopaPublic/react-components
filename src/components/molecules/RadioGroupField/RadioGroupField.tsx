import React, { useState } from 'react';
import styled from 'styled-components';
import RadioField from '../RadioField/RadioField';
import Text from '../../atoms/Text/Text';

const Fieldset = styled.fieldset`
  border: 0;
  padding: 0.01em 0 0 0;
  margin: 0;
  min-width: 0;
`;

const Legend = styled(Text).attrs({
  as: 'legend',
  weight: 'semibold',
})`
  padding: 0;
  display: table;
  margin-bottom: 16px;
`;

const RadioWrapper = styled.div`
  padding: 4px 0;
`;

interface IRadioGroupFieldItem {
  value: string;
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export interface IRadioGroupFieldProps {
  label: string;
  items: IRadioGroupFieldItem[];
  onChange: (value: string) => void;
  disabled?: boolean;
  value?: string;
}

const RadioGroupField = ({ items, label, onChange, value, disabled }: IRadioGroupFieldProps) => {
  const defaultItem = items.find(({ defaultChecked }) => defaultChecked);

  const [innerValue, setInnerValue] = useState(
    defaultItem && defaultItem.defaultChecked ? defaultItem.value : undefined,
  );

  const isControlled = !!value;

  const handleChange = (value: string) => () => {
    if (!isControlled) {
      setInnerValue(value);
    }
    onChange(value);
  };

  return (
    <Fieldset>
      <Legend>{label}</Legend>
      {items.map(item => (
        <RadioWrapper key={item.value}>
          <RadioField
            disabled={disabled}
            value={item.value}
            onChange={handleChange(item.value)}
            label={item.label}
            checked={isControlled ? value === item.value : innerValue === item.value}
          />
        </RadioWrapper>
      ))}
    </Fieldset>
  );
};

export default RadioGroupField;
