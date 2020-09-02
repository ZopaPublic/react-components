import React from 'react';
import Alert, { AlertProps } from '../../atoms/Alert/Alert';

type BannerProps = AlertProps;

const Banner = (props: BannerProps) => {
  return <Alert hasRoundedCorners={false} {...props} />;
};

export default Banner;
