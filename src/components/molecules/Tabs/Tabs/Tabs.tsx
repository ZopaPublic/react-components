import React from 'react';
import Button from '../../../atoms/Button/Button';

interface Tab {
  title: string;
  active: boolean;
}

interface Tabs {
  tabs: Tab[];
}

export default function TabsContainer({ tabs }: Tabs) {
  return (
    <TabsContainer>
      {tabs.map((tab: Tab) => {
        return (
          <>
            <Button styling={tab.active ? 'secondary' : 'primary'}>{tab.title}</Button>
            <div>{tab.content}</div>
          </>
        );
      })}
    </TabsContainer>
  );
}
