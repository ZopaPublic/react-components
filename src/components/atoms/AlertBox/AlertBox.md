### Summary

`<Alertbox />` can be used to alert something important to the user within an interface. Its icon can be customised.

### Example

```tsx
import { AlertBox, Link, Text, SizedContainer } from '@zopauk/react-components';

<AlertBox>
  <SizedContainer size="long">
    <Text as="p" mb>
      The personal information we have collected from you will be used to verify your identity.
    </Text>
    <Link href="#">Tell me more in plain English</Link>
  </SizedContainer>
</AlertBox>;
```
