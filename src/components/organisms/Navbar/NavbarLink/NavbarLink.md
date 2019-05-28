This is a Navbar subcomponent meant to be used with other components such as Navbar.Layout and Navbar.Dropdown.
It is the same as Link component except for two extra props: active and withChevron.

Default Navbar.Link component

```js { "props": { "style": { "backgroundColor": "#00B9A7" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link color="#fff">Navbar.Link</Navbar.Link>;
```

Active Navbar.Link component

```js { "props": { "style": { "backgroundColor": "#00B9A7" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link color="#fff" active>
  Navbar.Link
</Navbar.Link>;
```

Navbar.Link withChevron down

```js { "props": { "style": { "backgroundColor": "#00B9A7" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link color="#fff" withChevron open={false}>
  Navbar.Link
</Navbar.Link>;
```

Navbar.Link withChevron up

```js { "props": { "style": { "backgroundColor": "#00B9A7" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link color="#fff" withChevron open>
  Navbar.Link
</Navbar.Link>;
```
