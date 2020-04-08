import Downshift, { ControllerStateAndHelpers, DownshiftProps } from 'downshift';
import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import InputText from '../../atoms/InputText/InputText';
import Chevron from '../../icons/Chevron/Chevron';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { IField, IInput } from '../../types';

export interface ISearchInputProps {
  isOpen?: boolean;
}

export interface IOptionsListProps {
  optionsListMaxHeight?: string;
}

export interface IOption extends React.HTMLAttributes<HTMLDivElement> {
  highLighted?: boolean;
  selected?: boolean;
}

export interface IDropdownItem {
  value: string;
}

export interface IDropdownFilteredProps
  extends DownshiftProps<IDropdownItem>,
    ISearchInputProps,
    IOptionsListProps,
    Omit<IInput, 'onSelect' | 'onChange' | 'children'>,
    IField {
  /**
   * Native props for the native label element.
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * Items for the options
   */
  items: IDropdownItem[];
}

const SearchInput = styled(InputText)<ISearchInputProps & IInput>`
  margin: 0;
  padding: 8px 32px 8px 16px;
  ${({ hasError }) => !hasError && 'margin-bottom: 0'};
  ${({ isOpen }) =>
    isOpen &&
    css`
      box-shadow: 0 4px 1px 2px rgba(28, 33, 57, 0.15);
      border-radius: 6px 6px 0 0;
      border-color: ${colors.actionPlain};
      border-bottom: 0;

      /* Hack to simulate a border in the bottom in the input as :after
         pseudo-elements doesn't work with inputs */
      background: linear-gradient(${colors.greyLightest}, ${colors.greyLightest});
      background-size: 95% 1px;
      background-position: bottom center;
      background-repeat: no-repeat;
      &:focus {
        border-bottom: 0;
      }
    `};
`;

const Option = styled.div<IOption>`
  cursor: pointer;
  padding: 8px;
  line-height: 32px;
  font-size: ${typography.sizes.text.body};
  font-weight: 600;
  color: ${colors.greyDarkest};
  ${({ selected, highLighted }) =>
    (selected || highLighted) &&
    css`
      color: ${colors.white};
      background-color: ${colors.actionPlain};
    `};
`;

const Options = styled.div<IOptionsListProps>`
  z-index: 1;
  width: 100%;
  background: ${colors.white};
  border: 2px solid ${colors.actionPlain};
  border-top: 0;
  position: absolute;
  overflow: auto;
  border-radius: 0 0 6px 6px;
  max-height: ${({ optionsListMaxHeight = 'auto' }) => optionsListMaxHeight};
  box-shadow: 0 2px 1px 2px rgba(28, 33, 57, 0.15);
`;

const SearchInputWrap = styled.div`
  position: relative;
`;

const SearchArrowWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  cursor: pointer;
  display: flex;
`;

const FieldError = styled(ErrorMessage)`
  margin-top: 5px;
`;

export default class DropdownFiltered extends React.PureComponent<IDropdownFilteredProps> {
  public render() {
    return (
      <SizedContainer size={this.props.inputSize}>
        <Downshift itemToString={item => (item ? item.value : '')} {...this.props}>
          {this.dropdownContent}
        </Downshift>
      </SizedContainer>
    );
  }

  private searchMatch = (itemValue: string, inputValue: string) =>
    itemValue && itemValue.toLowerCase().includes(inputValue.toLowerCase());

  private dropdownContent = (options: ControllerStateAndHelpers<IDropdownItem>) => {
    const {
      clearSelection,
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      inputValue,
      isOpen,
      openMenu,
      closeMenu,
      selectedItem,
    } = options;

    const {
      errorMessage,
      items = [],
      label,
      optionsListMaxHeight,
      name,
      labelProps,
      isValid,
      disabled,
      onChange,
      onFocus,
      ...rest
    } = this.props;
    if (!name) {
      throw Error('Name must be set in inputProps. Check the docs.');
    }

    const filteredResults = items.filter(({ value }) => this.searchMatch(value, inputValue || ''));

    const showError = errorMessage && !isOpen;

    return (
      <div>
        {label && (
          <InputLabel {...getLabelProps({ ...labelProps })} htmlFor={`text-id-${name}`}>
            {label}
          </InputLabel>
        )}
        <SearchInputWrap>
          <SearchInput
            {...(getInputProps as any)({
              // Types doesn't allow custom data-* attrs
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value === '') {
                  clearSelection();
                }
              },
              onFocus: () => {
                openMenu();
              },
              ...rest,
            })}
            name={name}
            id={`text-id-${name}`}
            isValid={isValid}
            hasError={showError}
            isOpen={isOpen}
          />
          <SearchArrowWrap>
            <Chevron
              direction={isOpen ? 'up' : 'down'}
              color={disabled ? colors.greyLight : colors.actionPlain}
              onClick={() => {
                if (!disabled) {
                  if (isOpen) {
                    closeMenu();
                  } else {
                    clearSelection(() => {
                      openMenu();
                    });
                  }
                }
              }}
              aria-label={isOpen ? 'close.menu' : 'open.menu'}
            />
          </SearchArrowWrap>
          {isOpen && (
            <Options {...getMenuProps()} optionsListMaxHeight={optionsListMaxHeight}>
              {filteredResults.map((item, index) => (
                <Option
                  {...getItemProps({ index, item })}
                  key={item.value}
                  highLighted={highlightedIndex === index}
                  selected={selectedItem === item}
                  disabled={disabled}
                >
                  {item.value}
                </Option>
              ))}
            </Options>
          )}
        </SearchInputWrap>
        {showError && <FieldError data-automation={`ZA.error-${name}`}>{errorMessage}</FieldError>}
      </div>
    );
  };
}
