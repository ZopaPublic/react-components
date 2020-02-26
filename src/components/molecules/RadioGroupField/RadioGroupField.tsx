import React, { useState, HTMLAttributes } from 'react';
import styled from 'styled-components';
import RadioField from '../RadioField/RadioField';
import Fieldset from '../../atoms/Fieldset/Fieldset';
import Legend from '../../atoms/Legend/Legend';
import Text from '../../atoms/Text/Text';

const RadioWrapper = styled.div`
  margin-bottom: 16px;
`;

interface IRadioGroupFieldItem extends HTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
}

export interface IRadioGroupFieldProps {
  label: string;
  items: IRadioGroupFieldItem[];
  onChange: (value: string) => void;
  disabled?: boolean;
  value?: string;
  className?: string;
}

const RadioGroupField = ({ items, label, onChange, value, disabled, className }: IRadioGroupFieldProps) => {
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
    <Fieldset className={className}>
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
