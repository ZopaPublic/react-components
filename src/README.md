This project aims to have all the common styled react components as a library/documentation.

### Installation

- Install it from NPM:

  ```bash
  yarn add '@zopauk/react-components'
  ```

### Setup

⚠️ &nbsp;&nbsp;In order for the UI to render well, `<GlobalStyles />` needs to be imported and added to the top-most component of the project:

```ts static
import { GlobalStyles } from '@zopauk/react-components';

// root component
const App = () => (
  <>
    <GlobalStyles />
    // rest of your top-level components
  </>
);
```

[Open Sans](https://fonts.google.com/specimen/Open+Sans) is the typography chosen for Zopa's brand.

We currently use three weights:

- 400 ( _regular_ )
- 600 ( _semibold_ )
- 700 ( _bold_ )

As a convenience, you can import `<Fonts />` and add it on the top level of your app:

```ts static
import { Fonts } from '@zopauk/react-components';

// root component
const App = () => (
  <>
    <Fonts />
    // rest of your top-level components
  </>
);
```

It'll grab **Open Sans** from Google's CDN [through a CSS import](https://github.com/zopaUK/react-components/blob/master/src/components/styles/Fonts.tsx#L3-L5).

You're free to use this technique or add the dependency manually to your base HTML `<head />`
