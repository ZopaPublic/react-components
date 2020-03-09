### Summary

`<FlexCol />` is meant to be used a child component of `<FlexRow />` ... its padding is offset by `<FlexRow />` _negative_ horizontal margin.

### Examples

- Standard layout

```tsx
import { FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer gutter={0}>
  <FlexRow>
    <FlexCol xs={12} m={6}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-6</div>
    </FlexCol>
    <FlexCol xs={12} m={3}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-3</div>
    </FlexCol>
    <FlexCol xs={12} m={3}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-3</div>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Content based layout ( _collapsing on mobile_ )

```tsx
import { FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={12} m="fill">
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-fill</div>
    </FlexCol>
    <FlexCol xs={12} m="auto">
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-auto</div>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Responsive layout

```tsx
import { FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow justify="space-between">
    <FlexCol xs={12} m="auto">
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-auto</div>
    </FlexCol>
    <FlexCol xs={12} m="auto">
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-auto</div>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Layout with a column hidden on small screens

```tsx
import { FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow justify="space-between">
    <FlexCol xs="hidden" m={6}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-hidden m-auto</div>
    </FlexCol>
    <FlexCol xs={12} m={6}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-auto</div>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Layout with column order swapped on small screens

```tsx
import { FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow direction="row-reverse">
    <FlexCol xs={12} m={6}>
      <div style={{ backgroundColor: '#73E1D6' }}>second column</div>
    </FlexCol>
    <FlexCol xs={12} m={6}>
      <div style={{ backgroundColor: '#73E1D6' }}>first column</div>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Layout aligned vertically

```tsx
import { FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow align="center">
    <FlexCol xs={12} m={3}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-9</div>
    </FlexCol>
    <FlexCol xs={12} m={3}>
      <div style={{ backgroundColor: '#73E1D6', height: '50px' }}>xs-12 m-3</div>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Each column with different vertical alignment

```tsx
import { FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={12} m={3} align="flex-end">
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-9</div>
    </FlexCol>
    <FlexCol xs={12} m={3} align="center">
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-9</div>
    </FlexCol>
    <FlexCol xs={12} m={3} align="flex-start">
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-9</div>
    </FlexCol>
    <FlexCol xs={12} m={3}>
      <div style={{ backgroundColor: '#73E1D6', height: '50px' }}>xs-12 m-3</div>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Layout with custom gutter ( `48px` )

```tsx
import { FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow gutter={48}>
    <FlexCol xs={12} m={6}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-6</div>
    </FlexCol>
    <FlexCol xs={12} m={3}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-3</div>
    </FlexCol>
    <FlexCol xs={12} m={3}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-12 m-3</div>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Layout with custom number of columns ( `5` )

```tsx
import { FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow cols={5}>
    <FlexCol xs={1}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-1</div>
    </FlexCol>
    <FlexCol xs={1}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-1</div>
    </FlexCol>
    <FlexCol xs={1}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-1</div>
    </FlexCol>
    <FlexCol xs={1}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-1</div>
    </FlexCol>
    <FlexCol xs={1}>
      <div style={{ backgroundColor: '#73E1D6' }}>xs-1</div>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```
