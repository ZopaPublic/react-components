import React from 'react';
import * as colors from '../../../constants/colors';

export interface ICheckMarkProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Targets the svg's `fill` attribute
   */
  color?: string;
}

const CheckMark = ({ color = colors.extended.blue500, ...rest }: ICheckMarkProps) => {
  return (
    <svg width="14px" height="12px" viewBox="0 0 14 12" version="1.1" aria-label="Checkmark" role="img" {...rest}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-5.000000, -7.000000)">
        <g fill={color}>
          <path d="M8.8937112,18.1162104 L5.28067153,13.7796715 C4.86185798,13.276869 4.91785534,12.5208652 5.40783219,12.088863 C5.89547582,11.6556608 6.63277432,11.7132611 7.05275448,12.2196637 L9.70329594,15.3996797 L16.9806188,7.38003928 C17.4204314,6.89643685 18.1588965,6.87123672 18.629041,7.32243899 C19.100352,7.77484127 19.1260175,8.53324509 18.6862049,9.01924754 L10.4025549,18.1480964 C10.0314235,18.5570951 9.3990031,18.5877927 8.99000439,18.2166613 C8.95561314,18.1854542 8.92343754,18.1518893 8.8937112,18.1162104 Z" />
        </g>
      </g>
    </svg>
  );
};

export default CheckMark;
