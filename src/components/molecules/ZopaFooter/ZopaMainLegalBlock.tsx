import * as React from 'react';
import { useThemeContext } from '../../styles/Theme';
import Text from '../../atoms/Text/Text';

export default function ZopaMainLegalBlockCopy() {
  const theme = useThemeContext();
  return (
    <Text
      as="p"
      color={theme.footer.legalBlock.color}
      size="small"
      className="mb-4"
      data-automation="ZA.ZopaFooterMainLegalBlockCopy"
    >
      Zopa Bank Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct
      Authority and the Prudential Regulation Authority, and entered on the Financial Services Register (800542). Zopa
      Bank Limited (10627575) is incorporated in England &amp; Wales and has its registered office at: 1st Floor,
      Cottons Centre, Tooley Street, London, SE1 2QG.
    </Text>
  );
}
