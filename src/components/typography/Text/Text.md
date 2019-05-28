Text component

### Text sizes

```jsx
import { Text } from '@zopauk/react-components';

<>
  <div>
    <Text size="xl">Extra large</Text>
  </div>
  <div>
    <Text size="l">Large</Text>
  </div>
  <div>
    <Text size="m">Medium (default)</Text>
  </div>
  <div>
    <Text size="s">Small</Text>
  </div>
  <div>
    <Text size="xs">Extra small</Text>
  </div>
</>;
```

### Text font weights

```jsx
import { Text } from '@zopauk/react-components';

<>
  <div>
    <Text fw="normal">Normal (default)</Text>
  </div>
  <div>
    <Text fw="bold">Bold</Text>
  </div>
</>;
```

### Text custom colors

```jsx
import { Text } from '@zopauk/react-components';

<>
  <div>
    <Text>Default</Text>
  </div>
  <div>
    <Text color="#00B9A7">Teal</Text>
  </div>
  <div>
    <Text color="#5E35B1">Indigo</Text>
  </div>
</>;
```

### Text as different html elements

```jsx
import { Text } from '@zopauk/react-components';

<>
  <div>
    <Text as="span">Text as span tag (default)</Text>
  </div>
  <div>
    <Text as="p">Text as p tag</Text>
  </div>
</>;
```
