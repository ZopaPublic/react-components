import React, { useState } from 'react';
import styled from 'styled-components';
import CheckboxField from '../CheckboxField/CheckboxField';
import Fieldset from '../../atoms/Fieldset/Fieldset';
import Legend from '../../atoms/Legend/Legend';
import Text from '../../atoms/Text/Text';

const CheckboxWrapper = styled.div`
  padding: 4px 0;
`;

interface CheckboxGroupFieldItem<Val extends Record<string, boolean>> {
  label: string;
  name: keyof Val;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export interface CheckboxGroupFieldProps<Val extends Record<string, boolean>> {
  label: string;
  items: CheckboxGroupFieldItem<Val>[];
  onChange?: (value: Val) => void;
  disabled?: boolean;
  value?: Val;
}

const CheckboxGroupField = <Val extends Record<string, boolean>>({
  items,
  label,
  onChange,
  value,
  disabled,
}: CheckboxGroupFieldProps<Val>) => {
  const [innerValue, setInnerValue] = useState<Val>(
    items.reduce(
      (acc, { name, defaultChecked }) => ({
        ...acc,
        [name]: defaultChecked || false,
      }),
      {} as Val,
    ),
  );

  const handleChange = (name: keyof Val) => () => {
    if (disabled) {
      return;
    }
    if (!value) {
      const newValue = {
        ...innerValue,
        [name]: !innerValue[name],
      };
      setInnerValue(newValue);
      onChange && onChange(newValue);
    } else {
      onChange &&
        onChange({
          ...value,
          [name]: !value[name],
        });
    }
  };

  return (
    <Fieldset>
      <Legend>
        <Text weight="bold">{label}</Text>
      </Legend>
      {items.map(item => (
        <CheckboxWrapper key={item.name.toString()}>
          <CheckboxField
            name={item.name.toString()}
            disabled={disabled}
            onChange={handleChange(item.name)}
            label={item.label}
            checked={value ? !!value[item.name] : !!innerValue[item.name]}
          />
        </CheckboxWrapper>
      ))}
    </Fieldset>
  );
};

export default CheckboxGroupField;
