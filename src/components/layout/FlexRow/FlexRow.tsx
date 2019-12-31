import React from 'react';
import styled from 'styled-components';
import grid from '../../../constants/grid';

export type TFlexAlignmentValues =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';

export type TFlexJustificationValues =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit';

export type TFlexDirectionValues = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';

export interface IFlexRowProps {
  align?: TFlexAlignmentValues;
  cols?: number;
  gutter?: number;
  justify?: TFlexJustificationValues;
  direction?: TFlexDirectionValues;
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
