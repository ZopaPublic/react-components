The design team has agreed on three types of cards depending on the context.

#### card type ( default )

A standard or default card, which we'll assume if the type property has been omitted or set explicitly to card. As of this writing, cards of this type are non-interactable and have a border radius of 4px.

```js { "props": { "style": { "backgroundColor": "#141E64" } } }
import { Card } from '@zopauk/react-components';

<Card type="card">
  <p>I'm a card 😀 , with an explicit type prop.</p>
</Card>;
```

#### linkCard type

A card that is meant to be clickable and respond to user interactions (hover effects et al). Border radius of 8px. Note that any additional **styles and effects are meant to be added separately** by using this component as a base on which to build another with the desired effects.

Cards of type `"linkCard"` are meant to be used to build components that interact with user actions.

```js { "props": { "style": { "backgroundColor": "#141E64" } } }
import { Card, Header3 } from '@zopauk/react-components';

<div onClick={() => alert("You're a winner!")}>
  <Card type="linkCard">
    <Header3>New rates today! 💸</Header3>
    <p>Find out how you can benefit the most from our new rates.</p>
  </Card>
</div>;
```
