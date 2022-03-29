### Summary

Use `<RoundButton />` as a call to action within the **Zopa interface**.

It comes in a lot of variations to suit different needs.

by **default** the button is a `<div />` you can use the `as` prop to change the wrapping tag to a button or anchor.

### Examples

```tsx
import { RoundButton } from '@zopauk/react-components';
import { faCog } from '@fortawesome/free-solid-svg-icons';

<RoundButton as="a" href="#test" styling="secondary" icon={faCog} />;
```

- Primary

```tsx
import { RoundButton } from '@zopauk/react-components';
import { faCog } from '@fortawesome/free-solid-svg-icons';

<RoundButton icon={faCog} />;
```

- Secondary ( _standard button for most actions_ )

```tsx
import { RoundButton } from '@zopauk/react-components';
import { faCog } from '@fortawesome/free-solid-svg-icons';

<RoundButton styling="secondary" icon={faCog} />;
```

- Disabled state ( _for use when actions are disabled, both primary and secondary_ )

```tsx
import { RoundButton } from '@zopauk/react-components';
import { faCog } from '@fortawesome/free-solid-svg-icons';

<RoundButton disabled icon={faCog} />;
```

- Loading state ( _for use when actions are loading, both primary and secondary_ )

```tsx
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { RoundButton, FlexRow, FlexCol, FlexContainer } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={6}>
      <RoundButton $loading icon={faCog} />
    </FlexCol>
    <FlexCol xs={6}>
      <RoundButton styling="secondary" $loading icon={faCog} />
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- With varying icons

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RoundButton, FlexRow, FlexCol, FlexContainer } from '@zopauk/react-components';
import { faArrowCircleRight, faCreditCard, faCog } from '@fortawesome/free-solid-svg-icons';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <RoundButton icon={faCreditCard} styling="secondary" />
    </FlexCol>
    <FlexCol xs={4}>
      <RoundButton icon={faCog} styling="secondary" />
    </FlexCol>
    <FlexCol xs={4}>
      <RoundButton icon={faArrowCircleRight} styling="secondary" />
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- With label

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RoundButton, FlexRow, FlexCol, FlexContainer } from '@zopauk/react-components';
import { faArrowCircleRight, faCreditCard, faCog } from '@fortawesome/free-solid-svg-icons';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <RoundButton icon={faCreditCard} label="Make a payment" />
    </FlexCol>
    <FlexCol xs={4}>
      <RoundButton icon={faCog} label="Manage" styling="secondary" />
    </FlexCol>
    <FlexCol xs={4}>
      <RoundButton icon={faArrowCircleRight} label="Submit" styling="secondary" disabled />
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```
