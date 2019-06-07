This is a `Accordion` subcomponent and it is meant to be used along with other components such as `<AccordionSection />` and `useAccordion` hook. It is a button with a chevron icon that rotates according to the `isOpen` prop.

Opened Accordion.Header

```js
import { Accordion } from '@zopauk/react-components';

<Accordion.Header isOpen={true}>opened accordion header</Accordion.Header>;
```

Closed Accordion.Header

```js
import { Accordion } from '@zopauk/react-components';

<Accordion.Header isOpen={false}>closed accordion header</Accordion.Header>;
```
