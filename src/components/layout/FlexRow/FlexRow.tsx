import React from 'react';
import styled from 'styled-components';
import grid from '../../../constants/grid';

export type TFlexValues = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

export type TFlexDirection = 'row' | 'row-reverse';

export interface IFlexRowProps {
  align?: TFlexValues;
  cols?: number;
  gutter?: number;
  justify?: TFlexValues;
  direction?: TFlexDirection;
}

export interface IFlexRow extends React.HTMLAttributes<HTMLDivElement>, IFlexRowProps {}

const defaultProps: Partial<IFlexRow> = {
  align: 'flex-start',
  cols: grid.cols,
  gutter: grid.gutter,
  justify: 'flex-start',
  direction: 'row',
};

const StyledFlexRow = styled.div<IFlexRow>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.direction};
  margin-right: -${props => props.gutter}px;
  margin-left: -${props => props.gutter}px;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;

const FlexRow: React.FunctionComponent<IFlexRow> = ({ children, ...props }) => {
  const childrenWithProps = React.Children.toArray(children)
    .filter(child => !!child)
    .map(child => React.cloneElement(child as any, { gutter: props.gutter, cols: props.cols }));
  return <StyledFlexRow {...props}>{childrenWithProps}</StyledFlexRow>;
};

FlexRow.defaultProps = defaultProps;

export default FlexRow;
