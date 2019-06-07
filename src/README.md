This project aims to have all the common styled react components as a library/documentation.

## Installation

- Install it from the repository:

  ```bash
  yarn add '@zopauk/react-components'
  ```

- ⚠️ **In order to use this UI you must import the `<GlobalStyles />` component and use it in the root of your project.**

  ```js static
  import { GlobalStyles } from '@zopauk/react-components';

  // root component
  const App = () => (
    <>
      <GlobalStyles />
      // rest of your top-level components
    </>
  );
  ```

- **Fonts** (_optional_): This is not added in the default module because there are better ways to do it in terms of performance.

  ```js static
  import { Fonts } from '@zopauk/react-components';

  // root component
  const App = () => (
    <>
      <Fonts />
      // rest of your top-level components
    </>
  );
  ```

Another option is to use a custom rule on your favourite builder to inject the css.
