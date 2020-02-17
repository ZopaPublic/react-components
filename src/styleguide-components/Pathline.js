import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

export const styles = ({ space, fontFamily, fontSize, color }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  pathline: {
    fontFamily: fontFamily.monospace,
    fontSize: fontSize.small,
    color: color.light,
    marginRight: space[1],
  },
  icon: {
    marginBottom: 0,
  },
});

export const PathlineRenderer = ({ classes, children }) => (
  <div className={classes.container}>
    <span className={classes.pathline}>{children}</span>
    <a href={`https://github.com/zopaUK/react-components/blob/master/${children}`}>
      <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.3.0/svg/mark-github.svg" alt="github icon" />
    </a>
  </div>
);

PathlineRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
};

export default Styled(styles)(PathlineRenderer);
