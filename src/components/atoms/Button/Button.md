### Summary

Use `<Button />` whenever you need to render a call to action within a **Zopa interface**.

It comes in a lot of variations to suit different needs.

### Examples

- Primary ( _used for the main call to action, should only appear once per screen._ )

```tsx
import { Button } from '@zopauk/react-components';

<Button>Primary Button</Button>;
```

- Secondary ( _standard button for most actions_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button styling="secondary">Secondary Button</Button>;
```

- Disabled state ( _for use when actions are disabled, both primary and secondary_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button disabled={true}>Disabled Button</Button>;
```

- Text flavour ( _used to navigate to other pages, always in current window unless external icon is present_ )

```tsx
import { Button } from '@zopauk/react-components';

<Button styling="link">Text Button</Button>;
```

- As wide as its container

```tsx
import { Button, FlexRow, FlexCol, FlexContainer } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={8}>
      <Button fullWidth>Wide Button</Button>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Loading ( _spinner won't show for `styling="link"`, loading buttons are always `disabled`_ )

```tsx
import { Button, FlexRow, FlexCol, FlexContainer } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={6}>
      <Button loading>Loading</Button>
    </FlexCol>
    <FlexCol xs={6}>
      <Button styling="secondary" loading>
        Waiting
      </Button>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- With icons

```tsx
import { Button, FlexRow, FlexCol, FlexContainer } from '@zopauk/react-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faCoffee } from '@fortawesome/free-solid-svg-icons';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Button>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
        {'\u00A0'} Previous
      </Button>
    </FlexCol>
    <FlexCol xs={4}>
      <Button>
        Have some {'\u00A0'}
        <FontAwesomeIcon icon={faCoffee} />
      </Button>
    </FlexCol>
    <FlexCol xs={4}>
      <Button>
        Next {'\u00A0'}
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </Button>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Button as a custom component

```tsx
import React from 'react';
import styled from 'styled-components';
import { buttonStyle } from '@zopauk/react-components';

// could be a gatsby or react-router-dom <Link />
const Link = ({ href, ...rest }) => <a href={href} {...rest} />;

const ButtonLink = styled(Link)`
  ${buttonStyle}
`;

<ButtonLink href="https://www.zopa.com" styling="secondary">
  Custom Button
</ButtonLink>;
```

- Disabled anchor element with button style

```tsx
import { buttonStyle, ButtonProps } from '@zopauk/react-components';
import { MouseEvent } from 'react';
import styled from 'styled-components';

const StyledA = styled.a`
  ${buttonStyle}
`;

const ButtonLink = ({ href, styling, fullWidth, children, disabled }) => (
  <StyledA
    href={href}
    styling={styling}
    fullWidth={fullWidth}
    disabled={disabled}
    onClick={(e) => disabled && e.preventDefault()}
  >
    {children}
  </StyledA>
);

<ButtonLink href="https://www.zopa.com" disabled>
  Button Link
</ButtonLink>;
```
