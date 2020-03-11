import React, { useState } from 'react';
import styled from 'styled-components';
import CheckboxField from '../CheckboxField/CheckboxField';
import Fieldset from '../../atoms/Fieldset/Fieldset';
import Legend from '../../atoms/Legend/Legend';
import Text from '../../atoms/Text/Text';

const CheckboxWrapper = styled.div`
  padding: 4px 0;
`;

interface ICheckboxGroupFieldItem {
  label: string;
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export interface ICheckboxGroupFieldProps {
  label: string;
  items: ICheckboxGroupFieldItem[];
  onChange: (value: Record<string, boolean>) => void;
  disabled?: boolean;
  value?: Record<string, boolean>;
}

const CheckboxGroupField = ({ items, label, onChange, value, disabled }: ICheckboxGroupFieldProps) => {
  const [innerValue, setInnerValue] = useState<Record<string, boolean>>(
    items.reduce(
      (acc, { name, defaultChecked }) => ({
        ...acc,
        [name]: defaultChecked || false,
      }),
      {},
    ),
  );

  const handleChange = (name: string) => () => {
    if (!disabled) {
      if (!value) {
        const newValue = {
          ...innerValue,
          [name]: !innerValue[name],
        };
        setInnerValue(newValue);
        onChange(newValue);
      } else {
        onChange({
          ...value,
          [name]: !value[name],
        });
      }
    }
  };

  return (
    <Fieldset>
      <Legend>
        <Text weight="semibold">{label}</Text>
      </Legend>
      {items.map(item => (
        <CheckboxWrapper key={item.name}>
          <CheckboxField
            name={item.name}
            disabled={disabled}
            onChange={handleChange(item.name)}
            label={item.label}
            checked={value ? value[item.name] : innerValue[item.name]}
          />
        </CheckboxWrapper>
      ))}
    </Fieldset>
  );
};

export default CheckboxGroupField;
