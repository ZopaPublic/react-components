### Summary

Use this component to render a HTML unordered or ordered list of elements with or without icons.

### Examples

- List component can be used as a standard ul / ol:

```tsx
import { List, Text, colors, Icon } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<>
  <List as="ul">
    <List.Item icon={<Icon variant={faCoffee} color={colors.brand} />}>
      <Text as="p" color={colors.greyDark}>
        Item
      </Text>
    </List.Item>
    <List.Item>
      <Text as="p" color={colors.greyDark}>
        Item
      </Text>
    </List.Item>
    <List.Item>
      <Text as="p" color={colors.greyDark}>
        Item
      </Text>
    </List.Item>
  </List>

  <List as="ol">
    <List.Item>
      <Text as="p" color={colors.greyDark}>
        Item one
      </Text>
    </List.Item>
    <List.Item>
      <Text as="p" color={colors.greyDark}>
        Item two
      </Text>
    </List.Item>
    <List.Item>
      <Text as="p" color={colors.greyDark}>
        Item Three
      </Text>
    </List.Item>
  </List>
</>;
```
