This is a Navbar subcomponent meant to be used with other components such as Navbar.Link and Navbar.Dropdown.
However, it can be used with other atoms and molecules as well (e.g Link). It implements a basic layout for the navbar creating slots where you can add whatever components you please.

White Navbar.Layout component

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#00B9A7", "border": "2px solid #efefef" } } }
import { Navbar, Link } from '@zopauk/react-components';

<Navbar.Layout left={<Link>left</Link>} center={<Link>center</Link>} right={<Link>right</Link>} />;
```

Teal Navbar.Layout component

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#fff", "border": "2px solid #efefef" } } }
import { Navbar, Link } from '@zopauk/react-components';

<Navbar.Layout backgroundColor="#00B9A7" left={<Link>left</Link>} right={<Link>right</Link>} />;
```
