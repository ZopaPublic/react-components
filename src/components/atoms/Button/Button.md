### Summary

Use `<Button />` whenever you need to render a call to action within a **Zopa interface**.

It comes in a lot of variations to suit different needs.

### Examples

- Primary ( _used for the main call to action, should only appear once per screen._ )

```tsx
import { Button } from '@zopauk/react-components';

<Button styling="primary">Button smash</Button>;
```

- Secondary ( _standard button for most actions_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button styling="secondary">Button smash</Button>;
```

- Disabled state ( _for use when actions are disabled, both primary and secondary_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button disabled={true}>Button smash</Button>;
```

- Text button ( _used to navigate to other pages, always in current window unless external icon is present_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button styling="link">Link smash</Button>;
```

- Warning state ( _for potentially risky actions_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button styling="warning">Proceed</Button>;
```

- Alert state ( _for very dangerous actions_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button styling="alert">Delete</Button>;
```

- Large size ( _rarely to be used, but it's here_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button sizing="large">Big smash</Button>;
```

- Small size ( _mainly used when many actions are available in close proximity_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button sizing="small">Little smash</Button>;
```

- Compact size ( _for when the link style just won't work_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button sizing="compact">Tiny smash</Button>;
```

- With an icon on its right side ( _can be used with arrows, among other icons_ )

```tsx
import { AlertIcon, Button } from '@zopauk/react-components';

<Button rightIcon={<AlertIcon fillColor="#fff" />}>Learn more</Button>;
```

- With an icon on its left side ( _for when the icon conveys the meaning faster than text_ )

```tsx
import { AlertIcon, Button } from '@zopauk/react-components';

<Button leftIcon={<AlertIcon fillColor="#fff" />}>Smash now</Button>;
```

- Full width ( _for when the button should stretch the entire width of the divider_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button fullWidth={true}>Button smash</Button>;
```

- Primary contrast ( _note that the text colour is the same as the background_ )

```tsx { "props": { "style": { "backgroundColor": "#141E64", "border": "2px solid #efefef" } } }
import { Button, colors } from '@zopauk/react-components';

<Button styling="contrastPrimary" contrastColor={colors.neutral.dark}>
  Button smash
</Button>;
```

- Secondary contrast ( _the border should be the colour's shade in 50 or close to that_ )

```tsx { "props": { "style": { "backgroundColor": "#141E64", "border": "2px solid #efefef" } } }
import { Button, colors } from '@zopauk/react-components';

<Button styling="contrastSecondary" contrastColor={colors.neutral.light}>
  Button smash
</Button>;
```

- Text button contrast ( _see above_ )

```tsx { "props": { "style": { "backgroundColor": "#141E64", "border": "2px solid #efefef" } } }
import { Button } from '@zopauk/react-components';

<Button styling="contrastLink">Link smash</Button>;
```

- Button as a custom component

```tsx
import React, { FC } from 'react';
import styled from 'styled-components';
import { buttonStyle } from '@zopauk/react-components';

// could be a gatsby or react-router-dom <Link />
const Link = ({ href, ...rest }) => <a href={href} {...rest} />;

const ButtonLink = styled(Link)`
  ${buttonStyle}
`;

<ButtonLink href="https://www.zopa.com" styling="secondary">
  Zopa
</ButtonLink>;
```
