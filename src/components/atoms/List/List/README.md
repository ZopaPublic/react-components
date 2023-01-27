### Summary

Use this component to render a HTML unordered or ordered list of elements with or without icons.

### Usage

```tsx static
<List>
  <List.Item icon={<Icon variant={faCoffee} color={colors.brand} />}>
    <Text as="p">Item One</Text>
  </List.Item>
</List>
```

### Examples

- Accepts icons
- support for ul / ol
- Can be nested

```tsx
import { List, Text, colors, Icon } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<>
  <List>
    <List.Item icon={<Icon variant={faCoffee} color={colors.brand} />}>
      <Text as="p" color={colors.greyDark}>
        Item
      </Text>
    </List.Item>
    <List.Item>
      <Text as="p" color={colors.greyDark}>
        Item
      </Text>
      <List>
        <List.Item>
          <Text as="p" color={colors.greyDark}>
            Indented Item one
          </Text>
        </List.Item>
        <List.Item>
          <Text as="p" color={colors.greyDark}>
            Indented Item two
          </Text>
        </List.Item>
        <List.Item>
          <Text as="p" color={colors.greyDark}>
            Indented Item Three
          </Text>
        </List.Item>
      </List>
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
