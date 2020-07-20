import React, { useState } from 'react';
import styled from 'styled-components';
import FlexRow, { FlexRowProps } from '../../layout/FlexRow/FlexRow';
import FlexCol, { FlexColProps } from '../../layout/FlexCol/FlexCol';
import RadioField from '../RadioField/RadioField';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Fieldset from '../../atoms/Fieldset/Fieldset';
import Legend from '../../atoms/Legend/Legend';
import Text from '../../atoms/Text/Text';

const RadioWrapper = styled.div`
  padding: 4px 0;
`;

type RadioGroupFieldItem = {
  value: string;
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  showLoader?: boolean;
};

export type RadioGroupFieldProps = {
  label: string;
  items: RadioGroupFieldItem[];
  onChange: (value: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  showLoader?: boolean;
  value?: string;
  isValid?: boolean;
  errorMessage?: string;
  className?: string;
  flexColProps?: FlexColProps;
  flexRowProps?: FlexRowProps;
};

const RadioGroupField = ({
  items,
  label,
  onChange,
  onBlur,
  value,
  disabled,
  showLoader = false,
  isValid = false,
  errorMessage,
  className,
  flexRowProps = {},
  flexColProps = {},
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
      <FlexRow {...flexRowProps}>
        {items.map((item) => {
          const checked = isControlled ? value === item.value : innerValue === item.value;
          return (
            <FlexCol {...flexColProps} key={item.value}>
              <RadioWrapper>
                <RadioField
                  disabled={disabled}
                  value={item.value}
                  onChange={handleChange(item.value)}
                  onBlur={onBlur}
                  label={item.label}
                  checked={checked}
                  isValid={checked && isValid}
                  showLoader={checked && showLoader}
                />
              </RadioWrapper>
            </FlexCol>
          );
        })}
      </FlexRow>
      {errorMessage && <ErrorMessage className="mt-1">{errorMessage}</ErrorMessage>}
    </Fieldset>
  );
};

export default RadioGroupField;
