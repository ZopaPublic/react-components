### Summary

`<InputRangeWithControls />` add controls (plus and minus buttons) to an [`<InputRange />`](#/Components/Atoms/InputRange) component.

### Example

```tsx
import { Fragment, useState } from 'react';
import { InputRangeWithControls, Text } from '@zopauk/react-components';

const ControlledInputRange = () => {
  const [value, setValue] = useState(75);

  return (
    <Fragment>
      <Text mb>Value: {value}</Text>
      <InputRangeWithControls value={value} onChange={setValue} />
    </Fragment>
  );
};

<ControlledInputRange />;
```
