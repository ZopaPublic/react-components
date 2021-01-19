### Summary

If used, `<Help />` should sit ontop of [`<ZopaFooter />`](/#/Components/Molecules/ZopaFooter).

Its aim is to give the customer information about Zopa's customer service opening hours and phone numbers to call about specific products.

### Example

When no HelpLine is specified it defaults to the borrowers one.

```tsx
import { Help } from '@zopauk/react-components';

<Help />;
```

For investors helpline use `HelpLine.investors`

```tsx
import { Help, HelpLine } from '@zopauk/react-components';

<Help helpLine={HelpLine.investors} />;
```
