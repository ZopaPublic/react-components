import React from 'react';
import styled from 'styled-components';
import { grid } from '../../../constants';

export type FlexAlignmentValues = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';

export type FlexJustificationValues =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit';

export type FlexDirectionValues = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';

export interface FlexRowProps {
  align?: FlexAlignmentValues;
  cols?: number;
  gutter?: number;
  justify?: FlexJustificationValues;
  direction?: FlexDirectionValues;
}

export interface FlexRow extends React.HTMLAttributes<HTMLDivElement>, FlexRowProps {}

const defaultProps: Partial<FlexRow> = {
  align: 'flex-start',
  cols: grid.cols,
  gutter: grid.gutter,
  justify: 'flex-start',
  direction: 'row',
};

const StyledFlexRow = styled.div<FlexRow>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction};
  margin-right: -${(props) => props.gutter}px;
  margin-left: -${(props) => props.gutter}px;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

const FlexRow: React.FunctionComponent<FlexRow> = ({ children, ...props }) => {
  const childrenWithProps = React.Children.toArray(children)
    .filter((child) => !!child)
    .map((child) => React.cloneElement(child as any, { gutter: props.gutter, cols: props.cols }));
  return <StyledFlexRow {...props}>{childrenWithProps}</StyledFlexRow>;
};

FlexRow.defaultProps = defaultProps;

export default FlexRow;
