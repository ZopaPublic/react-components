<h1 align="center"> Migration to 2.0.0 ♻️</h1>

<div align="center"><img src="https://media.giphy.com/media/7p0qZOxUe5cIM/giphy.gif" align="center" /></div>

# Index

- [Overview](#overview)

  - [What's coming in `2.0.0`](#user-content-whats-coming-in-200-)
  - [What has changed](#user-content-what-has-changed-)
  - [What's new](#user-content-whats-new-)

- [Primer](#primer)
  - [Colors](#colors-)
  - [Typography](#typography-)
  - [Icons](#icons)
  - [Navbar](#navbar)
  - [Accordion](#accordion)

# Overview

## What's coming in `2.0.0` ?

The new major version of `@zopauk/react-components` contains brand updates on our components reflecting the new design system that's developed at Zopa.

### Colors

<img src="https://user-images.githubusercontent.com/5938217/63521744-51367380-c4f7-11e9-9c01-576b066da65c.png" width="300" />

Limit the colours we expose to a small number and give them a function.

### Typograhpy

<img src="https://user-images.githubusercontent.com/5938217/65140301-85298980-da0e-11e9-82cc-2a541449d660.png" width="300" />

Remove Alverata as _heading fonts_ and use [Open Sans](https://fonts.google.com/specimen/Open+Sans) for everything.  
Standardise the [typography spec](https://user-images.githubusercontent.com/5938217/63936465-2c468100-ca60-11e9-8340-4313eef20fc4.png) ( _font sizes, weights, line-heights..._ )

## What we removed ?

You won't be able to access any of the [old colors](https://zopauk.github.io/react-components/#/Content?id=colors):

```ts
import { colors } from '@zopauk/react-components';

// all these will throw access errors 🙀
colors.primary.blue500;
colors.neutral.neutral75;
colors.alert.danger500;
```

all the typography components of **v1**:

- [`<Caption />`](https://zopauk.github.io/react-components/#/Components/Typography/Caption)
- [`<Header1 />`](https://zopauk.github.io/react-components/#/Components/Typography/Header1)
- [`<Header2 />`](https://zopauk.github.io/react-components/#/Components/Typography/Header2)
- [`<Header3 />`](https://zopauk.github.io/react-components/#/Components/Typography/Header3)
- [`<Title1 />`](https://zopauk.github.io/react-components/#/Components/Typography/Title1)
- [`<Title2 />`](https://zopauk.github.io/react-components/#/Components/Typography/Title2)
- [`<Title3 />`](https://zopauk.github.io/react-components/#/Components/Typography/Title3)
- [`<Subhead />`](https://zopauk.github.io/react-components/#/Components/Typography/Subhead)
- [`<Lead />`](https://zopauk.github.io/react-components/#/Components/Typography/Lead)
- [`<Text />`](https://zopauk.github.io/react-components/#/Components/Typography/Text)

the `type="button"` variant of [Card](https://zopauk.github.io/react-components/#/Components/Atoms/Card) 🗑

```tsx
import { colors } from '@zopauk/react-components';

// Noop!
<Card type="button">I look like a button</Card>;
```

and [HelpText](https://zopauk.github.io/react-components/#/Components/Atoms/HelpText) 🗑

```tsx
import { HelpText } from '@zopauk/react-components';

// <Text as="p">Use this instead</Text>
<HelpText>Noop</HelpText>;
```

the `size` prop of [Badge](https://zopauk.github.io/react-components/#/Components/Atoms/Badge) 🗑

```tsx
import { colors } from '@zopauk/react-components';

// Nie!
<Badge size="xs">Ups</Card>;
```

and the following icon components:

- [`<Instragram />`](https://zopauk.github.io/react-components/#/Components/Icons/Instagram)
- [`<Facebook />`](https://zopauk.github.io/react-components/#/Components/Icons/Facebook)
- [`<Twitter />`](https://zopauk.github.io/react-components/#/Components/Icons/Twitter)

## What has changed ?

The render API of [Navbar](http://localhost:6060/#/Components/Organisms/Navbar) and [Accordion](http://localhost:6060/#/Components/Organisms/Accordion) have been changed to be more consistent with [JSX dot notation](https://reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type).

For **Navbar**, we just renamed `<Navbar.Layout />` to just `<Navbar />`:

```tsx
import { Navbar } from '@zopauk/react-components'

// before
<Navbar.Layout
  right={ /* ... */ }
  left={ /* ... */ }
  {...config}
/>

// now
<Navbar
  right={ /* ... */ }
  left={ /* ... */ }
  {...otherConfig}
/>
```

For **Accordion**:

- you now need to wrap the sub-components with `<Accordion>`
- `<Accordion.Header size />` matches `<Text size />`

```tsx
import { Accordion } from '@zopauk/react-components'

// before
<div>
  <Accordion.Header isOpen=isOpen}>{header}</Accordion.Header>
  <Accordion.Section>{section}</Accordion.Section>
</div>

// now
<Accordion aria-label="accordion example">
  <Accordion.Header isOpen=isOpen}>{header}</Accordion.Header>
  <Accordion.Section>{section}</Accordion.Section>
</Accordion>
```

See this article for more in-depth on the [benefits of dot notation](https://medium.com/@skovy/using-component-dot-notation-with-typescript-to-create-a-set-of-components-b0b2aad4892b).

Whichever component had a `colour` prop, that colour prop will only accept one of the new [defined colours](http://localhost:6060/#/Content?id=colors), or a subset of them where it makes sense.

## What's new ?

#### [`<Text />`](https://zopauk.github.io/react-components/#/Components/Atoms/Text)

Whenever you have to render short or long body text on your app, use the new `<Text />` component rather than HTML tags directly ( `<p>`, `<span`>, etc... ).

It's built to match the latest specs on typography and give you enough flexibility to match any design.

Make sure you use the `as` prop when rendering paragraph text so it ends up tagged semantically:

```tsx
<Text as="p">A long paragraph illustrating all the key features of Mario Bros</Text>
<Text weight="bold">v2.0.0</Text> /* by default <Text /> renders a <span /> ... */
```

#### [`<Heading />`](https://zopauk.github.io/react-components/#/Components/Atoms/Heading)

Whenever you need to render a heading in your app, use the new `<Heading />` component rather than HTML tags directly ( `<h1>`, `<h2>`, etc.. ).

The `as` prop is mandatory to make you think which heading tag you're rendering.

🚨 &nbsp; **Please don't render paragraph text as a heading:**

```tsx
/* Don't do this, talk to the designer on why he's diverting from our design system! */
<Heading as="h3">A long paragraph illustrating all the key features of Mario Bros</Heading>
```

#### [`colors`](https://zopauk.github.io/react-components/#/Components/Atoms/Heading)

Our colour API is much more concise now and divided into three categories:

- **base** ( _colors related to Zopa's brand_ )
- **neutral** ( _colors to enhance the user experience_ )
- **semantic** ( _colors related to particular states of the application_ )

# Primer

## Colors 🎨

⚠️ &nbsp; **If your colour doesn't match any of the following conversion tables speak to the design team**

#### Legend

```ts
colors.primary.blue{400|500|600}
// short for
colors.primary.blue400
colors.primary.blue500
colors.primary.blue600

colors.neutral.neutral{*}
// short for ... any neutral color
colors.neutral.neutral10
colors.neutral.neutral25
colors.neutral.neutral50
colors.neutral.neutral75
```

#### Brand

| v1                       | v2                      |
| ------------------------ | ----------------------- |
| `colors.primary.teal600` | `colors.base.primary`   |
| `colors.primary.teal{*}` | `colors.base.primary`   |
| `colors.primary.blue{*}` | `colors.base.secondary` |

#### Neutral

| v1                                           | v2                         |
| -------------------------------------------- | -------------------------- |
| `colors.neutral.neutral{10\|25}`             | `colors.neutral.nearWhite` |
| `colors.neutral.neutral{50\|75}`             | `colors.neutral.light`     |
| `colors.neutral.neutral{100\|200\|300}`      | `colors.neutral.medium`    |
| `colors.neutral.neutral{400\|500\|600\|700}` | `colors.neutral.nearDark`  |
| `colors.neutral.neutral{800\|900}`           | `colors.neutral.dark`      |

#### Semantic

| v1                         | v2                        |
| -------------------------- | ------------------------- |
| `colors.primary.veggy{*}`  | `colors.semantic.success` |
| `colors.primary.danger{*}` | `colors.semantic.error`   |
| `colors.primary.alerty{*}` | `colors.semantic.alert`   |

## Typography ✍️

| v1             | v2                      |
| -------------- | ----------------------- |
| `<Header1 />`  | `<Heading as="h1" />`   |
| `<Title1 />`   | `<Heading as="h1" />`   |
| `<Header2 />`  | `<Heading as="h2" />`   |
| `<Title2 />`   | `<Heading as="h1" />`   |
| `<Header3 />`  | `<Heading as="h3" />`   |
| `<Title3 />`   | `<Heading as="h1" />`   |
| `<Header4 />`  | `<Heading as="h4" />`   |
| `<Lead />`     | `<Text size="lead" />`  |
| `<SubHead />`  | `<Text as="p" />`       |
| `<Caption />`  | `<Text size="small" />` |
| `<HelpText />` | `<Text as="p" />`       |

## Icons

_Just the exported name of some icons changes for consistency. Added consistency between `activeColor` and `inactiveColor` props defaults._ )

| v1                  | v2                  |
| ------------------- | ------------------- |
| `<Alert />`         | `<AlertIcon />`     |
| `<Arrow />`         | `<ArrowIcon />`     |
| `<CheckMarkIcon />` | `<CheckMarkIcon />` |
| `<ZopaLogo />`      | `<ZopaIcon />`      |

It would be best if you weren't using anymore:

- `<Instagram />`
- `<Twitter />`
- `<Facebook />`

## Navbar

_Just the exported name of `<Navbar.Layout />` changed_

```tsx
// Before
<Navbar.Layout left={/* ... */} right={/* ... */} />

// Now
<Navbar left={/* ... */} right={/* ... */} />
```

## Accordion

_Need to wrap stuff in `<Accordion />` rather than a `<div />`_

```tsx
// before
<div>
  <Accordion.Header />
  <Accordion.Section />
</div>

// now
<Accordion aria-label="accordion example">
  <Accordion.Header /> /* `size` prop now matches the one of `<Text />` */
  <Accordion.Section />
</Accordion>
```
