import React, { useState } from 'react';
import styled from 'styled-components';
import FlexRow, { FlexRowProps } from '../../layout/FlexRow/FlexRow';
import FlexCol, { FlexColProps } from '../../layout/FlexCol/FlexCol';
import CheckboxField from '../CheckboxField/CheckboxField';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Fieldset from '../../atoms/Fieldset/Fieldset';
import Legend from '../../atoms/Legend/Legend';

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
  onBlur?: () => void;
  disabled?: boolean;
  isValid?: boolean;
  value?: Val;
  errorMessage?: string;
  className?: string;
  flexColProps?: FlexColProps;
  flexRowProps?: FlexRowProps;
  hideControl?: boolean;
  'data-automation'?: string;
}

const CheckboxGroupField = <Val extends Record<string, boolean>>({
  items,
  label,
  onChange,
  onBlur,
  value,
  disabled,
  isValid = false,
  errorMessage,
  className,
  flexRowProps = {},
  flexColProps = {},
  hideControl,
  'data-automation': dataAutomation,
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
    <Fieldset className={className}>
      <Legend>{label}</Legend>
      <FlexRow {...flexRowProps}>
        {items.map((item, index) => {
          const checked = value ? !!value[item.name] : !!innerValue[item.name];
          return (
            <FlexCol {...flexColProps} key={item.name.toString()}>
              <CheckboxWrapper>
                <CheckboxField
                  name={item.name.toString()}
                  disabled={disabled}
                  onChange={handleChange(item.name)}
                  onBlur={onBlur}
                  label={item.label}
                  checked={checked}
                  isValid={checked && isValid}
                  hideControl={hideControl}
                  data-automation={dataAutomation ? `${dataAutomation}-${index}` : undefined}
                />
              </CheckboxWrapper>
            </FlexCol>
          );
        })}
      </FlexRow>
      {errorMessage && <ErrorMessage className="mt-1">{errorMessage}</ErrorMessage>}
    </Fieldset>
  );
};

export default CheckboxGroupField;
