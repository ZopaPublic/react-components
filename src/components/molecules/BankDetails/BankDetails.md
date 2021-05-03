# Summary

`<BankDetails />` renders the bank detail with option to copy value to clipboard using [react-use-clipboard](https://www.npmjs.com/package/react-use-clipboard)

## Example

```tsx
import { BankDetails, Text } from '@zopauk/react-components';

const items = [
  {
    label: 'Payee',
    text: 'Chris Jeffries',
    copyText: 'Chris Jeffries',
  },
  {
    label: 'Sort code',
    text: '00-00-00',
    copyText: '000000',
  },
  {
    label: 'Account number',
    text: '12345678',
    copyText: '12345678',
  },
  {
    label: 'Reference',
    text: 'Anything you want!',
  },
];

<div>
  {items.map((bankDetail, index) => {
    return (
      <BankDetails key={`bank-detail-${index}`} copyText={bankDetail.copyText}>
        <Text size="lead" as="p" weight="semiBold">
          {bankDetail.text}
        </Text>
        <Text size="small" color={colors.grey}>
          {bankDetail.label}
        </Text>
      </BankDetails>
    );
  })}
</div>;
```
