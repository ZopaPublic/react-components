import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import Markdown from 'rsg-components/Markdown';

export const styles = ({ space, fontFamily, fontSize, color }) => ({
  container: {
    display: 'flex',
  },
  pathline: {
    fontFamily: fontFamily.monospace,
    fontSize: fontSize.small,
    color: color.light,
    marginRight: space[1],
  },
});

export const PathlineRenderer = ({ classes, children }) => (
  <div className={classes.container}>
    <span className={classes.pathline}>{children}</span>
    <Markdown
      text={`[![github icon](https://cdnjs.cloudflare.com/ajax/libs/octicons/4.3.0/svg/mark-github.svg)](https://github.com/zopaUK/react-components/blob/master/${children})`}
    />
  </div>
);

PathlineRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
};

export default Styled(styles)(PathlineRenderer);
