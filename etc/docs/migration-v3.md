<h1 align="center"> Migration to 3.0.0 ♻️</h1>

<div align="center"><img src="https://media.giphy.com/media/rbsL67KdPgYVO/giphy.gif" align="center" /></div>

# Index

- [Overview](#overview) 🔭
  - [What has changed](#what-has-changed)
  - [What has improved](#new-additions)
  - [What was fixed](#what-was-fixed)

# Overview 🔭

## What has changed?

### ☕️ `inputProps`

We decided to improve the interface for supplying props targeting our rendered `<input />` in all our `< *Field />` components.

Before you did through `inputProps`:

```jsx
<TextField label="Your favorite hero?" inputProps={{ name: 'hero', placeholder: 'Saitama' }} />
```

However, [nor the interface nor the types were consistent](https://github.com/zopaUK/react-components/issues/152). We decided to remove that prop altogether and just let you pass the props directly:

```jsx
<TextField label="Your favorite hero?" name="hero" placeholder="Saitama" />
```

### ☕️ &nbsp;Input size

Before, to control the rendered size on our `<*Field />` components you had to supply a `size` prop:

```jsx
<TextField size="short" label="Your hero?" inputProps={{ name: 'hero' }} />
```

This conflicted sometimes with native HTML `size` attributes on some form controls, so we decided to rename it to `inputSize`:

```jsx
<TextField inputSize="short" label="Your hero?" name="hero" />
```

### ☕️ &nbsp;Downshift

We upgraded to the last major version of [Downshift](https://github.com/downshift-js/downshift) 🏎 ❤️.

We use it on `<DropdownFiltered />`: the prop to toggle options as selected by default has been renamed accordingly:

```jsx
// before
<DropdownFiltered defaultSelectedItem={{value: 'Britain'}} />

// now
<DropdownFiltered initialSelectedItem={{value: 'Britain'}} />
```

### ☕️ `<Form.Form />`

Before it wasn't possible to have a nested `<Form />` within `<Form />` as that would generate an HTML like:

```html
<form>
  <!-- stuff -->
  <form>
    <!-- ups -->
  </form>
</form>
```

given every `<Form />` instance would render a `<form />` tag.

Hence the form element itself was abstracted into a component, `<Form.Form />` ( _better naming suggestions welcome_ ) to prevent it.

### ☕️ `<Form />` sync validation

Before `<Form validate />` had the following type:

```ts
validate?: (values: TValues) => TErrors | Promise<TErrors>
```

However, there was no need for it to return a `Promise`, it was legacy on our validation APIs at Zopa.

The return type is now synchronous:

```ts
validate?: (values: TValues) => TErrors;
```

## New additions

### 🥕 `<RadioGroupField />`

<img src="https://user-images.githubusercontent.com/5938217/77342370-5e873b00-6d30-11ea-916f-9d6c0e7caafa.png" width="150"/>

To render a group of radio buttons.

( `<RadioField />` _it's being deprecated and will be removed on the next release_ )

### 🥕 `<CheckboxGroupField />`

<img src="https://user-images.githubusercontent.com/5938217/77342514-98584180-6d30-11ea-9bb5-9a2b18123955.png" width="150"/>

To render a group of checkboxes.

### 🥕 `<FieldSet />` and `<Legend />`

New components to enhance semantics on groups of form controls.

### 🥕 `<Heading size />`

You can now have more fine control over the rendered `font-size` on `<Heading />` through the new `size` prop:

```jsx
// a small heading rendering as an `<h2>`
<Heading as="h2" size="h4">
  Hello
</Heading>
```

More background on this [here](https://github.com/zopaUK/react-components/issues/208) if you're interested.

### 🥕 `useViewport()`

A custom hook to programmatically read the viewport size:

```jsx
import { breakpoints, useViewport } from '@zopauk/react-components';

const { width, height } = useViewport();
return <span>{width > breakpoints.tablet ? 'foo' : 'bar'}</span>;
```

We also exported our [breakpoints](https://github.com/zopaUK/react-components/blob/master/src/constants/breakpoints.ts).

### 🥕 `buttonStyle | linkStyle`

The CSS to generate `<Button />` and `<Link />` is now exported as `buttonStyle` and `linkStyle` to be able to create custom button and links:

```jsx
import { buttonStyle } from '@zopauk/react-components';
import { Link } from 'react-router-dom';

const ButtonLink = styled(Link)`
  ${buttonStyle}
`;

<ButtonLink href="https://www.zopa.com">Button link</ButtonLink>;
```

### 🥕 `<Navbar />` height

The `<Navbar />` height is exported now as a constant in case you want to read it programmatically:

```tsx
import styled from 'styled-compoennts';
import { navbarHeight } from '@zopauk/react-components';

const Container = styled.div`
  /* account for navigation bar height */
  margin-top: -${navbarHeight}px;
`;
```

## What was fixed

- `<Link as="button" />` doesn't have a [default `padding` anymore](https://github.com/zopaUK/react-components/pull/210)
- [`<Form>` types have been renamed for readability](https://github.com/zopaUK/react-components/pull/207)
- [`<Link color />` it's been typed properly](https://github.com/zopaUK/react-components/pull/207)
