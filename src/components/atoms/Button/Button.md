Styled button component

- Primary
- Secondary
- Disabled
- Link button
- Warning
- Alert
- Large
- Small
- Compact
- Right icon
- Left icon
- Full width
- Primary contrast
- Secondary contrast
- Link contrast

### Primary

Used for the main call to action. Should only appear once per screen.

```jsx
import { Button } from '@zopauk/react-components';

<Button styling="primary">Button smash</Button>;
```

### Secondary

Standard button for most actions.

```jsx
import { Button } from '@zopauk/react-components';

<Button styling="secondary">Button smash</Button>;
```

### Disabled

For use when actions are disabled, both primary and secondary.

```jsx
import { Button } from '@zopauk/react-components';

<Button disabled={true}>Button smash</Button>;
```

### Link button

Used to navigate to other pages, always in current window unless external icon is present.

```jsx
import { Button } from '@zopauk/react-components';

<Button styling="link">Link smash</Button>;
```

### Warning

For potentially risky actions.

```jsx
import { Button } from '@zopauk/react-components';

<Button styling="warning">Proceed</Button>;
```

### Alert

For very dangerous actions!

```jsx
import { Button } from '@zopauk/react-components';

<Button styling="alert">Delete</Button>;
```

### Large

Rarely to be used, but it's here.

```jsx
import { Button } from '@zopauk/react-components';

<Button sizing="large">Big smash</Button>;
```

### Small

Mainly used when many actions are available in close proximity.

```jsx
import { Button } from '@zopauk/react-components';

<Button sizing="small">Little smash</Button>;
```

### Compact

For when the link style just won't work.

```jsx
import { Button } from '@zopauk/react-components';

<Button sizing="compact">Tiny smash</Button>;
```

### Right icon

Can be used with arrows, among other icons.

```jsx
import { AlertIcon, Button } from '@zopauk/react-components';

<Button rightIcon={<AlertIcon fillColor="#fff" />}>Learn more</Button>;
```

### Left icon

For when the icon conveys the meaning faster than text.

```jsx
import { AlertIcon, Button } from '@zopauk/react-components';

<Button leftIcon={<AlertIcon fillColor="#fff" />}>Smash now</Button>;
```

### Full width

For when the button should stretch the entire width of the divider.

```jsx
import { Button } from '@zopauk/react-components';

<Button fullWidth={true}>Button smash</Button>;
```

### Primary contrast

Note that the text colour is the same as the background (always!)

```jsx { "props": { "style": { "backgroundColor": "#141E64", "border": "2px solid #efefef" } } }
import { Button, colors } from '@zopauk/react-components';

<Button styling="contrastPrimary" contrastColor={colors.primary.navy800}>
  Button smash
</Button>;
```

### Secondary contrast

The border should be the colour's shade in 50 or close to that.

```jsx { "props": { "style": { "backgroundColor": "#141E64", "border": "2px solid #efefef" } } }
import { Button, colors } from '@zopauk/react-components';

<Button styling="contrastSecondary" contrastColor={colors.extended.blue25}>
  Button smash
</Button>;
```

### Link contrast

See above.

```jsx { "props": { "style": { "backgroundColor": "#141E64", "border": "2px solid #efefef" } } }
import { Button } from '@zopauk/react-components';

<Button styling="contrastLink">Link smash</Button>;
```
