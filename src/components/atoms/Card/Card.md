The design team has agreed on three types of cards depending on the context.

#### card type (_default_)

A standard or default card, which we'll assume if the type property has been omitted or set explicitly to card. As of this writing, cards of this type are non-interactable and have a border radius of 4px.

```js { "props": { "style": { "backgroundColor": "#141E64" } } }
<Card type="card">
  <div>I'm a card</div>
  <div>with an explicit type prop.</div>
</Card>
```

#### linkCard type

A card that is meant to be clickable and respond to user interactions (hover effects et al). Border radius of 8px. Note that any additional **styles and effects are meant to be added separately** by using this component as a base on which to build another with the desired effects.

Cards of type `"linkCard"` are meant to be used to build components that interact with user actions.

```js
import Header3 from 'zopa-react-components/components/typography/Header3/Header3';

<div style={{ cursor: 'pointer' }} onClick={() => alert("You're a winner!")}>
  <Card borderColor={colors.primary.blue500} backgroundColor={colors.primary.teal600} type="linkCard">
    <Header3>New rates today!</Header3>
    <p>Find out how you can benefit the most from our new rates.</p>
  </Card>
</div>;
```

#### button type

Same as above, but meant to appear as a button with minimal content. Has semicircular borders on horizontal axis.

A card is entirely white (`colors.base.white`) by default.

```jsx
<div>
  <div data-comment="Button 1" style={{ marginBottom: '20px' }}>
    <Card type="button" backgroundColor={colors.primary.teal600}>
      I look like a button
    </Card>
  </div>

  <div data-comment="Button 2" style={{ marginBottom: '20px' }}>
    <Card type="button" backgroundColor={colors.primary.teal600}>
      <div style={{ textAlign: 'center' }}>Mix and match for desired effects</div>
    </Card>
  </div>

  <div data-comment="Button 3">
    <Card type="button" backgroundColor={colors.primary.teal600} display="inline-block">
      Inline button example
    </Card>
  </div>
</div>
```
