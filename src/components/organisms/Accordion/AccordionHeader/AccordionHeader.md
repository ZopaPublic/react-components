### Summary

<Accordion.Header /> renders a button with a chevron icon that rotates on click.

- It's meant to be used along [`<Accordion>`](/#/Components/Organisms/Accordion/Accordion) and [`<Accordion.Section />`](/#/Components/Organisms/Accordion/AccordionSection).
- Check out [`<Accordion />`](/#/Components/Organisms/Accordion) examples for how they're all meant to play together.

### Examples

```ts
import { Accordion } from '@zopauk/react-components';

<Accordion aria-label="accordion">
  <Accordion.Header id="first" index={0} textSize="base">
    accordion header
  </Accordion.Header>
</Accordion>;
```
