### Summary

`<Accordion />` doesn't render anything: it's just a namespace for `<Accordion.Header />` and `<Accordion.Section />`.

In order to create an accordion, you will need to use all of these components together.

You can pass a click handler function to `<Accordion.Header />` if you need to track the opening and closing of the `<Accordion.Section />` for e.g. analytics.

This click handler will receive a boolean indicating the current state of `<Accordion.Section />` _before_ the click. False means the section is currently closed and it will open.

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

  const onClick = (isActive) => {
    console.log(isActive ? 'Section closing' : 'Section opening');
  };

  return (
    <Accordion aria-label="accordion example">
      {items.map(({ id, header, section, size }, index) => (
        <div key={id}>
          <Accordion.Header id={id} index={index} textSize={size} onClick={onClick}>
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
