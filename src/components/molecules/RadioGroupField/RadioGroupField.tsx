import React, { useState } from 'react';
import styled from 'styled-components';
import RadioField from '../RadioField/RadioField';
import Text from '../../atoms/Text/Text';

const RadioWrapper = styled.div`
  padding: 4px 0;
`;

type RadioGroupFieldItem = {
  value: string;
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
};

type RadioGroupFieldProps = {
  label: string;
  items: RadioGroupFieldItem[];
  onChange: (value: string) => void;
  disabled?: boolean;
  value?: string;
};

const RadioGroupField = ({ items, label, onChange, value, disabled }: RadioGroupFieldProps) => {
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
    <div>
      <Text weight="semibold">{label}</Text>
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
    </div>
  );
};

export default RadioGroupField;
