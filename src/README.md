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

### Spacing

Spacing is included as part of the GlobalStyles component and is split into margin and padding each can be used as atomic classes on your components.

We follow the same guidelines set out in Tailwind

Margin: https://tailwindcss.com/docs/margin/

Padding: https://tailwindcss.com/docs/padding/

The number you define in the class selector refers to the index of the spacing constants set out here:

```ts static
const spacing = {
  '0': '0',
  '1': '4px',
  '2': '8px',
  '3': '16px',
  '4': '24px',
  '5': '32px',
  '6': '40px',
  '7': '56px',
  '8': '64px',
  '9': '104px',
};
```

Example:

```tsx
import { GlobalStyles } from '@zopauk/react-components';

<>
  <GlobalStyles />

  <h3>Margin</h3>
  <div className="mx-5">I have a 32px margin on the x axis</div>
  <div className="my-2">I have a 8px margin on the y axis</div>
  <div className="ml-4">I have a 24px margin on the left</div>

  <h3>Padding</h3>
  <div className="p-4 m:p-5">I have a 24px padding on all sides at mobile then 32px at desktop</div>
  <div className="pb-3">I have a 16px padding on the bottom</div>
</>;
```
