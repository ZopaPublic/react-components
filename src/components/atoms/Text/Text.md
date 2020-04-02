### Summary

1. Whenever you want to render text on any UI at Zopa, use the `<Text />` component 🙏🏻
2. Its size, weight, white-space, semantics and colour can be customised
3. If you need to render long text, render it within `<p />` tag, otherwise use the defautl `<span />` tag 👮🏻‍♂️
4. Don't use `semibold` for now as we don't have clear specs on when to use it over `bold`
5. Use the colours mindfully 🎨

### Examples

- Variations

```tsx
import { Fragment } from 'react';
import { Text } from '@zopauk/react-components';

<Fragment>
  <Text as="p" mb>
    Long paragraph, rendered as `p`: we give our customers a fair deal as standard and our products are built so that we
    win when you win. Managing your money is no sweat. With handy tools to get stuff done and helpful people always at
    the end of a phone. We listen to what you want and change with your needs.
  </Text>
  <Text>Text as `span`</Text>
</Fragment>;
```

- With white-space

```tsx
import { Fragment } from 'react';
import { Text } from '@zopauk/react-components';

<Fragment>
  <Text mb>I have `margin-bottom` below ⤵️</Text>
  <Text>I'm pushed further down 🙄</Text>
</Fragment>;
```

- Sizes

```tsx
import { Fragment } from 'react';
import { Text } from '@zopauk/react-components';

<Fragment>
  <Text size="lead" mb>
    Lead ( 18px )
  </Text>
  <Text mb>Medium ( default: 15px )</Text>
  <Text size="small">Small ( 13px )</Text>
</Fragment>;
```

- Weights

```tsx
import { Fragment } from 'react';
import { Text } from '@zopauk/react-components';

<Fragment>
  <Text mb>Regular</Text>
  <Text weight="bold" mb>
    Bold
  </Text>
</Fragment>;
```

- Colors

```tsx { "props": { "style": { "backgroundColor": "rgb(244, 248, 246)", "border": "none" } } }
import { Fragment } from 'react';
import { Text, colors } from '@zopauk/react-components';

<Fragment>
  <Text color={colors.white} mb>
    White
  </Text>
  <Text color={colors.grey} mb>
    ❗️`grey` has poor contrast (not AAA compliant). Use it for a text that doesn't convey a critical message.
  </Text>
  <Text color={colors.greyDarkest} mb>
    Grey Darkest
  </Text>
  <Text color={colors.success} mb>
    Success
  </Text>
  <Text color={colors.alert}>Alert</Text>
</Fragment>;
```
