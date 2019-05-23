import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled from 'rsg-components/Styled';

const styles = () => ({
  link: {
    '&, &:link, &:visited': {
      fontSize: 'inherit',
      color: 'white',
      textDecoration: 'none',
    },
    '&:hover, &:active': {
      isolate: false,
      color: 'lightGray',
      cursor: 'pointer',
    },
  },
});

export function LinkRenderer({ classes, children, ...props }) {
  return (
    <a {...props} className={cx(classes.link, props.className)}>
      {children}
    </a>
  );
}

LinkRenderer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default Styled(styles)(LinkRenderer);
