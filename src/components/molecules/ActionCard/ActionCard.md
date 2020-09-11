### Summary

Use `<ActionCard />` to render an option card that optionally displays a loader and allows a custom icon to be passed in

### Example

- Action card without loader

```tsx
import { ActionCard, CardImage, FlexContainer, FlexRow, FlexCol, Text, Spinner, Icon } from '@zopauk/react-components';

const handleClick = (id) => {
  alert(`The card with id ${id} has been clicked`);
};

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <ActionCard handleClick={handleClick} id="option-1" handleClick={handleClick}>
        <Text as="p" weight="bold" className="mb-1">
          Option 1
        </Text>
        <Text as="p" size="small">
          I would like to select option 1
        </Text>
      </ActionCard>
    </FlexCol>
    <FlexCol xs={4}>
      <ActionCard handleClick={handleClick} id="option-2" handleClick={handleClick}>
        <Text as="p" weight="bold" className="mb-1">
          Option 2
        </Text>
        <Text as="p" size="small">
          I would like to select option 2
        </Text>
      </ActionCard>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Action card with loader

In this example `loading` is hardcoded to true but in your code the state would get triggered by the `handleClick` function

```tsx
import { ActionCard, CardImage, FlexContainer, FlexRow, FlexCol, Text, Spinner, Icon } from '@zopauk/react-components';

const handleClick = (id) => {
  alert(`The card with id ${id} has been clicked`);
  // set loading to true
};

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <ActionCard handleClick={handleClick} id="option-1" loading={true} handleClick={handleClick}>
        <Text as="p" weight="bold" className="mb-1">
          Option 1
        </Text>
        <Text as="p" size="small">
          I would like to select option 1
        </Text>
      </ActionCard>
    </FlexCol>
    <FlexCol xs={4}>
      <ActionCard handleClick={handleClick} id="option-2" loading={true} handleClick={handleClick}>
        <Text as="p" weight="bold" className="mb-1">
          Option 2
        </Text>
        <Text as="p" size="small">
          I would like to select option 2
        </Text>
      </ActionCard>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Action card with custom icon

```tsx
import { ActionCard, CardImage, FlexContainer, FlexRow, FlexCol, Text, Spinner, Icon } from '@zopauk/react-components';
import { faPizzaSlice, faHamburger } from '@fortawesome/free-solid-svg-icons';

const handleClick = (id) => {
  alert(`The card with id ${id} has been clicked`);
};

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <ActionCard handleClick={handleClick} id="option-1" icon={faPizzaSlice} handleClick={handleClick}>
        <Text as="p" weight="bold" className="mb-1">
          Option 1
        </Text>
        <Text as="p" size="small">
          I would like to select option 1
        </Text>
      </ActionCard>
    </FlexCol>
    <FlexCol xs={4}>
      <ActionCard handleClick={handleClick} id="option-2" icon={faHamburger} handleClick={handleClick}>
        <Text as="p" weight="bold" className="mb-1">
          Option 2
        </Text>
        <Text as="p" size="small">
          I would like to select option 2
        </Text>
      </ActionCard>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```
