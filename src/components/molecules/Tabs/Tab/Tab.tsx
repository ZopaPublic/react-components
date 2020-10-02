import React from 'react';
import Button from '../../../atoms/Button/Button';

interface Tab {
  title: string;
  active: boolean;
}

export default function Tab({ title, active }: Tab) {
  const onClick = () => {
    console.log('clicked')
  }
  return <Button styling={active ? 'secondary' : 'primary'} onClick={onClick}>{title}</Button>;
}
