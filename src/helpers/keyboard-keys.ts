import React from 'react';

export type KeyCodesToKey = Record<number, string>;

const keyCodesToKey: KeyCodesToKey = {
  13: 'Enter',
  27: 'Escape',
  32: ' ',
  38: 'ArrowUp',
  40: 'ArrowDown',
};

export type Event = KeyboardEvent | React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>;

const isKey = (key: string) => (event: Event) => {
  const eventKey = event.key || keyCodesToKey[event.keyCode];
  return key === eventKey;
};

export const isArrowDown = isKey('ArrowDown');
export const isArrowUp = isKey('ArrowUp');
export const isArrowLeft = isKey('ArrowLeft');
export const isArrowRight = isKey('ArrowRight');
export const isEnter = isKey('Enter');
export const isEscape = isKey('Escape');
export const isSpace = isKey(' ');
