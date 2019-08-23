import React from 'react';

export interface IFacebookProps {
  /**
   * @default 24px
   */
  size?: string;
}

const Facebook: React.FunctionComponent<IFacebookProps> = ({ size }) => (
  <svg
    role="img"
    width={size}
    height={size}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
  >
    <path
      d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm-3 7h-1.924C13.461 7 13 7.252 13 7.889V9h3l-.238 3H13v8h-3v-8H8V9h2V7.077C10 5.055 11.064 4 13.461 4H16v3z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

Facebook.defaultProps = {
  size: '24px',
};

export default Facebook;
