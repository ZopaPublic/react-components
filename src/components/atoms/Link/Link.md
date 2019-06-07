Creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.

**Before using read this carefully**

- Links are never Headers.

- Choose the color using this table:

  | Background color | Font Color                       |
  | ---------------- | -------------------------------- |
  | white or grey    | colors.primary.blue500 (default) |
  | dark colored     | respective 0/25 (lightest)       |
  | light colored    | respective 900 (darkest)         |

Component with `target="_blank"`:

```js
import { Lead, Link } from '@zopauk/react-components';

<Lead>
  Lead component text with
  <Link target="_blank" href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a Link component
  </Link>
</Lead>;
```

Component without `target="_blank"` (notice that the square disappeared!)

```js
import { Lead, Link } from '@zopauk/react-components';

<Lead>
  Lead component text with
  <Link href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a Link component
  </Link>!
</Lead>;
```
