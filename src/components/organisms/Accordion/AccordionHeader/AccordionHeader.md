### Summary

<Accordion.Header /> renders a button with a chevron icon that rotates according to the `boolean` `isOpen` prop.

- It's meant to be used along `<Accordion.Section>` and `useAccordion`.
- [`<Accordion />`](/#/Components/Organisms/Accordion) examples for how they're all meant to play together.

### Examples

- Expanded

```js
import { Accordion } from '@zopauk/react-components';

// <Accordion.Header isOpen={true}>opened accordion header</Accordion.Header>;
```

- Collapsed

```js
import { Accordion } from '@zopauk/react-components';

// <Accordion.Header isOpen={false}>closed accordion header</Accordion.Header>;
```
