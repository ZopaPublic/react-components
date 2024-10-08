import {
  faCheckCircle,
  faExclamationCircle,
  faInfoCircle,
  faMinusCircle,
  faPoundSign,
  fas,
} from '@fortawesome/free-solid-svg-icons';
import { IconPrefix, IconName, library } from '@fortawesome/fontawesome-svg-core';
import React, { ComponentType, ReactElement } from 'react';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import Icon from '../../atoms/Icon/Icon';
import { CardStyling } from '../../organisms/Card/Card/Card';
import { Severity } from '../../atoms/Alert/Alert';
import { spacing } from '../../../constants';
import { ProductTemplateV2 } from '../../templates/ProductTemplate/ProductTemplate/ProductTemplateV2';

export type CustomIconVariant = 'circle-exclamation' | 'circle-exclamation2' | 'info-circle' | 'triangle-exclamation';

export interface ButtonTheme {
  text: string;
  bg: string;
  border?: string;
  hover: {
    text: string;
    bg: string;
    border: string;
  };
  focus: {
    border: string;
    boxShadow: string;
  };
  active?: {
    bg?: string;
    border?: string;
    opacity?: string;
    text?: string;
  };
  disabled?: {
    text?: string;
    bg?: string;
    border?: string;
  };
}

export interface ButtonsTheme {
  primary: ButtonTheme;
  secondary: ButtonTheme;
  link: ButtonTheme;
  borderRadius?: string;
  padding?: string;
  text?: {
    size?: string;
    height?: string;
    weight?: number;
  };
}

export type AlertTheme = Record<
  Severity,
  {
    icon: string;
    background: string;
    border: string;
    text: string;
    component?: () => ReactElement;
    faVariant?: { prefix: IconPrefix; iconName: IconName };
    customVariant?: { iconName: Exclude<CustomIconVariant, 'circle-exclamation2'>; color: string };
  }
>;

export interface CardInfo {
  headingSize: string;
  textSize: string;
  boxShadowStyle: string;
  borderStyle: string;
  backgroundStyle: string;
  borderRadius: string;
}

export type CardTheme = Record<CardStyling, CardInfo>;

export interface ErrorMessageTheme {
  textColor: string;
  backgroundColor: string;
  padding: string;
  icon: boolean;
  iconVariant?: { name: Extract<CustomIconVariant, 'circle-exclamation2'>; color: string };
}

export interface FooterTheme {
  bgColor: string;
  className: string;
  showFooterLinks: boolean;
  showLogoBlock: boolean;
  showSocialBlock: boolean;
  showLegalBlock: boolean;
  showDivider?: boolean;
  legalBlock: {
    isFullWidth: boolean;
    color: string;
  };
  dividerColor?: string;
  customLinksColor?: string;
  customLinksHoverColor?: string;
  customSocialBlock?: {
    href: string;
    ariaLabel: string;
    title: string;
    icon: ComponentType;
    hoverColor?: string;
  }[];
}

export interface LabelTheme {
  margin: string;
}

export interface OptionTheme {
  margin: string;
}

export interface LegendTheme {
  className?: string;
  lineHeightClassName?: string;
}

export interface SitTightTheme {
  primaryTextClassName: string;
  secondaryTextClassName: string;
}

export interface InputTheme {
  color: string;
  startIcon: React.ReactNode;
  iconWidth: string;
  startIconPaddingLeft: string;
  endIconPaddingRight: string;
  padding: string;
  labelLineHeight?: string;
  labelFontWeight: number;
  fontLineHeight?: string;
  placeholderColor: string;
  borderRadius: string;
  boxShadow: string;
  hover: {
    border: string;
    error: string;
    boxShadow: string;
    backgroundColor: string;
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
  startIconColor: string;
  iconBackgroundColor: string;
  searchInput: {
    border: string;
    boxShadow: string;
    borderRadius: string;
    borderColor: string;
    customIcon: boolean;
    endIconColor?: string;
    options: {
      borderRadius: string;
      hover: {
        color: string;
        backgroundColor: string;
      };
    };
  };
  checkBox: {
    defaultColor: string;
    borderRadius: string;
    label: {
      borderRadius: string;
      backgroundColor: string;
    };
    customIcon: boolean;
    checked: {
      boxShadow: string;
    };
    borderColorByStatus: {
      error: string;
      valid: string;
      disabled: string;
      default: string;
    };
    checkboxBackgroundColor: {
      checked: string;
      hover: string;
      disabled: string;
    };
  };
}

export interface InputRangeTheme {
  justifyContent: string;
  button: {
    borderRadius?: string;
    paddingMobile: string;
    padding: string;
    width: string;
    height: string;
    mobileWidth: string;
    mobileHeight: string;
  };
  slider: {
    lowerColor: string;
    upperColor: string;
  };
  thumb: {
    thumbDiameterMobile: number;
    thumbDiameter: number;
    thumbIcon: boolean;
    thumbColor: string;
    marginTop: number;
  };
}

export interface LinkTheme {
  color: string;
  weight: number;
  hover: {
    color: string;
  };
  active: {
    color: string;
  };
  disableTargetIcon: boolean;
}

export interface NavbarTheme {
  iconContainer: {
    display: string;
  };
  /* @deprecated */
  logo: {
    render: boolean;
  };
  mobile: {
    minHeight: string;
    bgColor: string;
  };
  containerClassName?: string;
  logoContainer?: {
    desktopMinMedia: {
      width?: string;
      height?: string;
      paddingLeft?: string;
      justifyContent?: string;
    };
    desktopMaxMedia: {
      display?: string;
      alignItems?: string;
    };
  };
  layoutInner?: {
    justifyContent?: string;
  };
  // For theme that use a single link
  href?: string;
}

export interface ProgressBarTheme {
  color: string;
}

export interface ScrollableAreaTheme {
  scrollBarThumb: {
    borderRadius: string;
    border: string;
    bgColor: string;
  };
  scrollBarTrack: {
    background: string;
    borderRadius: string;
  };
}

export interface ProductTemplate {
  title?: {
    backgroundColor?: string;
    className?: string;
  };
  sectionHeader?: {
    className?: string;
  };
  subHeading?: {
    className?: string;
  };
}

export type { ProductTemplateV2 } from '../../templates/ProductTemplate/ProductTemplate/ProductTemplateV2';

export interface SpinnerTheme {
  spinnerTheme: 'zopa' | 'unbranded';
  customSpinner?: {
    color: string;
    negativeColor: string;
    fillWidth: string;
    speed: number;
  };
}

export interface TypographyTheme<Font = any> {
  font?: Font;
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
    text: string | 0;
    button: string | 0;
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
    medium: number;
    bold: number;
    semiBold: number;
    extraBold: number;
  };
}

export interface RadioTheme {
  fieldBorderRadius: string;
  colorByStatus: {
    default: string;
    disabled: string;
    error: string;
    valid: string;
  };
  hover: {
    borderColor: string;
    boxShadow: string;
    bgColor: string;
  };
  checked: {
    colorByStatus: {
      default: string;
      disabled: string;
      error: string;
      valid: string;
    };
    bgColor: string;
    radioBgColor: string;
    boxShadow: string;
  };
}

export interface FlexContainerTheme {
  className: string;
}

export interface AppTheme {
  alert: AlertTheme;
  button: ButtonsTheme;
  card: CardTheme;
  errorMessage: ErrorMessageTheme;
  footer: FooterTheme;
  label: LabelTheme;
  legend?: LegendTheme;
  input: InputTheme;
  inputRange: InputRangeTheme;
  link: LinkTheme;
  progressBar: ProgressBarTheme;
  navbar: NavbarTheme;
  typography: TypographyTheme;
  scrollableArea: ScrollableAreaTheme;
  spinner: SpinnerTheme;
  productTemplate?: ProductTemplate;
  productTemplateV2?: ProductTemplateV2;
  radio: RadioTheme;
  flexContainer?: FlexContainerTheme;
  option?: OptionTheme;
  sitTight?: SitTightTheme;
}

export interface AppThemeProps {
  theme: AppTheme;
}

// NB: Font Awesome icon variants required in the theme require their prefixes to be added here in order to be usable
library.add(fas);

export const zopaTheme: AppTheme = {
  alert: {
    brand: {
      icon: colors.brand,
      background: colors.brandLight,
      border: 'none',
      text: colors.greyDarkest,
      component: () => <Icon variant={faInfoCircle} />,
    },
    info: {
      icon: colors.grey,
      background: colors.greyLighter,
      border: 'none',
      text: colors.greyDarkest,
      component: () => <Icon variant={faInfoCircle} />,
    },
    alert: {
      icon: colors.alert,
      background: colors.alertLight,
      border: 'none',
      text: colors.alertDark,
      component: () => <Icon variant={faMinusCircle} />,
    },
    warning: {
      icon: colors.warning,
      background: colors.warningLight,
      border: 'none',
      text: colors.warningDark,
      component: () => <Icon variant={faExclamationCircle} />,
    },
    success: {
      icon: colors.success,
      background: colors.successLight,
      border: 'none',
      text: colors.successDark,
      component: () => <Icon variant={faCheckCircle} />,
    },
  },
  button: {
    primary: {
      text: colors.white,
      bg: colors.action,
      hover: {
        bg: `linear-gradient(90deg, #3B46C4 0%, #2732B0 100%)`,
        text: colors.white,
        border: `1px solid ${colors.action}`,
      },
      focus: {
        border: `1px solid ${colors.white}`,
        boxShadow: `0 0 4px ${colors.actionPlain}`,
      },
    },
    secondary: {
      text: colors.actionDark,
      bg: colors.actionLight,
      hover: {
        bg: '#EEEFFB',
        text: colors.actionDark,
        border: '1px solid #EEEFFB',
      },
      focus: {
        border: `1px solid ${colors.white}`,
        boxShadow: `0 0 4px ${colors.actionPlain}`,
      },
    },
    link: {
      text: colors.actionDark,
      bg: 'transparent',
      hover: {
        bg: '#EAEBFA',
        text: colors.actionDark,
        border: '1px solid #EAEBFA',
      },
      focus: {
        border: `1px solid ${colors.white}`,
        boxShadow: `0 0 4px ${colors.actionPlain}`,
      },
    },
    borderRadius: `8px`,
    padding: `${spacing[3]} ${spacing[6]}`,
  },
  card: {
    primary: {
      headingSize: typography.sizes.heading.h5,
      textSize: typography.sizes.text.body,
      boxShadowStyle: `0 1px 0 0 ${colors.greyLight}`,
      borderStyle: `1px solid ${colors.greyLighter}`,
      backgroundStyle: `${colors.white};`,
      borderRadius: '12px',
    },
    secondary: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: `0 1px 0 0 ${colors.greyLight}`,
      borderStyle: `1px solid ${colors.greyLighter}`,
      backgroundStyle: `${colors.white};`,
      borderRadius: '12px',
    },
    brand: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: 'none',
      borderStyle: `1px solid ${colors.brand}`,
      backgroundStyle: `${colors.brandLight};`,
      borderRadius: '12px',
    },
    action: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: 'none',
      borderStyle: `1px solid ${colors.greyLighter}`,
      backgroundStyle: `${colors.white};`,
      borderRadius: '12px',
    },
    info: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: 'none',
      borderStyle: `1px solid ${colors.greyLightest}`,
      backgroundStyle: `${colors.greyLightest}`,
      borderRadius: '12px',
    },
  },
  errorMessage: {
    textColor: `${colors.alertDark}`,
    backgroundColor: `${colors.alertLight}`,
    padding: '8px 16px',
    icon: true,
  },
  footer: {
    bgColor: colors.white,
    className: 'pb-9 pt-10 l:pt-11',
    showFooterLinks: true,
    showLogoBlock: true,
    showSocialBlock: true,
    showLegalBlock: true,
    showDivider: false,
    legalBlock: {
      isFullWidth: false,
      color: colors.greyDark,
    },
  },
  label: {
    margin: `0 0 10px`,
  },
  input: {
    padding: '0 16px',
    startIcon: <Icon variant={faPoundSign} />,
    iconWidth: '48px',
    startIconPaddingLeft: '60px',
    endIconPaddingRight: '60px',
    color: colors.greyDark,
    placeholderColor: colors.greyLight,
    borderRadius: `8px`,
    boxShadow: `0 0 4px 0 transparent`,
    labelFontWeight: typography.weights.semiBold,
    hover: {
      border: colors.brand,
      error: colors.brand,
      boxShadow: `0 0 4px 0`,
      backgroundColor: 'transparent',
    },
    disabled: {
      color: colors.grey,
      backgroundColor: colors.greyLightest,
    },
    borderColorByStatus: {
      error: colors.alert,
      valid: colors.success,
      disabled: colors.greyLight,
      default: colors.grey,
    },
    startIconColor: colors.grey,
    iconBackgroundColor: colors.greyLighter,
    searchInput: {
      border: '1px',
      boxShadow: `0 0 4px 0 ${colors.brand}`,
      borderRadius: `8px 8px 0 0`,
      borderColor: colors.brand,
      customIcon: false,
      options: {
        borderRadius: `0 0 8px 8px`,
        hover: {
          color: colors.white,
          backgroundColor: colors.brand,
        },
      },
    },
    checkBox: {
      defaultColor: colors.brand,
      borderRadius: '4px',
      label: {
        borderRadius: '8px',
        backgroundColor: colors.brandLight,
      },
      customIcon: false,
      checked: {
        boxShadow: 'none',
      },
      borderColorByStatus: {
        error: colors.alert,
        valid: colors.success,
        disabled: colors.greyLight,
        default: colors.grey,
      },
      checkboxBackgroundColor: {
        checked: colors.white,
        hover: colors.white,
        disabled: colors.white,
      },
    },
  },
  inputRange: {
    justifyContent: 'flex-start',
    button: {
      borderRadius: '50%',
      paddingMobile: '12px',
      padding: '16px',
      width: '50px',
      height: '50px',
      mobileWidth: '32px',
      mobileHeight: '32px',
    },
    slider: {
      lowerColor: colors.actionPlain,
      upperColor: colors.greyLighter,
    },
    thumb: {
      thumbDiameterMobile: 30,
      thumbDiameter: 50,
      thumbIcon: true,
      thumbColor: colors.actionPlain,
      marginTop: 0.5,
    },
  },
  link: {
    color: 'auto',
    weight: typography.weights.semiBold,
    hover: {
      color: 'auto',
    },
    active: {
      color: 'auto',
    },
    disableTargetIcon: false,
  },
  navbar: {
    iconContainer: {
      display: 'flex',
    },
    logo: {
      render: true,
    },
    mobile: {
      minHeight: 'auto',
      bgColor: colors.brandDecorative,
    },
  },
  progressBar: {
    color: colors.brand,
  },
  scrollableArea: {
    scrollBarThumb: {
      borderRadius: '4px',
      border: `2px solid ${colors.brand}`,
      bgColor: `${colors.brand}`,
    },
    scrollBarTrack: {
      background: `${colors.greyLighter}`,
      borderRadius: '4px',
    },
  },
  productTemplate: {
    title: {
      backgroundColor: `${colors.greyLightest}`,
    },
  },
  spinner: {
    spinnerTheme: 'zopa',
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
      text: 0,
      button: 0,
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
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
  radio: {
    fieldBorderRadius: '8px',
    colorByStatus: {
      error: `${colors.alert}`,
      valid: `${colors.success}`,
      disabled: `${colors.greyLight}`,
      default: `${colors.grey}`,
    },
    hover: {
      borderColor: `${colors.brand}`,
      boxShadow: `0 0 4px 0 ${colors.brand}`,
      bgColor: 'transparent',
    },
    checked: {
      colorByStatus: {
        default: `${colors.brand}`,
        disabled: `${colors.grey}`,
        error: `${colors.brand}`,
        valid: `${colors.success}`,
      },
      bgColor: `${colors.brandLight}`,
      radioBgColor: `${colors.brand}`,
      boxShadow: `none`,
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
