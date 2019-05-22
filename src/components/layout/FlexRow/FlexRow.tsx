import React from 'react';
import styled from 'styled-components';
import grid from '../../../constants/grid';

export type TFlexValues = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

export interface IFlexRowProps {
  align?: TFlexValues;
  cols?: number;
  gutter?: number;
  justify?: TFlexValues;
}

export interface IFlexRow extends React.HTMLAttributes<HTMLDivElement>, IFlexRowProps {}

const defaultProps: Partial<IFlexRow> = {
  align: 'flex-start',
  cols: grid.cols,
  gutter: grid.gutter,
  justify: 'flex-start',
};

const StyledFlexRow = styled.div<IFlexRow>`
  display: flex;
  flex-wrap: wrap;
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
