<h1 align="center"> Migration to 4.0.0 ♻️</h1>

<div align="center"><img src="https://media.giphy.com/media/lpt5YA1gY68yhJjGpm/giphy.gif" align="center" /></div>

# Index

- [Overview](#overview) 🔭
  - [What has changed](#what-has-changed)
  - [What has improved](#new-additions)
  - [What was fixed](#what-was-fixed)

# Overview 🔭

## What has changed?

### 📐 `Spacing`

With V4 introduces a new way of spacing components apart. Using atomic classes there is more granular control over spacing at different breakpoints.

As part of this upgrade the `mb` property on `<Heading />`, `<Text />` & `<Badge />` components has been deprecated.

Before you had to do:

```tsx static
<Text mb>This is a text element</Text>
```

Now you can use className to define different margin values

```tsx static
<Text as="p" className="mb-6">
  This is a text element
</Text>
```

## New additions

## What was fixed
