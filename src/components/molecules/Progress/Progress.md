### Summary

`<Progress />` is meant to show the current progress on a journey composed of multiple steps.

### Example

```jsx { "props": { "style": { "padding": "20px 10px 30px" } } }
import { colors, Progress } from '@zopauk/react-components';

<Progress totalSteps="4" currentStep="2" style={{ backgroundColor: colors.neutral.neutral25 }} />;
```
