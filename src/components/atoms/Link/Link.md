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
import { Text, Link } from '@zopauk/react-components';

<Text size="large" as="p">
  A big paragraph with
  <Link target="_blank" href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a link
  </Link>!
</Text>;
```

Component without `target="_blank"` (notice that the square disappeared!)

```js
import { Text, Link } from '@zopauk/react-components';

<Text size="large" as="p">
  A big paragraph with
  <Link href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a link
  </Link>!
</Text>;
```
