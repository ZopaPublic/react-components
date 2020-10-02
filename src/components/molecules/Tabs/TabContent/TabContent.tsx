import React, { ReactNode } from 'react';

interface TabContent {
  children: ReactNode;
}

export default function TabContent({ children }: TabContent) {
  return <>{children}</>;
}
