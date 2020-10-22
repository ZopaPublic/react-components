### Summary

`useExpander()` can be used to expand and show hidden content while being accessible.

It can be useful for accordions and in tables with expanding rows. To see it being used along with context see the [`<Accordion>`](/#/Components/Organisms/Accordion).

### Examples

```js
import { Accordion, Text, useExpander } from '@zopauk/react-components';

const ExpanderExample = () => {
  const { getHeaderProps, getSectionProps, isActiveSection } = useExpander();

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
    <>
      {items.map(({ id, header, section, size }, index) => {
        const { ref: headerRef, onClick, ...headerPropsRest } = getHeaderProps(id, index);
        const { ref: sectionRef, ...sectionPropsRest } = getSectionProps(id, index);
        return (
          <div key={id}>
            <Text ref={headerRef} onClick={onClick} {...headerPropsRest}>
              {header}
            </Text>
            <div {...sectionPropsRest}>
              <div ref={sectionRef}>{section}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

<ExpanderExample />;
```
