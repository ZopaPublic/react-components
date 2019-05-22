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
<Button styling="primary">Button smash</Button>
```

### Secondary

Standard button for most actions.

```jsx
<Button styling="secondary">Button smash</Button>
```

### Disabled

For use when actions are disabled, both primary and secondary.

```jsx
<Button disabled={true}>Button smash</Button>
```

### Link button

Used to navigate to other pages, always in current window unless external icon is present.

```jsx
<Button styling="link">Link smash</Button>
```

### Warning

For potentially risky actions.

```jsx
<Button styling="warning">Proceed</Button>
```

### Alert

For very dangerous actions!

```jsx
<Button styling="alert">Delete</Button>
```

### Large

Rarely to be used, but it's here.

```jsx
<Button sizing="large">Big smash</Button>
```

### Small

Mainly used when many actions are available in close proximity.

```jsx
<Button sizing="small">Little smash</Button>
```

### Compact

For when the link style just won't work.

```jsx
<Button sizing="compact">Tiny smash</Button>
```

### Right icon

Can be used with arrows, among other icons.

```jsx
import Alert from 'zopa-react-components/components/icons/Alert/Alert';

<Button rightIcon={<Alert fillColor="#fff" />}>Learn more</Button>;
```

### Left icon

For when the icon conveys the meaning faster than text.

```jsx
import Alert from 'zopa-react-components/components/icons/Alert/Alert';

<Button leftIcon={<Alert fillColor="#fff" />}>Smash now</Button>;
```

### Full width

For when the button should stretch the entire width of the divider.

```jsx
<Button fullWidth={true}>Button smash</Button>
```

### Primary contrast

Note that the text colour is the same as the background (always!)

```jsx
<div style={{ backgroundColor: '#293272', padding: '32px' }}>
  <Button styling="contrastPrimary" contrastColor="#293272">
    Button smash
  </Button>
</div>
```

### Secondary contrast

The border should be the colour's shade in 50 or close to that.

```jsx
<div style={{ backgroundColor: '#293272', padding: '32px' }}>
  <Button styling="contrastSecondary" contrastColor="#293272">
    Button smash
  </Button>
</div>
```

### Link contrast

See above.

```jsx
<div style={{ backgroundColor: '#293272', padding: '32px' }}>
  <Button styling="contrastLink">Link smash</Button>
</div>
```
