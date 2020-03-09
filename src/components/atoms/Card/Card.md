### Summary

`<Card />` can be used to highlight / categorise content within an interface.

It comes with two variations.

### Examples

- Default

```ts { "props": { "style": { "backgroundColor": "#141E64", "border": "none"  } } }
import { Card, Text } from '@zopauk/react-components';

<Card type="card">
  <Text as="p">I'm a card 😀 , with an explicit type prop.</Text>
</Card>;
```

- Link variation

Cards of type `"linkCard"` are meant to be used to build components that interact with user actions.

```ts { "props": { "style": { "backgroundColor": "#141E64",  "border": "none" } } }
import { Card, Text, Heading } from '@zopauk/react-components';

<Card type="linkCard" onClick={() => alert("You're a winner!")}>
  <Heading as="h3">New rates today! 💸</Heading>
  <Text as="p">Find out how you can benefit the most from our new rates.</Text>
</Card>;
```
