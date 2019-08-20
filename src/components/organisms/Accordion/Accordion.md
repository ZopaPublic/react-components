### Summary

`<Accordion />` doesn't render anything: it's just a namespace for `<Accordion.Header />` and `<Accordion.Section />`.

In order to create an accordion, you will need to use these two components along with the `useAccordion` hook.

### Example

```js
import { useAccordion, Text } from '@zopauk/react-components';

const AccordionExample = () => {
  const { getHeaderProps, getSectionProps, isActiveSection } = useAccordion();
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
    <div aria-label="accordion example">
      {items.map(({ id, header, section, size }, index) => (
        <div key={id}>
          <Accordion.Header isOpen={isActiveSection(index)} {...getHeaderProps(id, index)} textSize={size}>
            {header}
          </Accordion.Header>
          <Accordion.Section {...getSectionProps(id, index)}>
            <Text size={size}>{section}</Text>
          </Accordion.Section>
        </div>
      ))}
    </div>
  );
};

<AccordionExample />;
```
