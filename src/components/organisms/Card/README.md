### Summary

`<Card />` is used to group together content and actions.

It comes in a lot of variations to suit different needs.

### Example

- Full example of responsive cards
- Make sure that all links have descriptive name, if not (e.g. in case of image used as link), use aria-label

```tsx
import {
  Card,
  Button,
  FlexRow,
  FlexCol,
  FlexContainer,
  useViewport,
  breakpoints,
  grid,
} from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={12} l={4} className="mb-4">
      <Card layout={useViewport().width > grid.breakpoints.l ? 'vertical' : 'horizontal'}>
        <Card.Image
          overlayWith={<a href="http://zopa.com" target="_blank" aria-label="cat image with link to zopa home" />}
          url="http://placekitten.com/500/300"
        />
        <Card.Content>
          <Card.Heading>Macaroon bear claw powder</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary" fullWidth={useViewport().width > grid.breakpoints.l}>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={12} l={4} className="mb-4">
      <Card layout={useViewport().width > grid.breakpoints.l ? 'vertical' : 'horizontal'}>
        <Card.Image
          overlayWith={<a href="http://zopa.com" target="_blank" aria-label="cat image with link to zopa home" />}
          url="http://placekitten.com/500/300"
        />
        <Card.Content>
          <Card.Heading>Macaroon bear claw powder</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary" fullWidth={useViewport().width > grid.breakpoints.l}>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={12} l={4} className="mb-4">
      <Card layout={useViewport().width > grid.breakpoints.l ? 'vertical' : 'horizontal'}>
        <Card.Image
          overlayWith={<a href="http://zopa.com" target="_blank" aria-label="cat image with link to zopa home" />}
          url="http://placekitten.com/500/300"
        />
        <Card.Content>
          <Card.Heading>Macaroon bear claw powder</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary" fullWidth={useViewport().width > grid.breakpoints.l}>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Vertical card with an image, heading, text, and a full width button
- Make sure that all links have descriptive name, if not (e.g. in case of image used as link), use aria-label

```tsx
import { Card, Button, FlexContainer, FlexCol, FlexRow } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card styling="primary">
        <Card.Image
          overlayWith={<a href="http://zopa.com" target="_blank" aria-label="cat image with link to zopa home" />}
          url="http://placekitten.com/500/300"
        />
        <Card.Content>
          <Card.Heading>Primary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="primary" fullWidth>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={4}>
      <Card>
        <Card.Image
          overlayWith={<a href="http://zopa.com" target="_blank" aria-label="cat image with link to zopa home" />}
          url="http://placekitten.com/500/300"
        />
        <Card.Content>
          <Card.Heading>Secondary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary" fullWidth>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Vertical card with a heading, text, and a full width button

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card styling="primary">
        <Card.Content>
          <Card.Heading>Primary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="primary" fullWidth>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={4}>
      <Card>
        <Card.Content>
          <Card.Heading>Secondary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary" fullWidth>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Vertical card with a heading, text, and a regular button

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card styling="primary">
        <Card.Content>
          <Card.Heading>Primary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="primary">Button</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={4}>
      <Card>
        <Card.Content>
          <Card.Heading>Secondary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary">Button</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Vertical card with a heading, text, and two button

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card styling="primary">
        <Card.Content>
          <Card.Heading>Primary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary">Button</Button>
            <Button styling="primary">Button</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={4}>
      <Card>
        <Card.Content>
          <Card.Heading>Secondary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary">Button</Button>
            <Button styling="primary">Button</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Vertical secondary card with just a heading and text

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card>
        <Card.Content>
          <Card.Heading>Secondary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Vertical brand card

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card styling="brand">
        <Card.Content>
          <Card.Heading>Brand card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Info card with icon, heading and text

`<Card.LineItem />` should be rendered outside of `<Card.Content />`

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol, Icon } from '@zopauk/react-components';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card styling="info" layout="horizontal" className="py-2">
        <Card.LineItem align="start">
          <Icon variant={faCalendarAlt} color={colors.grey} size="lg" className="ml-2" />
        </Card.LineItem>
        <Card.Content className="pl-2">
          <Card.Heading>Info card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Horizontal action card with single line item

`<Card.LineItem />` should be rendered outside of `<Card.Content />`

- If card is a link and card title or content is not self-explanatory, add aria-label

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol, Link } from '@zopauk/react-components';
import Icon from '../../atoms/Icon/Icon.tsx';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <StyledLink href="http://zopa.com">
        <Card styling="action" layout="horizontal">
          <Card.Content>
            <Card.Heading>View sweets</Card.Heading>
            <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          </Card.Content>
          <Card.LineItem>
            <Icon variant={faChevronRight} color={colors.grey} />
          </Card.LineItem>
        </Card>
      </StyledLink>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Horizontal action card with two line items

`<Card.LineItem />` should be rendered outside of `<Card.Content />`

- If card is a link and card title or content is not self-explanatory, add aria-label

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol, Link } from '@zopauk/react-components';
import Icon from '../../atoms/Icon/Icon.tsx';
import { faPiggyBank, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  &.has-icon:hover svg path,
  &.has-icon:active svg path {
    fill: currentcolor;
  }
`;

<FlexContainer>
  <FlexRow>
    <FlexCol xs={6}>
      <StyledLink href="http://zopa.com" className="has-icon">
        <Card styling="action" layout="horizontal">
          <Card.LineItem>
            <Icon variant={faPiggyBank} color={colors.brand} size="2x" className="ml-4" />
          </Card.LineItem>
          <Card.Content className="py-6 pl-1">
            <Card.Heading className="mb-1">View sweets</Card.Heading>
            <Card.Text>Ice cream marzipan marshmallow caramel piggy.</Card.Text>
          </Card.Content>
          <Card.LineItem>
            <Icon variant={faChevronRight} color={colors.grey} />
          </Card.LineItem>
        </Card>
      </StyledLink>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```
