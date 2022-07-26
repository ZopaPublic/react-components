import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';

import Text from '../../atoms/Text/Text';
import Heading from '../../atoms/Heading/Heading';
import { typography } from '../../../constants';

interface StyleProps {
  /**
   * font size styling for title
   * @default `body`
   */
  labelFontSize?: keyof typeof typography.sizes.text;
  /**
   * font size styling for number
   * @default `main`
   */
  numberFontSize?: 'main' | 'large' | 'lead' | 'small';
  /**
   * Position for the numerical value
   * @default `top`
   */
  numberPosition?: 'top' | 'bottom' | 'right' | 'left';
  /**
   * Override font weight for number and set to semi bold
   */
  semiBold?: boolean;
  /**
   * Where the rendered text should be aligned to.
   * @default 'center'
   */
  align?: 'left' | 'right' | 'center';
}

type ContainerProps = Pick<StyleProps, 'numberPosition' | 'align'>;
type TitleProps = Pick<StyleProps, 'numberPosition'>;
type NumberProps = Pick<StyleProps, 'numberFontSize' | 'numberPosition' | 'semiBold'>;

const numberFontStyles = {
  main: 'h1',
  large: 'h2',
  lead: 'h4',
  small: 'h5',
};

export interface NumberTextProps extends HTMLAttributes<HTMLDivElement>, StyleProps {
  title?: string;
  value?: number;
  fallback?: string;
  formatterOptions?: Intl.NumberFormatOptions;
  titleClassName?: string;
}

const Container = styled.div<Required<ContainerProps>>`
  display: flex;
  align-items: ${({ align }) => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      default:
        return align;
    }
  }};

  ${({ numberPosition }) => {
    if (numberPosition === 'left' || numberPosition === 'right') {
      return css`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      `;
    } else {
      return css`
        flex-direction: column;
        justify-content: center;
      `;
    }
  }}
`;

const Title = styled(Text)<Required<TitleProps>>`
  order: ${({ numberPosition }) => (numberPosition === 'top' || numberPosition === 'left' ? 2 : 1)};
`;

const Value = styled(Heading).attrs(({ numberFontSize = 'main' }: NumberProps) => ({
  size: numberFontStyles[numberFontSize],
}))<Required<NumberProps>>`
  order: ${({ numberPosition }) => (numberPosition === 'top' || numberPosition === 'left' ? 1 : 2)};
  ${({ semiBold }) => (semiBold ? 'font-weight: 600' : null)}
`;

const NumberText = ({
  title,
  value,
  fallback,
  numberPosition = 'top',
  labelFontSize = 'body',
  numberFontSize = 'main',
  formatterOptions = {},
  align = 'center',
  semiBold = false,
  titleClassName,
  ...rest
}: NumberTextProps) => {
  const numberFormatter = (value: number) => new Intl.NumberFormat('en-GB', formatterOptions).format(value);

  const valueClassNames = classnames({
    'mt-2': numberPosition === 'bottom' && numberFontSize === 'main',
    'mt-1': numberPosition === 'bottom' && numberFontSize === 'small',
    'mb-2': numberPosition === 'top' && numberFontSize === 'main',
    'mb-1': numberPosition === 'top' && numberFontSize === 'small',
    'pr-2': numberPosition === 'left' && numberFontSize === 'main',
    'pr-1': numberPosition === 'left' && numberFontSize === 'small',
    'pl-2': numberPosition === 'right' && numberFontSize === 'main',
    'pl-1': numberPosition === 'right' && numberFontSize === 'small',
  });

  return (
    <Container numberPosition={numberPosition} align={align} {...rest}>
      {title ? (
        <Title numberPosition={numberPosition} size={labelFontSize} className={titleClassName}>
          {title}
        </Title>
      ) : null}
      <Value
        forwardedAs="span"
        className={valueClassNames}
        numberPosition={numberPosition}
        numberFontSize={numberFontSize}
        semiBold={semiBold}
      >
        {value !== undefined ? numberFormatter(value) : fallback}
      </Value>
    </Container>
  );
};

export default NumberText;
