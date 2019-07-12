Accordion doesn't render anything: it's just a namespace for `<Accordion.Header />` and `<Accordion.Section />` components.

In order to create an accordion, you should use these components along with the `useAccordion` hook.
See the example below for more details.

```js
import { useAccordion } from '@zopauk/react-components';

const AccordionExample = () => {
  const { getHeaderProps, getSectionProps, isActiveSection } = useAccordion();
  const items = [
    {
      id: 'one',
      header: 'header one - default (lead)',
      section: 'section one',
    },
    {
      id: 'two',
      header: 'header two - lead',
      section: 'section two',
      size: 'lead',
    },
    {
      id: 'three',
      header: 'header three - regular',
      section: 'section three',
      size: 'regular',
    },
  ];

  return (
    <div aria-label="accordion example">
      {items.map(({ id, header, section, size }, index) => (
        <div key={id}>
          <Accordion.Header isOpen={isActiveSection(index)} {...getHeaderProps(id, index)} textSize={size}>
            {header}
          </Accordion.Header>
          <Accordion.Section {...getSectionProps(id, index)}>{section}</Accordion.Section>
        </div>
      ))}
    </div>
  );
};

<AccordionExample />;
```
