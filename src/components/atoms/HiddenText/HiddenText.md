### Summary

Use `<HiddenText />` to render hidden native HTML `<span />`.

This component is predominately used for text to be used for voice over to improve the accessibility of the app.

### Example

- The text below will be hidden (not visible) but can still be read by screen readers.

```tsx
import { HiddenText } from '@zopauk/react-components';

<HiddenText>Text for screen readers</HiddenText>;
```
