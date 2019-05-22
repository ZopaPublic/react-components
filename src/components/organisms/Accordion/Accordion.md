Accordion doesn't render anything, it's just a namespace for `Accordion.Header` and `Accordion.Section` components. In order to create an accordion example,
you should use these components along with `useAccordion` hook. It is done this way to allow for greater flexibility. See the example below for more details.

Basic example:

```js
import useAccordion from 'zopa-react-components/components/hooks/useAccordion/useAccordion';

const AccordionExample = () => {
  const { getHeaderProps, getSectionProps, isActiveSection } = useAccordion();
  const items = [
    {
      id: 'one',
      header: 'header one',
      section: 'section one',
    },
    {
      id: 'two',
      header: 'header two',
      section: 'section two',
    },
    {
      id: 'three',
      header: 'header three',
      section: 'section three',
    },
  ];
  return (
    <div aria-label="accordion example">
      {items.map(({ id, header, section }, index) => (
        <div key={id}>
          <Accordion.Header isOpen={isActiveSection(index)} {...getHeaderProps(id, index)}>
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
