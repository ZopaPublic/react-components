The `FlexCol` component is meant to be used a child component of `FlexRow` as its padding is offset by `FlexRow`'s negative horizontal margins.

Standard grid:

```jsx
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

Content based grid (collapsing on mobile)

```jsx
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

Flexbox responsive layouts:

```jsx
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

Layout with a column hidden on small screen:

```jsx
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

Grid aligned vertically:

```jsx
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

Each column with different vertical alignment

```jsx
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

Grid with custom gutter (48px):

```jsx
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

Grid with custom number of column (5):

```jsx
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
