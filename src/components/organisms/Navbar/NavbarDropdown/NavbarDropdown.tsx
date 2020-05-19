import React from 'react';
import styled, { css } from 'styled-components';

import { breakpoints } from '../../../../constants/breakpoints';
import { isArrowDown, isArrowUp, isEnter, isEscape, isSpace } from '../../../../helpers/keyboard-keys';
import { mod } from '../../../../helpers/utils';
import NavbarDropdownList from './NavbarDropdownList/NavbarDropdownList';

import Navbar from '../';

const NavbarDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export type TButtonLinkElement = HTMLButtonElement | HTMLAnchorElement;

export type TAlignedTo = 'left' | 'right';

export interface INavbarDropdownListContainer extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
}

const NavbarDropdownListContainer = styled.div<INavbarDropdownListContainer>`
  @media (min-width: ${breakpoints.desktop}px) {
    position: absolute;
    left: 50%;
    top: 50px;

    ${({ open }) =>
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
          `}
  }
`;

export interface IOpenerProps {
  'aria-expanded': boolean;
  'aria-haspopup': true;
  ref: React.RefObject<TButtonLinkElement>;
  onClick: React.EventHandler<React.MouseEvent>;
  onKeyDown: React.EventHandler<React.KeyboardEvent>;
  role: string;
  tabIndex: number;
}

export type IItem = any;

export type TGetOpenerProps = () => IOpenerProps;

export interface IRenderOpenerProps {
  open: boolean;
  getOpenerProps: TGetOpenerProps;
}

export interface IItemProps {
  ref: React.RefObject<HTMLLIElement>;
  onKeyDown: React.EventHandler<React.KeyboardEvent>;
  role: string;
  tabIndex: number;
}

export type TGetItemProps = () => IItemProps;

export type TClose = () => void;

export interface IRenderItemProps {
  item: IItem;
  getItemProps: TGetItemProps;
  close: TClose;
}
interface IDefaultNavbarDropdownProps {
  /** Function getting all the props and aria attributes meant to be spread on the dropdown item links */
  renderItem: ({ item, getItemProps, close }: IRenderItemProps) => React.ReactNode;
}
export interface INavbarDropdownProps extends IDefaultNavbarDropdownProps {
  /** unique id */
  id: string;
  /** Short description of the navbar component */
  ariaLabel: string;
  /** Function getting all the props and aria attributes meant to be spread on the opener button/link */
  renderOpener: ({ open, getOpenerProps }: IRenderOpenerProps) => React.ReactNode;
  /** Array of data representing the dropdown items (e.g links) */
  items: IItem[];
}

export interface INavbarDropdownState {
  cursor: number;
  right: number;
  open: boolean;
}

export default class NavbarDropdown extends React.Component<INavbarDropdownProps, INavbarDropdownState> {
  static defaultProps: IDefaultNavbarDropdownProps = {
    renderItem: ({ item: { label, href }, getItemProps }) => (
      <Navbar.Link href={href} {...getItemProps()} isDropdownLink>
        {label}
      </Navbar.Link>
    ),
  };

  private readonly dropdownRef = React.createRef<HTMLDivElement>();
  private readonly dropdownListRef = React.createRef<HTMLUListElement>();
  private readonly openerRef = React.createRef<HTMLAnchorElement | HTMLButtonElement>();
  private readonly itemsRefs: React.RefObject<HTMLLIElement>[] = [];

  public constructor(props: INavbarDropdownProps) {
    super(props);
    this.itemsRefs = props.items.map(() => React.createRef<HTMLLIElement>());
    this.state = {
      cursor: 0,
      open: false,
      right: this.getRightCoordinate(),
    };
  }

  public componentDidMount() {
    this.updateRightCoordinate();
    window.addEventListener('resize', this.updateRightCoordinate);
    document.addEventListener('focus', this.handleFocusOutside, true);
    document.addEventListener('mousedown', this.handleFocusOutside, true);
    document.addEventListener('keydown', this.handleEscapeKey, true);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateRightCoordinate);
    document.removeEventListener('focus', this.handleFocusOutside, true);
    document.removeEventListener('mousedown', this.handleFocusOutside, true);
    document.removeEventListener('keydown', this.handleEscapeKey, true);
  }

  public getOpenerProps = (): IOpenerProps => ({
    'aria-expanded': this.state.open,
    'aria-haspopup': true,
    onClick: this.handleOpenerClick,
    onKeyDown: this.handleOpenerKeyDown,
    ref: this.openerRef,
    role: 'menuitem',
    tabIndex: 0,
  });

  public getItemProps = (index: number) => () => ({
    onKeyDown: this.handleItemKeyDown,
    ref: this.itemsRefs[index],
    role: 'menuitem',
    tabIndex: -1,
  });

  public render() {
    const { getOpenerProps, close } = this;
    const { renderOpener, renderItem, items, ariaLabel, id } = this.props;
    const { open } = this.state;

    return (
      <NavbarDropdownContainer ref={this.dropdownRef}>
        {renderOpener({ open, getOpenerProps })}
        <NavbarDropdownListContainer open={open}>
          <NavbarDropdownList ref={this.dropdownListRef} role="menu" aria-label={ariaLabel}>
            {items.map((item, index) => (
              <li key={`${id}-${index}`} role="none">
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

  private handleOpenerKeyDown = (e: React.KeyboardEvent<TButtonLinkElement>) => {
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

  private handleItemKeyDown = (e: React.KeyboardEvent<TButtonLinkElement>) => {
    const { length } = this.itemsRefs;
    if (isArrowUp(e)) {
      e.preventDefault();
      this.setState(
        prevState => ({
          cursor: mod(prevState.cursor - 1, length),
        }),
        this.focusOnItem,
      );
    } else if (isArrowDown(e)) {
      e.preventDefault();
      this.setState(
        prevState => ({
          cursor: mod(prevState.cursor + 1, length),
        }),
        this.focusOnItem,
      );
    }
  };

  private updateRightCoordinate = () => {
    this.setState({ right: this.getRightCoordinate() });
  };

  private getRightCoordinate = () =>
    this.dropdownRef.current ? this.dropdownRef.current.getBoundingClientRect().left : 0;

  private handleOpenerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    this.setState(prevState => ({ open: !prevState.open }));
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
