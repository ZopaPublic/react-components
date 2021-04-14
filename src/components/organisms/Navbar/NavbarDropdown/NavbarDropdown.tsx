import React from 'react';
import styled, { css } from 'styled-components';

import { isArrowDown, isArrowUp, isEnter, isEscape, isSpace } from '../../../../helpers/keyboard-keys';
import { mod } from '../../../../helpers/utils';
import { minMedia } from '../../../../helpers/responsiveness';
import NavbarDropdownList from './NavbarDropdownList/NavbarDropdownList';
import NavbarLink from '../NavbarLink/NavbarLink';

const NavbarDropdownContainer = styled.li`
  position: relative;
  display: inline-block;
`;

export type ButtonLinkElement = HTMLButtonElement | HTMLAnchorElement;

export interface NavbarDropdownListContainer extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
}

const NavbarDropdownListContainer = styled.ul<NavbarDropdownListContainer>`
  ${minMedia.desktop`
    position: absolute;
    left: 50%;
    top: 50px;
    
    ${({ open }: NavbarDropdownListContainer) => css`
      ${
        open
          ? css`
              transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
              opacity: 1;
              visibility: visible;
              transform: translate(-50%, 0%);
            `
          : css`
              transition: opacity 0.3s, transform 0.3s, visibility 0.3s 0.3s;
              opacity: 0;
              visibility: hidden;
              transform: translate(-50%, -10%);
            `
      }}
    `}
  `}
`;

export interface OpenerProps {
  'aria-expanded': boolean;
  'aria-haspopup': true;
  ref: React.RefObject<ButtonLinkElement>;
  onClick: React.EventHandler<React.MouseEvent>;
  onKeyDown: React.EventHandler<React.KeyboardEvent>;
  tabIndex: number;
}

export type Item = any;

export interface ItemProps {
  ref: React.RefObject<HTMLLIElement>;
  onKeyDown: React.EventHandler<React.KeyboardEvent>;
  tabIndex: number;
}

export type GetItemProps = () => ItemProps;

export type Close = () => void;

export interface RenderItemProps {
  item: Item;
  getItemProps: GetItemProps;
  close: Close;
}
export interface DefaultNavbarDropdownProps {
  /** Function getting all the props and aria attributes meant to be spread on the dropdown item links */
  renderItem: ({ item, getItemProps, close }: RenderItemProps) => React.ReactNode;
}
export interface NavbarDropdownProps extends DefaultNavbarDropdownProps {
  /** unique id */
  id: string;
  /** dropdown label */
  label: string | React.ReactNode;
  /** array of data representing the dropdown items (e.g links) */
  items: Item[];
  'aria-label'?: string;
}

export interface NavbarDropdownState {
  cursor: number;
  open: boolean;
}

export default class NavbarDropdown extends React.Component<NavbarDropdownProps, NavbarDropdownState> {
  static defaultProps: DefaultNavbarDropdownProps = {
    renderItem: ({ item: { label, href }, getItemProps }) => (
      <NavbarLink href={href} {...getItemProps()} isDropdownLink>
        {label}
      </NavbarLink>
    ),
  };

  private readonly dropdownRef = React.createRef<HTMLLIElement>();
  private readonly openerRef = React.createRef<HTMLAnchorElement | HTMLButtonElement>();
  private readonly itemsRefs: React.RefObject<HTMLLIElement>[] = [];

  public constructor(props: NavbarDropdownProps) {
    super(props);
    this.itemsRefs = props.items.map(() => React.createRef<HTMLLIElement>());
    this.state = {
      cursor: 0,
      open: false,
    };
  }

  public componentDidMount() {
    document.addEventListener('focus', this.handleFocusOutside, true);
    document.addEventListener('mousedown', this.handleFocusOutside, true);
    document.addEventListener('keydown', this.handleEscapeKey, true);
  }

  public componentWillUnmount() {
    document.removeEventListener('focus', this.handleFocusOutside, true);
    document.removeEventListener('mousedown', this.handleFocusOutside, true);
    document.removeEventListener('keydown', this.handleEscapeKey, true);
  }

  public getOpenerProps = (): OpenerProps => ({
    'aria-expanded': this.state.open,
    'aria-haspopup': true,
    onClick: this.handleOpenerClick,
    onKeyDown: this.handleOpenerKeyDown,
    ref: this.openerRef,
    tabIndex: 0,
  });

  public getItemProps = (index: number) => () => ({
    onKeyDown: this.handleItemKeyDown,
    ref: this.itemsRefs[index],
    tabIndex: -1,
  });

  public render() {
    const { getOpenerProps, close } = this;
    const { renderItem, items, label, id, 'aria-label': ariaLabel } = this.props;
    const { open } = this.state;

    return (
      <NavbarDropdownContainer ref={this.dropdownRef}>
        <NavbarLink open={open} withChevron={true} href="#" {...getOpenerProps()}>
          {label}
        </NavbarLink>
        <NavbarDropdownListContainer open={open}>
          {/* To avoid an undefined aria-label the fallback to label was added when aria-label property is not defined */}
          {/* TODO remove fallback to label */}
          <NavbarDropdownList aria-label={ariaLabel ? ariaLabel : typeof label === 'string' ? label : undefined}>
            {items.map((item, index) => (
              <li key={`${id}-${index}`}>
                {renderItem({
                  close,
                  getItemProps: this.getItemProps(index),
                  item,
                })}
              </li>
            ))}
          </NavbarDropdownList>
        </NavbarDropdownListContainer>
      </NavbarDropdownContainer>
    );
  }

  public close = () => {
    this.setState({ open: false });
  };

  private handleOpenerKeyDown = (e: React.KeyboardEvent<ButtonLinkElement>) => {
    if (isArrowUp(e)) {
      e.preventDefault();
      this.setState(
        {
          cursor: this.itemsRefs.length - 1,
          open: true,
        },
        this.focusOnItem,
      );
    } else if (isArrowDown(e) || isEnter(e) || isSpace(e)) {
      e.preventDefault();
      this.setState(
        {
          cursor: 0,
          open: true,
        },
        this.focusOnItem,
      );
    }
  };

  private handleItemKeyDown = (e: React.KeyboardEvent<ButtonLinkElement>) => {
    const { length } = this.itemsRefs;
    if (isArrowUp(e)) {
      e.preventDefault();
      this.setState(
        (prevState) => ({
          cursor: mod(prevState.cursor - 1, length),
        }),
        this.focusOnItem,
      );
    } else if (isArrowDown(e)) {
      e.preventDefault();
      this.setState(
        (prevState) => ({
          cursor: mod(prevState.cursor + 1, length),
        }),
        this.focusOnItem,
      );
    }
  };

  private handleOpenerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  private focusOnItem = () => {
    const { cursor } = this.state;
    const itemRef = this.itemsRefs[cursor];
    if (itemRef && itemRef.current) {
      itemRef.current.focus();
    }
  };

  private handleFocusOutside = (e: Event) => {
    if (this.dropdownRef && this.dropdownRef.current && !this.dropdownRef.current.contains(e.target as Node)) {
      this.setState({
        cursor: 0,
        open: false,
      });
    }
  };

  private handleEscapeKey = (e: KeyboardEvent) => {
    if (this.state.open && isEscape(e)) {
      this.setState({ open: false, cursor: 0 }, () => {
        if (this.openerRef && this.openerRef.current) {
          this.openerRef.current.focus();
        }
      });
    }
  };
}
