This project aims to have all the common styled react components as a library/documentation.

## Installation

Install it from NPM:

```bash
pnpm add '@zopauk/react-components'
```

## Global Styling

⚠️ &nbsp;In order for the UI to render well, `<GlobalStyles />` needs to be imported and added to the top-most component of the project:

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

If you are using [SSR or SSR](https://blog.logrocket.com/ssg-vs-ssr-in-next-js/) like in NextJS or Gatsby you also need to import the fontawesome styles in the root of your application:

```ts static
import '@fortawesome/fontawesome-svg-core/styles.css';
```

## Typography

[Open Sans](https://fonts.google.com/specimen/Open+Sans) is the typography chosen for Zopa's brand.

We currently use **four weights**:

- 400 ( _regular_ )
- 600 ( _semibold_ )
- 700 ( _bold_ )
- 800 ( _extrabold_ )

This library assumes **Open Sans** is already available, so make sure you link it properly in the root HTML of your application:

```html static
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
```

You're free to use this technique or add the dependency manually to your base HTML `<head />`.
