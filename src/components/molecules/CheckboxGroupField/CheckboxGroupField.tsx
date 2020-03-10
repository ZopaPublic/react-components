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
  onChange: (values: Record<string, boolean>) => void;
  disabled?: boolean;
  values?: Record<string, boolean>;
}

const CheckboxGroupField = ({ items, label, onChange, values, disabled }: ICheckboxGroupFieldProps) => {
  const [innerValues, setInnerValues] = useState<Record<string, boolean>>(
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
      if (!values) {
        const newValues = {
          ...innerValues,
          [name]: !innerValues[name],
        };
        setInnerValues(newValues);
        onChange(newValues);
      } else {
        onChange({
          ...values,
          [name]: !values[name],
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
            checked={values ? values[item.name] : innerValues[item.name]}
          />
        </CheckboxWrapper>
      ))}
    </Fieldset>
  );
};

export default CheckboxGroupField;
