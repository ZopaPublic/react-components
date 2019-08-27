### Summary

Use `<Link />` to create hyperlinks to other web pages, files, locations within the same page, email addresses, or any other URL.

⚠️ &nbsp; Links are never headings

⚠️ &nbsp; Choose the color according to the following table:

| Background color | Font Color                            |
| ---------------- | ------------------------------------- |
| white or grey    | `colors.base.secondary` ( _default_ ) |
| dark colored     | `colors.neutral.white`                |
| light colored    | `colors.neutral.dark`                 |

### Examples

- With `target="_blank"`

```js
import { Text, Link } from '@zopauk/react-components';

<Text size="large" as="p">
  Some text with
  <Link target="_blank" href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a link
  </Link>
</Text>;
```

- Without `target="_blank"` ( _notice that the square icon disappeared_ )

```js
import { Text, Link } from '@zopauk/react-components';

<Text size="large" as="p">
  Some text with
  <Link href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a link
  </Link>
</Text>;
```
