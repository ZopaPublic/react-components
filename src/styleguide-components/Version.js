import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import styled from 'styled-components';

const Rainbow = styled.p`
  background-image: linear-gradient(to left, violet, indigo, cyan, pink, yellow, orange, red);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  font-size: 18px;
`;

const styles = ({ fontFamily, fontSize }) => ({
  version: {
    color: '#FFB428',
    margin: [[5, 0, 0, 0]],
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
    fontWeight: 'normal',
    textAlign: 'center',
  },
});

export function VersionRenderer({ classes, children }) {
  return (
    <Rainbow aria-label="version" className={classes.version}>
      v{children}
    </Rainbow>
  );
}

VersionRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default Styled(styles)(VersionRenderer);
