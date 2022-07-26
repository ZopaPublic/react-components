import React, { HTMLAttributes } from 'react';
import { useTabs, TabsContext } from '../hooks';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {}

const TabsContainer = ({ children, ...rest }: TabsProps) => {
  const context = useTabs();

  return (
    <TabsContext.Provider value={context}>
      <div {...rest}>{children}</div>
    </TabsContext.Provider>
  );
};

export default TabsContainer;
