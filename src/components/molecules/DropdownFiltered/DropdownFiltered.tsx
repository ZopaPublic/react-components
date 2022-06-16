import Downshift, { ControllerStateAndHelpers, DownshiftProps } from 'downshift';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import Icon from '../../atoms/Icon/Icon';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import unbrandedChevron from '../../../content/images/unbranded-chevron.svg';
import { FieldProps, InputProps } from '../../types';
import { useThemeContext } from '../../styles/Theme';
import Option from './Option';
import Options, { OptionsListProps } from './Options';
import { SearchInputProps, SearchInput } from './SearchInput';

export interface DropdownItem {
  value: string;
}

export interface DropdownFilteredProps
  extends DownshiftProps<DropdownItem>,
    SearchInputProps,
    OptionsListProps,
    Omit<InputProps, 'onSelect' | 'onChange' | 'children'>,
    FieldProps {
  /**
   * Native props for the native label element.
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * Items for the options
   */
  items: DropdownItem[];
}

const FieldError = styled(ErrorMessage)`
  margin-top: 5px;
`;

export const SearchInputWrap = styled.div`
  position: relative;
`;

export const CustomIcon = styled.div<{ isOpen: boolean }>`
  background: transparent url(${unbrandedChevron}) no-repeat center;
  background-size: 60%;
  width: 100%;
  height: 100%;
  color: black;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'none')};
`;

const DropdownFiltered = (props: DropdownFilteredProps) => {
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
    inputSize,
    ...rest
  } = props;

  const searchMatch = (itemValue: string, inputValue: string) =>
    itemValue && itemValue.toLowerCase().includes(inputValue.toLowerCase());

  const theme = useThemeContext();

  return (
    <SizedContainer size={inputSize}>
      <Downshift itemToString={(item) => (item ? item.value : '')} {...props}>
        {({
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
        }: ControllerStateAndHelpers<DropdownItem>) => {
          const filteredResults = items.filter(({ value }) => searchMatch(value, inputValue || ''));

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
                  isOpen={isOpen && !!filteredResults.length}
                  disabled={disabled}
                  theme={theme}
                  endIcon={
                    theme.input.searchInput.customIcon ? (
                      <CustomIcon
                        isOpen={isOpen}
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
                    ) : (
                      <Icon
                        variant={faSort}
                        rotation={isOpen ? 180 : undefined}
                        color={colors.grey}
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
                    )
                  }
                />
                {isOpen && !!filteredResults.length && (
                  <Options {...getMenuProps()} optionsListMaxHeight={optionsListMaxHeight} theme={theme}>
                    {filteredResults.map((item, index) => (
                      <Option
                        {...getItemProps({ index, item })}
                        key={item.value}
                        highLighted={highlightedIndex === index}
                        selected={selectedItem === item}
                        disabled={disabled}
                        theme={theme}
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
        }}
      </Downshift>
    </SizedContainer>
  );
};

export default DropdownFiltered;
