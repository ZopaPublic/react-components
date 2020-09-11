### Summary

This is a wrapper around [Card](./#/Components/Organisms/Card).

### Example

```tsx
import { ActionCard, CardImage, FlexContainer, FlexRow, FlexCol, Text, Spinner, Icon } from '@zopauk/react-components';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ActionCardIcon = (selected, cardId, loading) => {
  return loading && selected === cardId ? (
    <Spinner size="small" />
  ) : (
    <Icon variant={faChevronRight} color={colors.grey} />
  );
};

const handleClick = (id) => {
  alert(`The card with id ${id} has been clicked`);
};

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <ActionCard handleOnClick={handleClick} id="option-1" loading={true} handleClick={handleClick}>
        <Text as="p" weight="bold" className="mb-1">
          Option 1
        </Text>
        <Text as="p" size="small">
          I would like to select a option 1
        </Text>
      </ActionCard>
    </FlexCol>
    <FlexCol xs={4}>
      <ActionCard handleOnClick={handleClick} id="option-2" loading={true} handleClick={handleClick}>
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
