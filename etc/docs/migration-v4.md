<h1 align="center"> Migration to 4.0.0 ♻️</h1>

<div align="center"><img src="https://media.giphy.com/media/lpt5YA1gY68yhJjGpm/giphy.gif" align="center" /></div>

# Index

- [Overview](#overview) 🔭
  - [What has changed](#what-has-changed)
  - [What we added](#new-additions)
  - [What we fixed](#what-was-fixed)

# Overview 🔭

## What has changed?

### 🎨 `Colors`

<img width="983" alt="Screenshot 2020-03-27 at 18 30 26" src="https://user-images.githubusercontent.com/5938217/77783386-0fefde80-7059-11ea-979a-bf3c11f28d27.png">

Colours have changed again. Here's a mapping table hopefully easy your pain through the migration:

| **v3**                     |        **v4**         |
| -------------------------- | :-------------------: |
| `colors.brand.primary`     |    `colors.brand`     |
| `colors.brand.secondary`   | `colors.actionPlain`  |
| `colors.neutral.white`     |    `colors.white`     |
| `colors.neutral.nearWhite` | `colors.greyLightest` |
| `colors.neutral.light`     | `colors.greyLighter`  |
| `colors.neutral.medium`    |  `colors.greyLight`   |
| `colors.neutral.nearDark`  |   `colors.greyDark`   |
| `colors.neutral.dark`      | `colors.greyDarkest`  |

You can [check the documentation](https://zopauk.github.io/react-components/#/Content?id=spacing) for all the updated colour spectrum.

### ☄️ `Buttons`

One of the biggest changes on the streamline, our `<Button />` component has been massively simplified and got few extra features.

You only now have these 4 states:

- **primary**
- **secondary**
- **disabled**
- **text**
- **loading**

[Check te docs](https://zopauk.github.io/react-components/#/Components/Atoms/Button) to see the new available states and ask **#design** or **#ui-kit-web** if one of your use-cases is not supported.

🚨 **Notice:**

You should make use of the new state:

```jsx
<Button loading />
```

and move away from any custom solution you were using for this.

### 🅰 `Typography`

#### Import

The library doesn't `import` anymore **Open Sans** for you, the `<Fonts />` component has been removed.

Add a manual link to your root HTML instead:

```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
```

#### Components

```jsx
import { Heading, Text, Link } from '@zopauk/react-components';
```

These components retain their API, however `<Heading />`, `<Text />` and `<Link />` have lost their `mb` prop, use [the new atomic classes](#new-additions) instead.
Since `<Heading />`'s `mb` prop was set to `true` by default, you should add `className="mb-6"` to maintain the existing styling.
The default for `<Text />` and `<Link />` was `false` so you can just find and replace `mb` prop with `className="mb-6"`.

#### Font sizes

They have all changed by 1px or 2px difference. The shape of our constants object:

```js
import { typography } from '@zopauk/react-components';
```

has changed a bit, hopefully TS is of help here...

There's a new heading size available:

```jsx
<Heading size="display" as="h1" />;

const { display } = typography.sizes.heading;
```

but it should only be used for editorial pages and not in any existing design.

#### Line heights

You won't be able to access the `lineHeights` on it anymore ( _they have been inlined in the components instead_) and a global `line-height: 1.4` has been added to `body {}` instead.

#### Weights

A new **font weight** is available: `typography.weights.extraBold`. However you shouldn't be using this unless you see it in a new design.

### 🃏 `Card`

`<Card />` has changed into a component which doesn't accept any context anymore but its made out of opinionated parts:

```tsx
<Card layout="horizontal">
  <Card.Image overlayWith={<a href="/somewhere" target="_blank" />} url="/path/to/img" />
  <Card.Content>
    <Card.Heading>Macaroon bear claw powder</Card.Heading>
    <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
    <Card.Actions>
      <Button styling="secondary">Button</Button>
    </Card.Actions>
  </Card.Content>
</Card>
```

The best idea is to [check the documentation](https://zopauk.github.io/react-components/#/Components/Organisms/Card) to see what you can do with it. In case you were using `<Card />` for layout in an onboarding step this might help as a quick fix:

```tsx
<Card layout="horizontal">
  <Card.Content className="p-3">Step content here</Card.Content>
</Card>
```

### 🦔 `Navbar`

**TODO**

### 🦥 `Footer`

<img width="800" alt="Screenshot 2020-05-08 at 17 13 49" src="https://user-images.githubusercontent.com/5938217/81419929-628be280-914f-11ea-8bd4-7b410ec5f0d7.png">

The `legalOnly` prop has been removed and now comes in a **white theme** instead of **dark theme**.

### 🎹 `Accordion`

<img width="300" alt="React_components" src="https://user-images.githubusercontent.com/7198934/80108960-3a13be00-857d-11ea-8d2a-9912942b0c8c.png">

The styling has changed but the API is still the same.

## New additions

### 📐 `Spacing`

**v4** introduces a new way of spacing components apart. Using atomic classes there is more granular control over spacing at different breakpoints.

As part of this upgrade the `mb` property on `<Heading />`, `<Text />` & `<Badge />` components has been removed.

Before you had to do:

```tsx static
<Text mb>This is a text element</Text>
```

Now you can use className to define different `margin` or `padding` values

```tsx static
<Text className="mb-6 p-4">This is a text element</Text>
```

[Check the documentation](https://zopauk.github.io/react-components/#/Content?id=spacing) for all the possible combinations.

## What was fixed
