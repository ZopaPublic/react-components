/*
    Expose shared endpoints:
 */

// Atoms
// Constants (colors, fonts, ...)
import * as colors from './constants/colors';
import * as fonts from './constants/fonts';

export { default as AlertBox } from './components/atoms/AlertBox/AlertBox';
export { default as Badge } from './components/atoms/Badge/Badge';
export { default as Button } from './components/atoms/Button/Button';
export { default as Progress } from './components/molecules/Progress/Progress';
export { default as Card } from './components/atoms/Card/Card';
export { default as SidekickCard } from './components/atoms/SidekickCard/SidekickCard';
export { default as Link } from './components/atoms/Link/Link';
export { default as Dropdown } from './components/atoms/Dropdown/Dropdown';
export { Option as DropdownOption } from './components/atoms/Dropdown/Dropdown';
export { default as DropdownFiltered } from './components/molecules/DropdownFiltered/DropdownFiltered';
export { default as Spinner } from './components/atoms/Spinner/Spinner';
export { default as ErrorMessage } from './components/atoms/ErrorMessage/ErrorMessage';
export { default as InputLabel } from './components/atoms/InputLabel/InputLabel';
export { default as HelpText } from './components/atoms/HelpText/HelpText';
export { default as InputText } from './components/atoms/InputText/InputText';

// Molecules
export { default as Modal } from './components/molecules/Modal/Modal';
export { default as ZopaFooter } from './components/molecules/ZopaFooter/ZopaFooter';
export { default as Help } from './components/molecules/Help/Help';
export { default as CheckboxField } from './components/molecules/CheckboxField/CheckboxField';
export { default as RadioField } from './components/molecules/RadioField/RadioField';
export { default as TextField } from './components/molecules/TextField/TextField';

// Organisms
export { default as Navbar } from './components/organisms/Navbar/Navbar';
export { default as Accordion } from './components/organisms/Accordion/Accordion';

// Typography
export { default as Header1 } from './components/typography/Header1/Header1';
export { default as Header2 } from './components/typography/Header2/Header2';
export { default as Header3 } from './components/typography/Header3/Header3';
export { default as Title1 } from './components/typography/Title1/Title1';
export { default as Title2 } from './components/typography/Title2/Title2';
export { default as Title3 } from './components/typography/Title3/Title3';
export { default as Lead } from './components/typography/Lead/Lead';
export { default as Subhead } from './components/typography/Subhead/Subhead';
export { default as Caption } from './components/typography/Caption/Caption';
export { default as Text } from './components/typography/Text/Text';

// Layout
export { default as FlexContainer } from './components/layout/FlexContainer/FlexContainer';
export { default as FlexRow } from './components/layout/FlexRow/FlexRow';
export { default as FlexCol } from './components/layout/FlexCol/FlexCol';
export { default as SizedContainer } from './components/layout/SizedContainer/SizedContainer';

// Icons
export { default as Alert } from './components/icons/Alert/Alert';
export { default as CheckMark } from './components/icons/CheckMark/CheckMark';
export { default as ZopaLogo } from './components/icons/ZopaLogo/ZopaLogo';
export { default as HamburgerIcon } from './components/icons/Hamburger/Hamburger';
export { default as ProfileIcon } from './components/icons/Profile/Profile';

// Hooks
export { default as useAccordion } from './components/hooks/useAccordion/useAccordion';

export { colors, fonts };
export { default as Fonts } from './components/styles/Fonts';
export { default as GlobalStyles } from './components/styles/GlobalStyles';

// Helpers
export * from './helpers/responsiveness';
