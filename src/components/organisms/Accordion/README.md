### Summary

`<Accordion />` doesn't render anything: it's just a namespace for `<Accordion.Header />` and `<Accordion.Section />`.

In order to create an accordion, you will need to use all of these components together.

You can pass a click handler to `<Accordion.Header />` if you need to track the opening and closing of the `<Accordion.Section />` on e.g. analytics.

This click handler can be a normal function receiving just a click event, or a curried function receiving a click event and a boolean `willBecomeActive` value.

### Example

```ts
import { Accordion, Text } from '@zopauk/react-components';

const AccordionExample = () => {
  const items = [
    {
      id: 'one',
      header: 'Regular',
      section: 'example one',
      size: undefined,
    },
    {
      id: 'two',
      header: 'Small',
      section: 'example two',
      size: 'small',
    },
  ];

  const curriedClickHandler = e => willBecomeActive => {
    console.log(willBecomeActive ? 'Element opening' : 'Element closing');
  };

  return (
    <Accordion aria-label="accordion example">
      {items.map(({ id, header, section, size }, index) => (
        <div key={id}>
          <Accordion.Header id={id} index={index} textSize={size} onClick={curriedClickHandler}>
            {header}
          </Accordion.Header>
          <Accordion.Section id={id} index={index}>
            <Text size={size}>{section}</Text>
          </Accordion.Section>
        </div>
      ))}
    </Accordion>
  );
};

<AccordionExample />;
```
