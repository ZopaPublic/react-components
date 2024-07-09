import * as React from 'react';

export interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: React.ReactNode) => JSX.Element;
}

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: React.PropsWithChildren<ConditionalWrapperProps>) => (condition ? wrapper(children) : <>{children}</>);
