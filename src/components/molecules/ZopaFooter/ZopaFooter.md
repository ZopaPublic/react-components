### Summary

Use `<ZopaFooter />` to render Zopa's standard footer in a **Zopa application**.

### Examples

- Standard

```tsx
import { ZopaFooter } from '@zopauk/react-components';

<ZopaFooter />;
```

### Extending the Link component

**Note:** It's important that if you intend on extending the footers link component that you apply the correct styling as well.

Keep in mind `footerLinkStyle` is not the styles for the complete link and only for removing the initial underline.

For the links style use `linkStyle` from the link component.

```tsx
import { ZopaFooter, footerLinkStyle } from '@zopauk/react-components';
import styled from 'styled-components';

const YourLink = (props) => <a {...props} />;

const CustomLink = styled(YourLink)`
  ${footerLinkStyle}
`;

const renderLink = ({ href, children }) => <CustomLink href={href}>{children}</CustomLink>;

<ZopaFooter renderLink={renderLink} />;
```

### Adding custom legal copy

Its possible partners will want to customise the copy contained within the Footer. This can be done by passing in a `mainCustomLegalCopy` prop.

To enable line breaks we allow passing a string array. This will render each string as a separate paragraph.

```tsx
import { ZopaFooter } from '@zopauk/react-components';

<ZopaFooter mainCustomLegalCopy={['This is my first line of legal copy', 'This is my second line of legal copy']} />;
```
