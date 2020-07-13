### Summary

This library exports **Tailwind** flavoured [atomic classes](https://css-tricks.com/lets-define-exactly-atomic-css/) for dealing with spacing within components.

Here's a guide on how to use them:

- [margin](https://tailwindcss.com/docs/margin/#add-margin-to-a-single-side)
- [padding](https://tailwindcss.com/docs/padding/#add-padding-to-a-single-side)

This is our available spacing scale which is made out of **multiples of 4**:

```tsx static
const spacingScale = {
  'auto': 'auto', //Only available with margin
  '0': '0',
  '1': '4px',
  '2': '8px',
  '3': '12px',
  '4': '16px',
  '5': '20px',
  '6': '24px',
  '7': '32px',
  '8': '40px',
  '9': '56px',
  '10': '64px',
  '11': '104px',
};

/**
 * Using the indexes on the spacing scale above:
 */
<div className='mr-10' /> // margin-right: 64px
<div className='mx-5' /> // margin-left: 20px margin-right: 20px
<div className='pt-2' /> // padding-top: 8px
```

You can also specify **breakpoints** at which to start applying the spacing:

```tsx static
// available breakpoints
const breakpoints: {
  l: 992;
  m: 768;
  s: 576;
  xl: 1300;
  xs: 0;
};

<div className='l:mr-10' /> // apply `margin-right: 64px` for screens wider than 992px
<div className='s:pt-2' /> // apply `padding-top: 8px` for screens wider than 576px
```

### Examples

```tsx
// `<Spacing />` is NOT available in the library. It is used for documentation only.
<>
  <div className="mb-5">
    <Spacing className="mr-6 p-3">margin-right 24px</Spacing>
    <Spacing className="p-3">Block</Spacing>
  </div>
  <div>
    <Spacing className="l:mr-9 p-3">margin-right 56px on screens wider than 992px</Spacing>
    <Spacing className="p-3">Block</Spacing>
  </div>
  <div>
    <Spacing className="l:mx-auto" style={{ display: 'block', width: '70%' }}>
      margin-left auto margin-right auto on screens wider than 992px
    </Spacing>
  </div>
</>
```
