import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import Spinner from '../Spinner/Spinner';
import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colors, spacing } from '../../../constants';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type Styling = 'primary' | 'secondary';

export interface RoundButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  styling?: Styling;
  loading?: boolean;
  disabled?: boolean;
  icon?: IconDefinition;
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

export const roundButtonStyle = css<RoundButtonProps>`
  display: flex;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  width: ${spacing[9]};
  height: ${spacing[9]};
  flex-direction: column;
  margin: 0 ${spacing[6]};
  justify-content: flex-start;
  padding-top: 17px;
  margin-bottom: ${({ label }) => label && `${spacing[7]}`};
  color: ${({ styling = 'primary' }) => colorMap[styling].text};
  background: ${({ styling = 'primary' }) => colorMap[styling].bg};

  &:focus:not(:active) {
    border: 1px solid ${colors.white};
    box-shadow: 0 0 ${spacing[1]} ${colors.actionPlain};
  }

  ${({ disabled, styling = 'primary' }) => {
    const disabledStyles = css<RoundButtonProps>`
      cursor: not-allowed;
      ${({ loading }) => {
        if (!loading) {
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
`;

// This wrapper is to prevent html attribute warnings. See: https://styled-components.com/docs/faqs#why-am-i-getting-html-attribute-warnings
const ButtonWrapper = ({ loading, ...props }: any) => <button {...props} />;

const RoundButtonWrapper = styled(ButtonWrapper)`
  ${roundButtonStyle}
`;

const StyledLabel = styled(Text)`
  min-width: 200px;
  margin-top: ${spacing[6]};
`;

const RoundButton: React.FC<RoundButtonProps> = ({ loading, styling = 'primary', disabled, label, icon, ...rest }) => (
  <RoundButtonWrapper styling={styling} loading={loading} disabled={loading || disabled} {...rest} label={label}>
    {loading ? (
      <Spinner styling={styling === 'primary' ? 'negative' : 'secondary'} size="small" />
    ) : (
      icon && <Icon variant={icon} size="lg" />
    )}
    {label && <StyledLabel>{label}</StyledLabel>}
  </RoundButtonWrapper>
);

export default RoundButton;
