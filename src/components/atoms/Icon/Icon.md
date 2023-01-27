### Summary

Use `<Icon />` whenever you want to render an icon in your application.

This library ( _and the design-system behind_ ) have a strict dependency on the **font-awesome** icon library.

This component is just a wrapper around `<FontAwesomeIcon />` from `'@fortawesome/react-fontawesome'` with just the component name and the `icon` prop renamed for convenience:

```jsx static
// in @fortawesome/react-fontawesome
<FontAwesomeIcon icon={faCoffee} {...otherProps} />

// in @zopauk/react-components
<Icon variant={faCoffee} {...otherProps} />
```

- 🧐 &nbsp;Check the [`react-fontawesome` docs](https://github.com/FortAwesome/react-fontawesome) for all the possible configuration options.
- 👉🏻 &nbsp;You'll need to install `@fortawesome/free-solid-svg-icons` in order to import them explicitly
  - [**explicit imports**](https://github.com/FortAwesome/react-fontawesome#explicit-import) are crucial to prevent big bundles

### Example

```tsx
import { Icon, colors } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<>
  <Icon variant={faCoffee} className="mr-6" />
  <Icon variant={faCoffee} color={colors.brand} className="mr-6" />
  <Icon variant={faCoffee} pulse className="mr-6" />
  <Icon variant={faCoffee} spin className="mr-6" />
  <Icon variant={faCoffee} rotation={180} />
</>;
```

You can also wrap an icon within a circle by setting a `bgColor`

```tsx
import { Icon, colors } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<>
  <Icon variant={faCoffee} bgColor={colors.grey} />
</>;
```
