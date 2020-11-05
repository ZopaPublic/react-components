import React, { SVGProps } from 'react';

export type TrustPilotStarsProps = SVGProps<SVGSVGElement> & {
  stars?: number;
};

const TrustPilotStars = ({ stars = 5, ...props }: TrustPilotStarsProps) => (
  <svg
    viewBox="0 0 139 24"
    height="20px"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="trust-pilot-rating-title trust-pilot-rating-desc"
    role="img"
    {...props}
  >
    <title id="trust-pilot-rating-title">Trustpilot Stars Logo</title>
    <desc id="trust-pilot-rating-desc">An illustration of the Trustpilot Stars Logo</desc>
    {stars >= 1 && (
      <>
        <path d="M0 0h23.91v23.91H0z" fill="#00B679" />
        <path
          d="M11.97 16.17l3.63-.96 1.53 4.71zm8.37-6.09h-6.42l-1.98-6.09-1.98 6.09H3.54l5.19 3.78-1.98 6.09 5.19-3.75 3.21-2.34z"
          fill="#fff"
        />
      </>
    )}
    {stars >= 2 && (
      <>
        <path d="M29 0h23.91v23.91H29z" fill="#00B679" />
        <path
          d="M40.97 16.17l3.63-.96 1.53 4.71zm8.37-6.09h-6.42l-1.98-6.09-1.98 6.09h-6.42l5.19 3.78-1.98 6.09 5.19-3.75 3.21-2.34z"
          fill="#fff"
        />
      </>
    )}
    {stars >= 3 && (
      <>
        <path d="M58 0h23.91v23.91H58z" fill="#00B679" />
        <path
          d="M69.97 16.17l3.63-.96 1.53 4.71zm8.37-6.09h-6.42l-1.98-6.09-1.98 6.09h-6.42l5.19 3.78-1.98 6.09 5.19-3.75 3.21-2.34z"
          fill="#fff"
        />
      </>
    )}
    {stars >= 4 && (
      <>
        <path d="M86 0h23.91v23.91H86z" fill="#00B679" />
        <path
          d="M97.97 16.17l3.63-.96 1.53 4.71zm8.37-6.09h-6.42l-1.98-6.09-1.98 6.09h-6.42l5.19 3.78-1.98 6.09 5.19-3.75 3.21-2.34z"
          fill="#fff"
        />
      </>
    )}
    {stars >= 5 && (
      <>
        <path d="M115 0h23.91v23.91H115z" fill="#00B679" />
        <path
          d="M126.97 16.17l3.63-.96 1.53 4.71zm8.37-6.09h-6.42l-1.98-6.09-1.98 6.09h-6.42l5.19 3.78-1.98 6.09 5.19-3.75 3.21-2.34z"
          fill="#fff"
        />
      </>
    )}
  </svg>
);

export default TrustPilotStars;
