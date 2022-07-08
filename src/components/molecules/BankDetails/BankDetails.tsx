import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import useClipboard from 'react-use-clipboard';
import classnames from 'classnames';

import { colors } from '../../../constants';
import FlexCol from '../../layout/FlexCol/FlexCol';
import FlexRow from '../../layout/FlexRow/FlexRow';
import Button from '../../atoms/Button/Button';

interface BankDetailsProps extends HTMLAttributes<HTMLDivElement> {
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
    box-shadow: 0 1px 0 0 ${colors.greyLight};
  }
`;

const CopyText = styled(Button)`
  cursor: pointer;
  padding: 8px;

  &:hover,
  &:focus {
    background: transparent;
    color: ${colors.actionDark};
  }
`;

const BankDetails = ({ children, copyText = '', className, ...props }: BankDetailsProps) => {
  const [isCopied, setCopied] = useClipboard(copyText, {
    successDuration: 2000,
  });

  return (
    <ItemWrapper {...props} className={classnames('pl-4 pr-2 py-5', className || '')}>
      <FlexRow justify="space-between" align="center">
        <FlexCol xs="fill">{children}</FlexCol>
        {copyText && (
          <FlexCol xs="auto">
            <CopyText
              styling="link"
              onClick={() => {
                if (isCopied) {
                  return;
                }
                setCopied();
              }}
            >
              {isCopied ? 'Copied' : 'Copy'}
            </CopyText>
          </FlexCol>
        )}
      </FlexRow>
    </ItemWrapper>
  );
};

export default BankDetails;
