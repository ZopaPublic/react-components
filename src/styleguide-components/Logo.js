import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import zopaLogo from './svg/zopaLogo.svg';
const styles = ({ fontFamily, color }) => ({
  container: {
    width: '80%',
    margin: '0 auto',
  },
  logo: {
    fontFamily: fontFamily.base,
    fontSize: 18,
    fontWeight: 'normal',
    color: color.baseBackground,
  },
  divSvg: {
    margin: '0 auto',
    with: '100%',
  },
  svg: {
    marginBottom: '1em',
  },
  titleRepo: {
    fontSize: '13.5px',
    textAlign: 'center',
    cursor: 'pointer',
  },
});

export function LogoRenderer({ classes, children }) {
  return (
    <div className={classes.container}>
      <h1 className={classes.logo}>
        <div className={classes.divSvg}>
          <img src={zopaLogo} alt="logo zopa" />
        </div>
        <a
          className={classes.titleRepo}
          href="https://github.com/zopaUK/react-components"
          title="Go to github repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </h1>
    </div>
  );
}

LogoRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default Styled(styles)(LogoRenderer);
