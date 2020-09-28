import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';

import Text from '../../atoms/Text/Text';
import Heading from '../../atoms/Heading/Heading';
import { typography } from '../../../constants';
import { minMedia } from '../../../helpers/responsiveness';

interface StyleProps {
  /**
   * font size styling for title
   * @default `main`
   */
  labelFontSize?: 'small' | 'main';
  /**
   * font size styling for number
   * @default `main`
   */
  numberFontSize?: 'small' | 'main' | keyof typeof typography.sizes.heading;
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
type TitleProps = Pick<StyleProps, 'labelFontSize' | 'numberPosition'>;
type NumberProps = Pick<StyleProps, 'numberFontSize' | 'numberPosition' | 'semiBold'>;

export interface NumberTextProps extends HTMLAttributes<HTMLDivElement>, StyleProps {
  title?: string;
  value?: number;
  fallback?: string;
  formatterOptions?: Intl.NumberFormatOptions;
}

const Container = styled.div<Required<ContainerProps>>`
  display: flex;
  align-items: ${({ align }) => align};

  ${({ numberPosition }) => {
    if (numberPosition === 'left' || numberPosition === 'right') {
      return `
        flex-direction: row;
        justify-content: space-between;
      `;
    } else {
      return `
        flex-direction: column;
      `;
    }
  }}
`;

const Title = styled(Text)<Required<TitleProps>>`
  order: ${({ numberPosition }) => (numberPosition === 'top' || numberPosition === 'left' ? 2 : 1)};

  ${({ labelFontSize }) =>
    labelFontSize === 'main'
      ? `
        font-size: ${typography.sizes.text.small}; 
        line-height: ${typography.sizes.lineHeight.small};
      `
      : `
        font-size: ${typography.sizes.text.small}; 
        line-height: ${typography.sizes.lineHeight.small};
      `}

  ${minMedia.desktop`
    ${css`
      ${({ labelFontSize }: TitleProps) =>
        labelFontSize === 'main'
          ? `
        font-size: ${typography.sizes.text.lead}; 
        line-height: ${typography.sizes.lineHeight.lead};
      `
          : `
        font-size: ${typography.sizes.text.body}; 
        line-height: ${typography.sizes.lineHeight.body};
      `}
    `}
  `}
`;

const Value = styled(Heading).attrs(({ numberFontSize }: NumberProps) => ({
  size: numberFontSize !== 'small' && numberFontSize !== 'main' ? numberFontSize : undefined,
}))<Required<NumberProps>>`
  order: ${({ numberPosition }) => (numberPosition === 'top' || numberPosition === 'left' ? 1 : 2)};

  ${({ numberFontSize }) => {
    if (numberFontSize === 'main') {
      return `
        font-size: ${typography.sizes.heading.h2}; 
        line-height: ${typography.sizes.lineHeight.h2};
        font-weight: ${typography.weights.extraBold};
      `;
    }

    if (numberFontSize === 'small') {
      return `
        font-size: ${typography.sizes.heading.h4}; 
        line-height: ${typography.sizes.lineHeight.h4};
        font-weight: ${typography.weights.bold};
      `;
    }
  }}

  ${({ semiBold }) => (semiBold ? 'font-weight: 600' : null)}

  }
`;

const NumberText: React.FC<NumberTextProps> = ({
  title,
  value,
  fallback,
  numberPosition = 'top',
  numberFontSize = 'main',
  labelFontSize = 'main',
  formatterOptions = {},
  align = 'center',
  semiBold = false,
  ...rest
}) => {
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
        <Title numberPosition={numberPosition} labelFontSize={labelFontSize}>
          {title}
        </Title>
      ) : null}
      <Value
        as="span"
        className={valueClassNames}
        numberPosition={numberPosition}
        numberFontSize={numberFontSize}
        semiBold={semiBold}
      >
        {value !== undefined && value >= 0 ? numberFormatter(value) : fallback}
      </Value>
    </Container>
  );
};

export default NumberText;
