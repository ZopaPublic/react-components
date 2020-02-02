### Summary

Use `<Link />` to create hyperlinks to other web pages, files, locations within the same page, email addresses, or any other URL.

⚠️ &nbsp; Links are never headings

⚠️ &nbsp; Choose the color according to the following table:

| Background color     | Font Color                            |
| -------------------- | ------------------------------------- |
| white, grey or light | `colors.base.secondary` ( _default_ ) |
| dark                 | `colors.neutral.white`                |

### Examples

- Normal link

```js
import { Text, Link } from '@zopauk/react-components';

<Text as="p">
  Some text with
  <Link href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a link
  </Link>
</Text>;
```

- Button link

```js
import { Text, Link } from '@zopauk/react-components';

<Text as="p">
  Some text with
  <Link as="button" href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a link
  </Link>
</Text>;
```

- Negative link

```js { "props": { "style": { "backgroundColor": "#00B9A7", "border": "none" } } }
import { Text, Link, colors } from '@zopauk/react-components';

<Text as="p" color={colors.neutral.white}>
  Some text with
  <Link color={colors.neutral.white} href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a link
  </Link>
</Text>;
```

- With `target="_blank"` ( _notice a square icon appeared_ )

```js
import { Text, Link } from '@zopauk/react-components';

<Text as="p">
  Some text with
  <Link target="_blank" href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a link
  </Link>
</Text>;
```
