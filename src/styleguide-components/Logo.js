import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import zLogo from './images/z-logo.png';

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
  logoWrap: {
    textAlign: 'center',
  },
  divSvg: {
    margin: '0 auto',
    with: '100%',
  },
  svg: {
    marginBottom: '1em',
  },
  titleRepo: {
    fontSize: 14,
    color: '#C0E1D7',
    textAlign: 'center',
    cursor: 'pointer',
  },
});

const ZLogo = styled.img`
  margin-bottom: 10px;
  border-radius: 10px;
  width: 50px;
`;

export function LogoRenderer({ classes, children }) {
  return (
    <div className={classes.container}>
      <h1 className={classes.logo}>
        <div className={classes.logoWrap}>
          <ZLogo src={zLogo} alt="Zopa logo just displaying the letter Z" width="50" />
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
