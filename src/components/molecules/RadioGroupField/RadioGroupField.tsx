import React, { useState } from 'react';
import styled from 'styled-components';
import RadioField from '../RadioField/RadioField';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Fieldset from '../../atoms/Fieldset/Fieldset';
import Legend from '../../atoms/Legend/Legend';
import Text from '../../atoms/Text/Text';

const RadioWrapper = styled.div`
  padding: 4px 0;
`;

interface RadioGroupFieldItem {
  value: string;
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export interface RadioGroupFieldProps {
  label: string;
  items: RadioGroupFieldItem[];
  onChange: (value: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  value?: string;
  isValid?: boolean;
  errorMessage?: string;
  className?: string;
}

const RadioGroupField = ({
  items,
  label,
  onChange,
  onBlur,
  value,
  disabled,
  isValid = false,
  errorMessage,
  className,
}: RadioGroupFieldProps) => {
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
        <Text weight="bold">{label}</Text>
      </Legend>
      {items.map((item) => {
        const checked = isControlled ? value === item.value : innerValue === item.value;
        return (
          <RadioWrapper key={item.value}>
            <RadioField
              disabled={disabled}
              value={item.value}
              onChange={handleChange(item.value)}
              onBlur={onBlur}
              label={item.label}
              checked={checked}
              isValid={checked && isValid}
            />
          </RadioWrapper>
        );
      })}
      {errorMessage && <ErrorMessage className="mt-1">{errorMessage}</ErrorMessage>}
    </Fieldset>
  );
};

export default RadioGroupField;
