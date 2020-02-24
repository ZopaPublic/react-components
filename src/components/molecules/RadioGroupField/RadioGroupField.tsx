import React, { useState } from 'react';
import styled from 'styled-components';
import RadioField from '../RadioField/RadioField';
import Fieldset from '../../atoms/Fieldset/Fieldset';
import Legend from '../../atoms/Legend/Legend';
import Text from '../../atoms/Text/Text';

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
  const { value: defaultValue } = items.find(({ defaultChecked }) => defaultChecked) || {};

  const [innerValue, setInnerValue] = useState(defaultValue);

  const isControlled = !!value;

  const handleChange = (value: string) => () => {
    if (!disabled) {
      if (!isControlled) {
        setInnerValue(value);
      }
      onChange(value);
    }
  };

  return (
    <Fieldset>
      <Legend>
        <Text weight="semibold">{label}</Text>
      </Legend>
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
