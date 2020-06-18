### Summary

`<Progress />` is meant to show the current progress on a journey composed of multiple steps.

### Examples

Empty:

```tsx { "props": { "style": { "padding": "20px 10px 30px" } } }
import { colors, Progress } from '@zopauk/react-components';

<Progress totalSteps={4} currentStep={0} />;
```

In progress:

```tsx { "props": { "style": { "padding": "20px 10px 30px" } } }
import { colors, Progress } from '@zopauk/react-components';

<Progress totalSteps={4} currentStep={2} />;
```

Full:

```tsx { "props": { "style": { "padding": "20px 10px 30px" } } }
import { colors, Progress } from '@zopauk/react-components';

<Progress totalSteps={4} currentStep={4} />;
```

With step text:

⚠️ This style is not recommended and should be avoided unless absolutely necessary

```tsx { "props": { "style": { "padding": "20px 10px 30px" } } }
import { colors, Progress } from '@zopauk/react-components';

<Progress totalSteps={4} currentStep={2} withStep={true} />;
```

With custom progressColor:

```tsx { "props": { "style": { "padding": "20px 10px 30px" } } }
import { colors, Progress } from '@zopauk/react-components';

<Progress totalSteps={4} currentStep={2} progressColor={colors.actionPlain} />;
```
