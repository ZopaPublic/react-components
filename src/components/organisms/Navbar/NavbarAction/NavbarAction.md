### Summary

[`<NavbarAction />`](#/Components/Organisms/Navbar/NavbarSignIn) renders the navbar CTA. On Desktop its a [`<Link />`](#/Components/Atoms/Link) styled as a primary button. On Mobile it renders a [user icon](https://fontawesome.com/icons/user?style=solid). You can update the CTA text on desktop

### Examples

- Default

```ts { "props": { "style": { "backgroundColor": "#00B9A7" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Action />;
```

- Default

```ts { "props": { "style": { "backgroundColor": "#00B9A7" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Action>My account</Navbar.Action>;
```
