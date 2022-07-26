import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import Spinner from '../Spinner/Spinner';
import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colors, spacing } from '../../../constants';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type Styling = 'primary' | 'secondary';

export interface RoundButtonProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  styling?: Styling;
  $loading?: boolean;
  disabled?: boolean;
  icon?: IconDefinition;
  as?: 'button' | 'div' | 'a';
}

const colorMap = {
  primary: {
    text: colors.white,
    bg: colors.action,
    hover: `linear-gradient(90deg, #3B46C4 0%, #2732B0 100%)`,
  },
  secondary: {
    text: colors.actionDark,
    bg: colors.actionLight,
    hover: '#EEEFFB',
  },
};

const Wrapper = styled.div<RoundButtonProps>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  border: 0;
  background: transparent;
  padding: 0;

  .round-button-circle {
    display: flex;
    position: relative;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 14px;
    flex-direction: column;
    justify-content: flex-start;
    ${({ label }) => (label ? `margin-bottom: ${spacing[2]};` : '')}
    color: ${({ styling = 'primary' }) => colorMap[styling].text};
    background: ${({ styling = 'primary' }) => colorMap[styling].bg};

    &:focus:not(:active) {
      border: 1px solid ${colors.white};
      box-shadow: 0 0 ${spacing[1]} ${colors.actionPlain};
    }

    svg, img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    ${({ disabled, styling = 'primary' }) => {
      const disabledStyles = css<RoundButtonProps>`
        cursor: not-allowed;
        ${({ $loading }) => {
          if (!$loading) {
            return css`
              color: ${colors.grey};
              background: ${colors.greyLightest};
            `;
          }
        }}
      `;
      const enabledStyles = css`
        &:hover {
          background: ${colorMap[styling].hover};
        }
      `;
      return disabled ? disabledStyles : enabledStyles;
    }}
  }
`;

const StyledLabel = styled(Text)`
  font-size: 14px;
  display: block;
  color: ${colors.greyDarkest};
`;

const RoundButton = ({ $loading, styling = 'primary', disabled, label, icon, ...rest }: RoundButtonProps) => (
  <Wrapper styling={styling} $loading={$loading} disabled={$loading || disabled} {...rest} label={label}>
    <div className="round-button-circle">
      {$loading ? (
        <Spinner styling={styling === 'primary' ? 'negative' : 'secondary'} size="small" />
      ) : (
        icon && <Icon variant={icon} size="lg" />
      )}
    </div>
    {label && <StyledLabel>{label}</StyledLabel>}
  </Wrapper>
);

export default RoundButton;
