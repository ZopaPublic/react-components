### Summary

`useAccordion()` can be used to expand and show hidden content while being accessible.

It can be useful for accordions and in tables with expanding rows. To see it being used along with context see the [`<Accordion>`](/#/Components/Organisms/Accordion).

### Examples

```js
import { Link, Text, useAccordion } from '@zopauk/react-components';

const AccordionExample = () => {
  const { getHeaderProps, getSectionProps, isActiveSection } = useAccordion();

  const items = [
    {
      id: 'one',
      header: 'Header one',
      section: 'example one',
    },
    {
      id: 'two',
      header: 'Header two',
      section: 'example two',
    },
  ];

  return (
    <div aria-label="accordion example">
      {items.map(({ id, header, section, size }, index) => {
        const { ref: headerRef, onClick, ...headerPropsRest } = getHeaderProps(id, index);
        const { ref: sectionRef, ...sectionPropsRest } = getSectionProps(id, index);
        return (
          <div key={id}>
            <Link ref={headerRef} onClick={onClick} {...headerPropsRest}>
              {header}
            </Link>
            <div {...sectionPropsRest}>
              <div ref={sectionRef}>{section}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

<AccordionExample />;
```
