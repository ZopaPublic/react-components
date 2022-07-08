import React from 'react';
import cx from 'clsx';
import Styled from 'rsg-components/Styled';

const styles = ({ color, fontSize }) => ({
  heading: {
    margin: '1em 0',
    color: color.base,
    fontWeight: 900,
  },
  heading1: {
    fontSize: fontSize.h1,
  },
  heading2: {
    fontSize: fontSize.h2,
  },
  heading3: {
    fontSize: fontSize.h3,
  },
  heading4: {
    fontSize: fontSize.h4,
  },
  heading5: {
    fontSize: fontSize.h5,
    fontWeight: 'bold',
  },
  heading6: {
    fontSize: fontSize.h6,
    fontStyle: 'italic',
  },
});

function HeadingRenderer({ classes, level, children, ...props }) {
  const Tag = `h${level}`;
  const headingClasses = cx(classes.heading, classes[`heading${level}`]);
  return (
    <Tag {...props} className={headingClasses}>
      {children}
    </Tag>
  );
}

export default Styled(styles)(HeadingRenderer);
