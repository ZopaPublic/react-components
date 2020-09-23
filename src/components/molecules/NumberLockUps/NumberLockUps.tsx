import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';

import Text from '../../atoms/Text/Text';
import { typography } from '../../../constants';
import { minMedia } from '../../../helpers/responsiveness';

interface StyleProps {
  /**
   * font size styling
   * @default `default`
   */
  numberFontSize?: 'small' | 'main';
  /**
   * Position for the numerical value
   * @default `top`
   */
  numberPosition?: 'top' | 'bottom' | 'right' | 'left';
}

export interface NumberLockUpsProps extends HTMLAttributes<HTMLDivElement>, StyleProps {
  title?: string;
  value: string;
}

const Container = styled.div<Required<Pick<StyleProps, 'numberPosition'>>>`
  display: flex;
  align-items: center;

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

const Title = styled(Text)<Required<StyleProps>>`
  order: ${({ numberPosition }) => (numberPosition === 'top' || numberPosition === 'left' ? 2 : 1)};

  ${({ numberFontSize }) =>
    numberFontSize === 'main'
      ? `
        font-size: ${typography.sizes.text.body}; 
        ine-height: ${typography.sizes.lineHeight.body};
      `
      : `
        font-size: ${typography.sizes.text.small}; 
        ine-height: ${typography.sizes.lineHeight.small};
      `}

  ${minMedia.desktop`
    ${css`
      ${({ numberFontSize }: StyleProps) =>
        numberFontSize === 'main'
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

const Value = styled(Text)<Required<StyleProps>>`
  order: ${({ numberPosition }) => (numberPosition === 'top' || numberPosition === 'left' ? 1 : 2)};

  ${({ numberFontSize }) =>
    numberFontSize === 'main'
      ? `
        font-size: ${typography.sizes.heading.h2}; 
        line-height: ${typography.sizes.lineHeight.h2};
        font-weight: ${typography.weights.extraBold};
      `
      : `
        font-size: ${typography.sizes.heading.h4}; 
        line-height: ${typography.sizes.lineHeight.h4};
        font-weight: ${typography.weights.bold};
      `}

  ${minMedia.desktop`
    ${css`
      ${({ numberFontSize }: StyleProps) =>
        numberFontSize === 'main'
          ? `
        font-size: ${typography.sizes.heading.h2}; 
        line-height: ${typography.sizes.lineHeight.h2};
      `
          : `
        font-size: ${typography.sizes.heading.h5}; 
        line-height: ${typography.sizes.lineHeight.h5};
      `}
    `}
  `}
`;

const NumberLockUps: React.FC<NumberLockUpsProps> = ({
  title,
  value,
  numberPosition = 'top',
  numberFontSize = 'main',
}) => {
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
    <Container numberPosition={numberPosition}>
      {title ? (
        <Title numberPosition={numberPosition} numberFontSize={numberFontSize}>
          {title}
        </Title>
      ) : null}
      <Value className={valueClassNames} numberPosition={numberPosition} numberFontSize={numberFontSize}>
        {value}
      </Value>
    </Container>
  );
};

export default NumberLockUps;
