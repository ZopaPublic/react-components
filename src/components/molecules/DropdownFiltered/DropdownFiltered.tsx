import Downshift, { ControllerStateAndHelpers, DownshiftProps } from 'downshift';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import Icon from '../../atoms/Icon/Icon';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { IField, IInput } from '../../types';
import Option from './Option';
import Options, { IOptionsListProps } from './Options';
import { ISearchInputProps, SearchInput, SearchArrowWrap, SearchInputWrap } from './SearchInput';

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
            disabled={disabled}
          />
          <SearchArrowWrap>
            <Icon
              variant={faChevronDown}
              rotation={isOpen ? 180 : undefined}
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
