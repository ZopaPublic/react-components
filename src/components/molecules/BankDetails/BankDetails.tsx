import React from 'react';
import styled from 'styled-components';
import useClipboard from 'react-use-clipboard';

import { colors } from '../../../constants';
import FlexCol from '../../layout/FlexCol/FlexCol';
import FlexRow from '../../layout/FlexRow/FlexRow';
import Button from '../../atoms/Button/Button';

interface BankDetailsProps {
  /**Set to null to not render a copy Button */
  copyText?: string;
}

const ItemWrapper = styled.div`
  border: 1px solid ${colors.greyLighter};

  &:first-of-type {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0px 1px 0px 0px ${colors.greyLight};
  }
`;

const BankDetails: React.FC<BankDetailsProps> = ({ children, copyText }) => {
  const [isCopied, setCopied] = useClipboard(copyText ?? '', {
    successDuration: 2000,
  });

  return (
    <ItemWrapper className="px-4 py-5">
      <FlexRow justify="space-between" align="center">
        <FlexCol xs="fill">{children}</FlexCol>
        {copyText && (
          <FlexCol xs="auto">
            <Button styling="link" disabled={isCopied} onClick={setCopied}>
              {isCopied ? 'Copied' : 'Copy'}
            </Button>
          </FlexCol>
        )}
      </FlexRow>
    </ItemWrapper>
  );
};

export default BankDetails;
