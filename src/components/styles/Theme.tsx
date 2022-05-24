import { faCheckCircle, faExclamationCircle, faInfoCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import Icon from '../atoms/Icon/Icon';
import { CardStyling } from '../organisms/Card/Card/Card';

interface ButtonTheme {
  text: string;
  bg: string;
  hover: string;
}

interface ButtonsTheme {
  primary: ButtonTheme;
  secondary: ButtonTheme;
  link: ButtonTheme;
}

export type AlertLevel = 'info' | 'alert' | 'warning' | 'success' | 'brand';

interface CardInfo {
  headingSize: string;
  textSize: string;
  boxShadowStyle: string;
  borderStyle: string;
  backgroundStyle: string;
}

type AlertTheme = Record<
  AlertLevel,
  {
    icon: string;
    background: string;
    text: string;
    component: FC;
  }
>;

type CardTheme = Record<CardStyling, CardInfo>;

interface ErrorMessageTheme {
  textColor: string;
  backgroundColor: string;
}

interface InputTheme {
  color: string;
  borderRadius: string;
  hover: {
    border: string;
    boxShadow: string;
  };
  disabled: {
    color: string;
    backgroundColor: string;
  };
  borderColorByStatus: {
    error: string;
    valid: string;
    disabled: string;
    default: string;
  };
}

interface TypographyTheme {
  primary: string;
  text: {
    color: string;
    sizes: {
      lead: string;
      body: string;
      small: string;
    };
  };
  heading: {
    sizes: {
      display: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  };
  lineHeight: {
    display: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    lead: string;
    body: string;
    small: string;
  };
  letterSpacingMap: {
    display: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  weights: {
    regular: number;
    semiBold: number;
    bold: number;
    extraBold: number;
  };
}

export interface AppTheme {
  alert: AlertTheme;
  button: ButtonsTheme;
  card: CardTheme;
  errorMessage: ErrorMessageTheme;
  input: InputTheme;
  typography: TypographyTheme;
}

export interface AppThemeProps {
  theme: AppTheme;
}

export const zopaTheme: AppTheme = {
  alert: {
    brand: {
      icon: colors.brand,
      background: colors.brandLight,
      text: colors.greyDarkest,
      component: () => <Icon variant={faInfoCircle} />,
    },
    info: {
      icon: colors.grey,
      background: colors.greyLighter,
      text: colors.greyDarkest,
      component: () => <Icon variant={faInfoCircle} />,
    },
    alert: {
      icon: colors.alert,
      background: colors.alertLight,
      text: colors.alertDark,
      component: () => <Icon variant={faMinusCircle} />,
    },
    warning: {
      icon: colors.warning,
      background: colors.warningLight,
      text: colors.warningDark,
      component: () => <Icon variant={faExclamationCircle} />,
    },
    success: {
      icon: colors.success,
      background: colors.successLight,
      text: colors.successDark,
      component: () => <Icon variant={faCheckCircle} />,
    },
  },
  button: {
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
    link: {
      text: colors.actionDark,
      bg: 'transparent',
      hover: '#EAEBFA',
    },
  },
  card: {
    primary: {
      headingSize: typography.sizes.heading.h5,
      textSize: typography.sizes.text.body,
      boxShadowStyle: `0 1px 0 0 ${colors.greyLight}`,
      borderStyle: `1px solid ${colors.greyLighter}`,
      backgroundStyle: `${colors.white};`,
    },
    secondary: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: `0 1px 0 0 ${colors.greyLight}`,
      borderStyle: `1px solid ${colors.greyLighter}`,
      backgroundStyle: `${colors.white};`,
    },
    brand: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: 'none',
      borderStyle: `1px solid ${colors.brand}`,
      backgroundStyle: `${colors.brandLight};`,
    },
    action: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: 'none',
      borderStyle: `1px solid ${colors.greyLighter}`,
      backgroundStyle: `${colors.white};`,
    },
    info: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: 'none',
      borderStyle: `1px solid ${colors.greyLightest}`,
      backgroundStyle: `${colors.greyLightest}`,
    },
  },
  errorMessage: {
    textColor: `${colors.alertDark}`,
    backgroundColor: `${colors.alertLight}`,
  },
  input: {
    color: colors.grey,
    borderRadius: `8px`,
    hover: {
      border: colors.brand,
      boxShadow: `0 0 4px 0 ${colors.brand}`,
    },
    disabled: {
      color: colors.greyDark,
      backgroundColor: colors.greyLightest,
    },
    borderColorByStatus: {
      error: colors.alert,
      valid: colors.success,
      disabled: colors.greyLight,
      default: colors.grey,
    },
  },
  typography: {
    primary: `"Open Sans", Roboto, Helvetica, Arial, sans-serif`,
    text: {
      color: colors.greyDarkest,
      sizes: {
        lead: '18px',
        body: '16px',
        small: '14px',
      },
    },
    heading: {
      sizes: {
        display: '68px',
        h1: '46px',
        h2: '38px',
        h3: '28px',
        h4: '24px',
        h5: '18px',
        h6: '16px',
      },
    },
    lineHeight: {
      display: '76px',
      h1: '54px',
      h2: '46px',
      h3: '36px',
      h4: '32px',
      h5: '26px',
      h6: '24px',
      lead: '26px',
      body: '24px',
      small: '20px',
    },
    letterSpacingMap: {
      display: '-2.86px',
      h1: '-1.25px',
      h2: '-0.85px',
      h3: '-0.45px',
      h4: '-0.25px',
      h5: '-0.02px',
      h6: '-0.01px',
    },
    weights: {
      regular: 400,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
};

const ThemeContext = React.createContext<AppTheme>(zopaTheme);
ThemeContext.displayName = 'ThemeContext';

export const useThemeContext = () => React.useContext(ThemeContext);

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Partial<AppTheme> | undefined;
}) => {
  const mergedTheme = { ...zopaTheme, ...(theme || {}) };
  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
};
