### Summary

Whenever you want to render text on any UI at Zopa, use the `<Text />` component.

Apply margin/padding by [adding spacing](/#/Content?id=spacing).

### Examples

- Variations

```tsx
import { Fragment } from 'react';
import { Text } from '@zopauk/react-components';

<Fragment>
  <Text as="p" className="mb-6">
    Long paragraph, rendered as `p`: we give our customers a fair deal as standard and our products are built so that we
    win when you win. Managing your money is no sweat. With handy tools to get stuff done and helpful people always at
    the end of a phone. We listen to what you want and change with your needs.
  </Text>
  <Text>Text as `span`</Text>
</Fragment>;
```

- Sizes

```tsx
import { Fragment } from 'react';
import { Text } from '@zopauk/react-components';

<Fragment>
  <Text size="lead" className="mb-6" as="p">
    Lead ( 18px )
  </Text>
  <Text className="mb-6" as="p">
    Medium ( default: 16px )
  </Text>
  <Text size="small">Small ( 14px )</Text>
</Fragment>;
```

- Weights

```tsx
import { Fragment } from 'react';
import { Text } from '@zopauk/react-components';

<Fragment>
  <Text className="mb-6" as="p">
    Regular
  </Text>
  <Text weight="bold" as="p">
    Bold
  </Text>
  <Text weight="semiBold" as="p">
    SemiBold
  </Text>
</Fragment>;
```

- Colors

```tsx { "props": { "style": { "backgroundColor": "rgb(244, 248, 246)", "border": "none" } } }
import { Fragment } from 'react';
import { Text, colors } from '@zopauk/react-components';

<Fragment>
  <Text color={colors.white} className="mb-6" as="p">
    White
  </Text>
  <Text color={colors.grey} className="mb-6" as="p">
    ❗️`grey` has poor contrast (not AAA compliant). Use it for a text that doesn't convey a critical message.
  </Text>
  <Text color={colors.greyDarkest} className="mb-6" as="p">
    Grey Darkest
  </Text>
  <Text color={colors.success} className="mb-6" as="p">
    Success
  </Text>
  <Text color={colors.alert} className="mb-6" as="p">
    Alert
  </Text>
  <Text color={colors.alertDark}>Alert Dark</Text>
</Fragment>;
```

- Alignment

```tsx
import { Fragment } from 'react';
import { Text } from '@zopauk/react-components';

<Fragment>
  <div style={{ textAlign: 'right' }}>
    <Text className="mb-6">Inherits from his parent by default</Text>
  </div>
  <Text align="left" className="mb-6" as="p">
    Left
  </Text>
  <Text align="center" className="mb-6" as="p">
    Center
  </Text>
  <Text align="right" className="mb-6" as="p">
    Right aligned
  </Text>
</Fragment>;
```

- Capitalised

```tsx
import { Text } from '@zopauk/react-components';

<Text capitalize>Vivacious</Text>;
```
