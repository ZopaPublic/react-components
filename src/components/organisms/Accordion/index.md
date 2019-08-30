### Summary

`<Accordion />` doesn't render anything: it's just a namespace for `<Accordion.Header />` and `<Accordion.Section />`.

In order to create an accordion, you will need to use all of these components together.

### Example

```js
import { Accordion, Text } from '@zopauk/react-components';

const AccordionExample = () => {
  const items = [
    {
      id: 'one',
      header: 'header one - default (lead)',
      section: 'section one',
      size: 'large',
    },
    {
      id: 'two',
      header: 'header two - lead',
      section: 'section two',
      size: undefined,
    },
    {
      id: 'three',
      header: 'header three - regular',
      section: 'section three',
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
