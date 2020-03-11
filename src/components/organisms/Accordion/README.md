### Summary

`<Accordion />` doesn't render anything: it's just a namespace for `<Accordion.Header />` and `<Accordion.Section />`.

In order to create an accordion, you will need to use all of these components together.

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

  return (
    <Accordion aria-label="accordion example">
      {items.map(({ id, header, section, size }, index) => (
        <div key={id}>
          <Accordion.Header id={id} index={index} textSize={size}>
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
