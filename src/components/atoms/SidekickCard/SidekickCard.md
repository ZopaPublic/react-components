These Action Cards can be used in isolation or paired with Hero Action Cards to create urgency around certain
events.

They Give customers feedback for their actions, such as giving the all-clear when something goes right,
alerting them when something goes wrong, or telling them something has changed.

There are 3 types of SidekickCards:

#### triumph type

For success messages. It shows a green left border and a green check mark.

```jsx { "props": { "style": { "backgroundColor": "#141E64" } } }
import { SidekickCard } from '@zopauk/react-components';

<SidekickCard type="triumph">
  <h2>The action has been successfully completed</h2>
  <p>Awesome everything is alright</p>
</SidekickCard>;
```

#### verified type

For verification messages. It shows a green left border and a green squiggly circle check mark.

```jsx { "props": { "style": { "backgroundColor": "#141E64" } } }
import { SidekickCard } from '@zopauk/react-components';

<SidekickCard type="verified">
  <h2>Your account has been verfied</h2>
  <p>You can star using your account now :)</p>
</SidekickCard>;
```

#### alert type

For alert/warning messages. It shows a yellow left border and a yellow warning icon.

```jsx { "props": { "style": { "backgroundColor": "#141E64" } } }
import { SidekickCard } from '@zopauk/react-components';

<SidekickCard type="alert">
  <h2>The action has a problem</h2>
  <p>Ops, something went wrong</p>
</SidekickCard>;
```
